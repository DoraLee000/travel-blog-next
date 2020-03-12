import { actionTypes } from './actions';

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  current:2,
  defultData: null,
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      }

    case actionTypes.UPDATE_DATA:
      return {
        ...state,
        ...{ current: state.current + 1 },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ defultData: action.data },
      }


    default:
      return state
  }
}

export default reducer