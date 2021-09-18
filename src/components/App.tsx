import { h, FunctionalComponent } from 'preact'
import Player from './Player/Player'

const App: FunctionalComponent = () => {
	return (
		<div id='app' class='h-full'>
			<Player />
		</div>
		)
}

export default App
