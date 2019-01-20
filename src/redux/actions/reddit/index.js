import fetch from 'cross-fetch';

import { REQUEST_POSTS, RECEIVE_POSTS } from './actionTypes';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
  };
}

function fetchPosts(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json());
}

export function fetchSubreddit(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));

    return fetchPosts(subreddit)
      .then(json => dispatch(receivePosts(json)));
  }
}