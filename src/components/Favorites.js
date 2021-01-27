import React from "react";
import { withRouter } from "react-router-dom";
import FakeSide from "./Fake/FakeSide";
import FakeNav from "./Fake/FakeNav";
import axios from "axios";
import "./Favorites.css";
import VideoPlayer from "./VideoPlayer";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }
    /*
    props로 contents의 video와 favoritesvideos가 들어올듯!
     * 1. 현재 유저정보에 저장된 비디오 썸네일 보여주기
     * 2. 삭제버튼 -> 삭제 요청
     * 3. 전체 선택, 전체 삭제
     * 4. 컨텐트에서 추가하면, 알림! (이미 favorites에 있다)
     */
    goBack = () => {
        this.props.history.goBack();
    };

    handleRemove = () => {
        if (this.props.favVidoes.length > 1) { //여기서 요청이 가나?
            axios.post("https://server.slowtv24.com/delete-favorite",
                { link: this.props.favVideos[0].contentlink },
                { withCredentials: true })
                .then(() => {
                    // if (this.props.favVideos.length > 1) {
                    this.props.handlefavorites();
                    // }
                })
        }
    };

    componentDidMount() {
        this.props.handlefavorites();
    };

    // componentDidUpdate(prev) {
    //     if (this.props.favVideos !== prev.favVideos) {
    //         this.fetchData(this.props.favVideos)
    //     }
    // }

    render() {
        return (
            <div id="fav-page">
                <h1>Favorites</h1>
                { this.props.favVideos !== null ?
                    (<div>
                        {this.props.favVideos.map(el => {
                            console.log("map el", el)
                            return (
                                <div key={el.contentlink}>
                                    <div>
                                        <img className="fav-thumbnail-img" src={el.thumbnail} alt={el.contentname} />
                                    </div>
                                    <div>
                                        <span className="fav-thumbnail-title">{el.contentname}</span>
                                        {/* <button className="fav-remove-btn" onClick=>Remove</button> */}
                                    </div>
                                </div>
                            )
                        })}
                        <button className="fav-remove-btn" onClick={this.handleRemove} title="You can remove only one video at a time from the top.">Remove</button>
                    </div>)
                    //즐겨찾기에 추가한 비디오가 없을 때
                    : (<div>
                        <div>You don't have any favorite videos.</div>
                        {/* <button onClick={this.goBack}>Go back</button> */}
                    </div>)
                }
                <button onClick={this.goBack}>Go back</button>
            </div>)

    }
}

export default withRouter(Favorites);


{/* <span>{this.state.favVideos[0].contentname}</span> */ }
{/* <FavVideo
    key={idx}
    handleCheckChange={this.props.handleCheckChange}
    handleDelete={this.props.handleDelete}
    video={this.props.video}
    checkedVideos={this.props.checkedVideos}
/> */}