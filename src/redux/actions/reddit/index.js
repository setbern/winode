import { LOAD_SUBREDDIT } from './actionTypes';

export function loadSubreddit(subreddit) {
  return {
    type: LOAD_SUBREDDIT,
    subreddit,
  };
}