import { Action } from "../actions/actions"


type CountState = {
  count: number;
}

const initialState: CountState = {
  count: 0,
}

const counterReducer = (state: CountState = initialState, action: Action) => {
  switch(action.type) {
      case 'COUNTER_INCREMENT':
          return {
              ...state,
              count: state.count + 1,
          }
      case 'COUNTER_DECREMENT':
          return {
              ...state,
              count: state.count - 1,
          }
      default:
          return state;
  }
}
export default counterReducer