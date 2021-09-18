import { h, FunctionalComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { EventHook } from '../../services/EventHook'

const PlayControl: FunctionalComponent = () => {
  const eventHook = useContext(EventHook)

  const onClick: void = () => {
    eventHook.emit('PLAY_EVENT')
  }

  return (
    <div class='text-white hover:text-gray-200 cursor-pointer'>
      <SvgIcon onClick={onClick}>play_arrow</SvgIcon>
    </div>
  )
}

export default PlayControl
