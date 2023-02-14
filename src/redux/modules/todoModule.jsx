// 1. Actions
const CREATE = "todo/CREATE";

// REMOVE()
const REMOVE = "todo/REMOVE";

// 2. Action Creators
//create
export function addTodo(title, desc) {
  return {
    type: CREATE,
    title,
    desc,
  };
}

// remove
export function removeTodo(id) {
  return {
    type: REMOVE,
    id,
  };
}

// 3. 초기 상태값
const initialState = [
  {
    id: 0,
    title: "리액트 공부 하기",
    desc: "리액트를 공부하는거임",
    isDone: false,
  },
];

// 4. Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      //[...기존값을, {새로운 객체로 넣어줘라}]
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          desc: action.desc,
          isDone: false,
        },
      ];
    case REMOVE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
