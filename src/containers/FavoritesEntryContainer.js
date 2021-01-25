// import React from "react";
// import FavoritesEntry from "../components/FavoritesEntry";
// import { clickThumbnail, addFavorites } from "../modules/water";
// import { connect } from "react-redux";

// const FavoritesEntryContainer = ({
//   id,
//   handleOnClick,
//   isClicked,
//   isModalClicked,
//   handleOnClickModal,
//   videoData,
//   clickThumbnail,
//   addFavorites,
//   isAddFavoirtes,
//   isLoggedIn,
// }) => {
//   return (
//     <FavoritesEntry
//       id={id}
//       handleOnClick={handleOnClick}
//       isClicked={isClicked}
//       isModalClicked={isModalClicked}
//       videoData={videoData}
//       clickThumbnail={clickThumbnail}
//       addFavorites={addFavorites}
//       isAddFavoirtes={isAddFavoirtes}
//       isLoggedIn={isLoggedIn}
//     />
//   );
// };

// const mapStateToProps = (state) => ({
//   id: state.water.id,
//   isClicked: state.hamburger.isClicked,
//   isModalClicked: state.modal.isModalClicked,
//   videoData: state.fakeside.videoData,
//   isAddFavoirtes: state.water.isAddFavoirtes,
//   isLoggedIn: state.login.isLoggedIn,
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   clickThumbnail: (id) => {
//     // 각 영상 아이디 얻어냄
//     // console.log("🚀 ~ file: ContentsContainer.js ~ line 23 ~ id", id);
//     dispatch(clickThumbnail(id));
//     props.history.push("/watch");
//   },
//   addFavorites: () => {
//     dispatch(addFavorites());
//   },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FavoritesEntryContainer);
