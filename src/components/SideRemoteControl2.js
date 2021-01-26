import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./SideRemoteControl2.css";

const SideRemoteControl2 = ({
  history,
  handleOnClickCategory,
  videoData,
  isLoggedIn,
  closeModal,
}) => {
  //! GoHome
  const handleGoHome = () => {
    closeModal();
    history.push("/");
  };
  // ! GoCotents
  const handleGoContents = () => {
    closeModal();
    history.push("/contents");
  };

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
  return (
    <div className="remote_control2">
      <div className="remote_control2_box">
        <div className="list_item2" onClick={handleGoHome}>
          Home
        </div>
        <div className="list_item2" onClick={handleGoContents}>
          Contents
        </div>
        <div className="list_item2" value="water" onClick={handleGoCategory}>
          Water
        </div>
        <div className="list_item2">Fire</div>
        <div className="list_item2">Snow</div>
        <Link className="side_Link" to="/contents/favorites">
          <div
            className="list_item2"
            value="favorites"
            onClick={handleGoFavorites}
          >
            Favorites
          </div>
        </Link>
        <Link className="side_Link" to="/contents/profile">
          <div
            className="list_item2"
            value="profile"
            onClick={handleGoCategory}
          >
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SideRemoteControl2);
