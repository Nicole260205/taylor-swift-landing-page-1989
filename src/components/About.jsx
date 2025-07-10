import baby_taylor from '../assets/baby-taylor.png'
function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img
            src={baby_taylor}
            alt="Baby Taylor Swift"
            className="about-img"
          />
        </div>
        <div className="about-right">
          <h1 className='about-title'>Taylor Alison Swift</h1>
          <p className='about-text'>
            (born December 13, 1989) is an American singer-songwriter. Her
            songwriting, artistry, and entrepreneurship have vastly influenced
            the music industry and popular culture, and her life is a subject of
            widespread media coverage.
          </p>
          <button className='about-button'>Read more</button>
        </div>
      </div>
    </>
  );
}

export default About
