import { h, FunctionalComponent } from 'preact'
import PlayControl from '../Controls/PlayControl'

const ControlBar: FunctionalComponent = () => {
  return (
    <div class='absolute inset-x-0 bottom-0 h-9 flex justify-between bg-black bg-opacity-50'>
      <div class='flex items-center'>
        <PlayControl />
      </div>
    </div>
  )
}

export default ControlBar
