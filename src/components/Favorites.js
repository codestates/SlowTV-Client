import React, { userState } from "react";
import FakeSide from "./Fake/FakeSide";
import FakeNav from "./Fake/FakeNav";
import axios from "axios";
import "./Favorites.css";
import VideoPlayer from "./VideoPlayer";

// function Video({ video, handleClick }) { ***handleClick은 Contents에서 올것
// function Video({ video }) {
//     return (
//         <div className="video">
//             <img className="thumbnail-img"
//                 src={`${video.thumbnail}`}
//                 alt={`${video.contentname} img not available at the moment`}
//             ></img>
//             <span>{video.contentlink}</span>
//             <span>{video.contentname}</span>
//         </div>
//     )
// }

// function FavVideo({
//     video,
//     checkedVideos,
//     handleCheckChange,
// }) {
//     return (
//         <li>
//             <input
//                 type="checkbox"
//                 className="fav-video-checkbox"
//                 onChange={(e) => {
//                     handleCheckChange(e.target.checked, video.id)
//                 }}
//                 checked={checkedVideos.includes(video.id) ? true : false}
//             ></input>
//             <div className="fav-video-thumbnail">
//                 {/* <img src={video.thumbnail} alt={video.contentname} /> */}
//                 <iframe
//                     src={video.contentlink}
//                     frameBorder="0"
//                     allow="autoplay; encrypted-media"
//                     title={video.contentname}
//                 />
//             </div>
//             <div>
//                 <span>{video.contentname}</span>
//             </div>
//         </li>
//     )
// }


class Favorites extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     favVideos: null,
        // };
    }
    /*
    props로 contents의 video와 favoritesvideos가 들어올듯!
     * 1. 현재 유저정보에 저장된 비디오 썸네일 보여주기
     * 2. 삭제버튼 -> 삭제 요청
     * 3. 전체 선택, 전체 삭제
     * 4. 컨텐트에서 추가하면, 알림! (이미 favorites에 있다)
     */

    // componentDidMount() {
    //     axios.get("https://mayweather24.com/favorites",
    //         { withCredentials: true })
    //         .then((res) => {
    //             console.log("fav componentdidmount data.userFav[0]>>", res.data.userFavorites[0])
    //             // this.setState({
    //             //     favVideos: res.data.userFavorites
    //             // })
    //         })
    // }

    render() {
        return (
            <div id="fav-list-container">
                <div id="fav-list-body">
                    <FakeNav />
                    <div id="fav-list-title">Favorites</div>
                    <span id="favorites-select-all"></span>
                </div>
                <div>
                    <li className="fav-thumbnail-list">
                        <input
                            type="checkbox"
                            className="fav-video-checkbox"
                        ></input>
                        <div>
                            <img
                                className="fav-thumbnail-img"
                                src={this.props.videoData[0].thumbnail}
                                alt={this.props.videoData[0].contentname}
                            />
                        </div>
                        <div>
                            {/* <span>{this.state.favVideos[0].contentname}</span> */}
                        </div>
                    </li>
                    {/* <FavVideo
                        key={idx}
                        handleCheckChange={this.props.handleCheckChange}
                        handleDelete={this.props.handleDelete}
                        video={this.props.video}
                        checkedVideos={this.props.checkedVideos}
                    /> */}
                    <button className="fav-video-delete" >Remove</button>
                </div>
            </div>
        )
    }
}

export default Favorites;