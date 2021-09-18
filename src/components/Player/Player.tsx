import { h, FunctionalComponent } from 'preact'
import { useEffect, useState, useRef, useContext } from 'preact/hooks'
import Hls from 'hls.js'
import ControlBar from '../ControlBar/ControlBar'
import { EventHook } from '../../services/EventHook'

const Player: FunctionalComponent = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const eventHook = useContext(EventHook)

	const onPlay = (): void => {
		videoRef.current?.play()
	}

	useEffect(() => {
		if (eventHook) {
			eventHook.on('PLAY_EVENT', onPlay)
		}
	}, [eventHook])

	useEffect(() => {
		(async (): Promise<void> => {
			setLoading(true)
			const contentId = '15c64e6c-6611-8e90-f823-3ebcb8e5f494-vod-f4ef4fa5-667a-22c3-ba7d-c99213c32e9b'
			const response = await fetch(`https://playback-dev.dacast.com/content/access?contentId=${contentId}&provider=universe`)
			const data = await response.json()
			setLoading(false)

			const video = videoRef.current
			if (!video) {
				return
			}

			if (Hls.isSupported()) {
				const hls = new Hls()
				hls.loadSource(data.hls)
				hls.attachMedia(video)
			} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
				video.src = data.hls
			}
		})()
	}, [])

	const renderLoading = (): h.JSX.Element => (
		<div class='absolute inset-0 flex items-center justify-center text-white'>
			<p>Loading...</p>
		</div>
	)

	return (
		<div class='h-full flex items-center justify-center'>
			{loading && renderLoading()}
			<video ref={videoRef} class='w-full h-full' />
			<ControlBar />
		</div>
	)
}

export default Player
