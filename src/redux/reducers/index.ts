import { user } from "../../types/user";

interface State {
  user: user | undefined;
}

const initialState: State = {
  user: undefined,
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

    default:
      return state;
  }
};

export default mainReducer;
