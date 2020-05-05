
export const initialState = '';
export const SET_REPOS = 'SET_REPOS';

// if location not insert in top-bar-componnt input-text state=initalstate
// else state=SET_LOCATION and check for location(payload)

export function reposReducer(state = initialState, action: any) {
    switch (action.type) {
      case SET_REPOS:
          return action.payload;
        default:
            return state;
    }
}



