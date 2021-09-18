import { createContext } from 'preact'
import mitt from 'mitt'

export type PlayerEvents = {
  PLAY_EVENT: string;
}

export const EventHook = createContext(mitt<PlayerEvents>())
