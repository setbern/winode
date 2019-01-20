import { LOAD_SUBREDDIT } from '../actions/reddit/actionTypes';

const initialState = {
  selectedSubreddit: '',
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUBREDDIT:
      const { subreddit } = action;

      return {
        ...state,
        selectedSubreddit: subreddit,
      };

    default:
      return state;
  }
}