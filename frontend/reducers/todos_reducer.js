const initialState = {
  1: {
    id: 1,
    title: "Call Stan Dupp",
    body: "While sitting down",
    done: false
  },
  2: {
    id: 2,
    title: "Email Rick O’Shea",
    body: "Make sure it doesn't bounce back",
    done: false
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type){
  default:
    return state;
  }
};

export default todosReducer;
