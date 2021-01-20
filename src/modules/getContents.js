import { handleActions } from "react-redux";
import * as api from "../lib/api";

// 액션 타입을 선언
// 한 요청당 세 개를 만들어야 합니다. 1.요청시 2.성공 3.실패

const GET_CONTENTS = "getContents/GET_CONTENTS";
const GET_CONTENTS_SUCCESS = "getContents/GET_CONTENTS_SUCCESS";
const GET_CONTENTS_FAILURE = "getContents";
