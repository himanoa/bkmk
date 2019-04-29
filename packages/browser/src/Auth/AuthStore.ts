import { AuthUser } from "@bkmk/core"
import { BehaviorSubject } from "rxjs"

export type State = {
  currentUser: AuthUser | null
}

const initialState = (): State => {
  return {
    currentUser: null
  }
}

export const store = new BehaviorSubject<State>(initialState())
