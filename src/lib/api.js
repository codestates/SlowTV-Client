// 리덕스에서 비동기 처리 시 가장 기본적으로 사용되는 redux-thunk 사용
// api 모두 함수화 => 가독성, 유지보수
import axios from "axios";

// 컨텐츠 영상 받아오기
export const getContents = (category) => {
  axios.post(
    `https://mayweather24.com/category`,
    {
      category,
    },
    {
      withCredentials: true,
    }
  );
};

// export const

// POST 요청
// /category
// ex) req.body : { “category”:”water” }
// 해당 카테고리의 컨텐츠를 보내줍니다. (영상제목, 영상링크, 썸네일)
// water, snow, fire, green <- 일단 DB에서의 카테고리 네임은 이렇게 하였습니다.

// 현재 DB에 카테고리별로 컨텐츠를 3개씩 올려놓은 상태로 테스트 해보실 수 있습니다.
// https://mayweather24.com 우선은 메이웨더 서버를 이용해 주세요~
