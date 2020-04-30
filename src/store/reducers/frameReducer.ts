import {
  ADD_FRAME,
  REMOVE_FRAME,
  UPDATE_FRAME,
  FrameAction,
  Frame
} from 'types'

const initialState: Array<Frame> = []

export default (
  state = initialState,
  action: FrameAction
) => {
  switch (action.type) {

  case ADD_FRAME:
    return [...state, action.payload]

  case REMOVE_FRAME:
    return state.reduce<Frame[]>((res, elem, index) => {
      if(index !== action.meta.index)
        res.push(elem)
      return res
    }, [])
  
  case UPDATE_FRAME:
    return state.reduce<Frame[]>((res, elem, index) => {
      if(index === action.meta.index)
        res.push(action.payload)
      return res
    }, [])

  default:
    return state
  }
}
