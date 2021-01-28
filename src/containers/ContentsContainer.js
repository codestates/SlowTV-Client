import React from "react";
import Contents from "../components/Contents";
import { connect } from "react-redux";
import { goToContentsPage } from "../modules/contents";

const ContentsContainer = ({
  isModalClicked,
  isContentsPage,
  goToContentsPage,
}) => {
  return (
    <Contents
      isModalClicked={isModalClicked}
      isContentsPage={isContentsPage}
      goToContentsPage={goToContentsPage}
    />
  );
};

const mapStateToProps = (state) => ({
  isModalClicked: state.modal.isModalClicked,
  isContentsPage: state.contents.isContentsPage,
});

const mapDispatchToProps = (dispatch) => ({
  goToContentsPage: () => {
    dispatch(goToContentsPage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentsContainer);
