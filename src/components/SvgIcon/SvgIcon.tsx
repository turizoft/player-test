import { h, FunctionalComponent, Fragment } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

export interface SvgIconProps {
	width?: number;
	height?: number;
}

export const SvgIcon: FunctionalComponent = (props: JSXInternal.DOMAttributes<SVGElement> & SvgIconProps) => {
	const { children, width, height, ...other } = props

	const iconPaths = ((ctx): Record<string, string> => {
		const keys = ctx.keys()
		const values = keys.map(ctx)
		return keys.reduce((o, k, i) => {
			const iconNameMatches = k?.match(/^\.\/(.*?)\.svg$/)
			if (o && iconNameMatches) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
				// @ts-ignore
				const modulePath = values?.[i]?.default
				o[iconNameMatches[1]] = modulePath
			}
			return o
		}, {} as Record<string, string>)
	})(require.context('../../assets/svg_icons', true, /\.svg$/))

	return children && iconPaths[children as string]
	? <svg
		width={width || 32}
		height={height || 32}
		data-icon-name={children}
		// eslint-disable-next-line react/no-danger
		dangerouslySetInnerHTML={{__html: `<use xlink:href="${iconPaths[children as string]}#icon"/>`}}
		{...other}
	/>
	: <Fragment />
}
