import vinil from '../assets/vinil.png'
import seta_cima from '../assets/seta_cima.png'
import seta_lado from "../assets/seta_lado.png";
import seta_baixo from "../assets/seta_baixo.png";

function Album() {
  return (
    <>
      <div className="album">
        <div className="album-left">
          <h1 className="album-title">
            1989 <br />
            (Taylor's Version)
          </h1>
          <ol className="album-order">
            <li>
              “Welcome to New York” <img src={seta_cima} className="setas" />
            </li>
            <li>
              “Blank Space” <img src={seta_lado} className="setas" />
            </li>
            <li>
              “Style” <img src={seta_baixo} className="setas" />
            </li>
          </ol>
          <button className="album-button">Listen new album</button>
        </div>
        <div className="album-right">
          <img src={vinil} alt="Vinil de 1989" className="album-image" />
        </div>
      </div>
    </>
  );
}

export default Album
