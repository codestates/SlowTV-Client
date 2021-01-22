// import React from "react";
// import Login from "../components/Login";
// import { connect } from "react-redux";
// import { click } from "../modules/login";

// const LoginContainer = ({ }) => {
//     return <Login />;
// }

// const mapStateToProps = (state) => ({ //리덕스 state
//     userId: state.login.userId, //props에서 userId꺼내오기
//     isLoggedin: state.login.isLogin //마찬가지 props로
// });

// const mapDispatchToProps = (dispatch) => ({
//     // 이름 변경 버튼
//     handleOnClickNameBtn: () => {
//         console.log("clicked handleOnClickNameBtn");
//         dispatch(clickedNameBtn());
//     },
//     // 비밀번호 변경 버튼
//     handleOnClickPasswordBtn: () => {
//         console.log("clicked handleOnClickPasswordBtn ");
//         dispatch(clickedPasswordBtn());
//     },
//     // 이름 텍스트 변경 // 한 글자 바뀌면 바로 디스패치 되는 문제 발생.
//     hadleOnChangeName: (e) => {
//         e.preventDefault();
//         console.log("e.target.value>>>", e.target.value);
//         dispatch(changedName(e));
//     },
//     // 비밀번호 텍스트 변경 // 한 글자 바뀌면 바로 디스패치 되는 문제 발생.
//     hadleOnChangePassword: (e) => {
//         e.preventDefault();
//         console.log("e.target.value>>>", e.target.value);
//         dispatch(changedPassword(e));
//     },
// });

// const loginMiddleware = storeAPI => next => action => {
//     if (action.type === 'login/LOGIN') {
//         // Make an API call to fetch todos from the server
//         axios.post('https://www.mayweather24.com/login').then(res => {
//             // Dispatch an action with the todos we received
//             dispatch({ type: 'LOGIN_SUCCESS', payload: todos })
//         })
//             .catch(() => {
//                 dispatch({ type: 'LOGIN_FAILED' })
//             })
//     }

//     return next(action)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
// // export default connect(mapStateToProps 리덕스 state값 연결, mapDispatchToProps 액션 생성 함수 연결)(ProfileContainer);