// 액션 타입 정의 : '모듈 이름/액션 이름' 형태로 작성, 액션 이름 충돌 방지
// DUCKS pattern사용! 오리무리;
const LOGIN = "login/LOGIN";
const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
const LOGIN_FAILED = "login/LOGIN_FAILED";

// 액션 생성 함수 만들기
// 버튼 클릭
export const clickedLogin = () => ({ type: LOGIN, payload });

// 로그인 실행
export const getLogin = (userId) => ({
    // export const getLogin = () => ({
    type: LOGIN,
    payload: {
        isLoading: true, //성공시 LOGIN_SUCCESS
    }
});

export const  = (e) => ({
    type: CHANGEPASSWORD,
    payload: e.target.value,
});

// 초기 상태 --> 로그인 success가 되면 islogin: true, 
const initialState = {
    isLoggedin: false,
    email: '',
    password: '',
};

// 리듀서
function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN
            return {
                isClickedChangeNameBtn: !state.isClickedChangeNameBtn,
            };
        case CHANGEPASSWORDBTN:
            return {
                isClickedChangePasswordBtn: !state.isClickedChangePasswordBtn,
            };
        case CHANGENAME:
            return {
                name: action.payload,
            };
        case CHANGEPASSWORD:
            return {
                password: action.payload,
            };
        default:
            return state;
    }
}

export default login;
