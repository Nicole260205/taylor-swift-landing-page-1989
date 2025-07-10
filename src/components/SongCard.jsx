import { useState } from "react";

function SongCard({ img1, img2, img3, alt }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const getCurrentImage = () => {
    if (clicked) return img3;
    if (hovered) return img2;
    return img1;
  };

  return (
    <div
      className="song-card"
      onClick={() => setClicked(!clicked)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={getCurrentImage()} alt={alt} className="song-image" />
    </div>
  );
}

export default SongCard;
