import { user } from "../../types/user"

interface State {
    user: user | undefined
}


const initialState: State = {
    user: undefined
}

interface Action {
    type: string,
    payload: user
}

const mainReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default mainReducer