// increment likes
export function increment(index) {
  // payload: send as little info as possible. Don't send full post.
  return {
    type: 'INCREMENT_LIKEkS',
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  };
}
