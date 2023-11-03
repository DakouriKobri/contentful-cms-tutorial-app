// Local Files
import heroImg from '../assets/hero.svg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quisquam vel rem eius ratione id, magnam quidem odit dicta dolores
            neque. Officiis modi laboriosam praesentium quis eveniet sed
            molestiae pariatur?
          </p>
        </div>

        <div className="img-container">
          <img
            className="img"
            src={heroImg}
            alt="Drawing of a woman facing a huge screen showing a browser."
          />
        </div>
      </div>
    </section>
  );
}
