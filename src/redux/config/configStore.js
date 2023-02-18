// 중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../modules/todoModule";

// const rootReducer = combineReducers({
//   //이곳에 Modules 폴더에 넣어놓은 state의 묶음들을 넣을 예정
//   //즉, 리듀서
//   reducer,
// });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    reducer: reducer,
  },
});

export default store;
