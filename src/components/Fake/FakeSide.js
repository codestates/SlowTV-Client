//! 사이드는 햄버거 있는 버전, FakeSide는 햄버거 없는 버전
import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
// import "../SideRemoteControl.css";
import "./FakeSide.css";
const FakeSide = ({
  history,
  handleOnClickCategory,
  videoData,
  isLoggedIn,
  closeModal,
}) => {
  // ! 페이보릿 제외한 영상 카테고리
  const handleGoCategory = async (e) => {
    const category = e.target.attributes.value.value;
    if (category === "profile") {
      closeModal();
    } else {
      const video = await axios(
        `https://mayweather24.com/category/${category}`,
        {
          withCredentials: true,
        }
      );
      // console.log(
      //   "🚀 ~ file: FakeSide.js ~ line 15 ~ handleGoCategory ~ video",
      //   video.data.contents
      // );
      handleOnClickCategory(video.data.contents);
      closeModal();
      history.push(`/contents/${category}`);
    }
  };

  // ! 페이보릿 카테고리
  const handleGoFavorites = async (e) => {
    // ! 게스트인 경우, 페이보릿 아무 것도 없음
    if (!isLoggedIn) {
      handleOnClickCategory(null);
    }
    // ! 로그인한 경우
    const category = e.target.attributes.value.value;
    console.log("페이보릿 클릭");
    const favorites = await axios(`https://mayweather24.com/${category}`, {
      withCredentials: true,
    });
    // const favorites = await axios(`https://mayweather24.com/favorite`, {
    //   withCredentials: true,
    // });
    console.log("1");
    console.log(
      "🚀 ~ file: FakeSide.js ~ line 37 ~ handleGoFavorites ~ favorites",
      favorites.data.userFavorites
    );
    console.log("2");
    if (isLoggedIn && favorites.data.userFavorites) {
      handleOnClickCategory(favorites.data.userFavorites);
    } else {
      handleOnClickCategory(null);
    }
  };

  /* Favorites
 {
            "id": 1,
            "contentname": "Bonfire on the sandy beach",
            "contentlink": "https://drive.google.com/file/d/1a1o7aFcOYbnROTmSHjdYvG6Ii5HLh3Mw/preview",
            "thumbnail": "https://media.vlpt.us/images/rhdgoehe2/post/5225f7c2-3e41-4fe3-90c6-0d7a4550ffe5/EC879ED4-500B-409F-B25F-55A7B2AB702B.jpeg",
            "categoryname": "fire",
            "isFavorite": true
        },
  */

  return (
    <div className="side">
      <ul>
        <li>
          <Link className="side_Link" to="/">
            Fake Home
          </Link>
        </li>
        <li>
          {/* <Link className="side_Link" to="/contents/water"> */}
          <div value="water" onClick={handleGoCategory}>
            Water
          </div>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link className="side_Link" to="/contents/fire"> */}
          {/* <div value="fire" onClick={handleGoCategory}> */}
          Fire
          {/* </div> */}
          {/* </Link> */}
        </li>
        <li>
          {/* <Link className="side_Link" to="/contents/snow"> */}
          {/* <div value="snow" onClick={handleGoCategory}> */}
          Snow
          {/* </div> */}
          {/* </Link> */}
        </li>
        <li>
          {/* <Link className="side_Link" to="/contents/grass"> */}
          {/* <div value="grass" onClick={handleGoCategory}> */}
          Grass
          {/* </div> */}
          {/* </Link> */}
        </li>
        <li>
          <Link className="side_Link" to="/contents/favorites">
            <div value="favorites" onClick={handleGoFavorites}>
              Favorites
            </div>
          </Link>
        </li>
        <li>
          <Link className="side_Link" to="/contents/profile">
            <div value="profile" onClick={handleGoCategory}>
              Profile
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(FakeSide);
