import { user } from "../../types/user";

interface State {
  user: user | undefined;
  friends: user[] | []
}

const initialState: State = {
  user: undefined,
  friends: []
};

interface Action {
  type: string;
  payload: user;
}

const mainReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    
    case "PROFILE":
      return {
        ...state,
        user: action.payload,
      };
      case 'FRIENDS':
        return{
          ...state,
          friends: action.payload
        }
    default:
      return state;
  }
};

export default mainReducer;
