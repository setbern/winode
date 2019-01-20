import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
} from '../actions/reddit/actionTypes';

const initialState = {
  isFetching: false,
  posts: [],
  selectedSubreddit: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        selectedSubreddit: action.subreddit,
      };

    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      };

    default:
      return state;
  }
}