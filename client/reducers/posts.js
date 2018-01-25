// Reducer takes in: 1) Action, 2) Copy of current State

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
