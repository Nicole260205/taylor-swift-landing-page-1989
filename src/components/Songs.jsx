import SongCard from "./SongCard"

import shake1 from "../assets/songs/shake_pb.png";
import shake2 from "../assets/songs/shake_hover.png";
import shake3 from "../assets/songs/shake_active.png";

import style1 from "../assets/songs/style_pb.png";
import style2 from "../assets/songs/style_hover.png";
import style3 from "../assets/songs/style_active.png";

import blank1 from "../assets/songs/blank_pb.png";
import blank2 from "../assets/songs/blank_hover.png";
import blank3 from "../assets/songs/blank_active.png";
 


function Songs() {
  return (
    <>
      <div className="songs">
        <div className="songs-header">
          <p>explore the most popular songs</p>
        </div>
        <div className="songs-grid">
          <SongCard
            img1={shake1}
            img2={shake2}
            img3={shake3}
            alt="Shake It Off"
          />
          <SongCard
            img1={style1}
            img2={style2}
            img3={style3}
            alt="Style"
          />
          <SongCard
            img1={blank1}
            img2={blank2}
            img3={blank3}
            alt="Blank Space"
          />
        </div>
      </div>
    </>
  );
}

export default Songs
