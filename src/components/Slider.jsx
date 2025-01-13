import Image1 from '../images/Image1.jpg'
import Image2 from '../images/Image2.jpg'
import Image3 from '../images/Image3.jpg'
import '../Slider.css'

export default function Slider() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100 height-full" alt="Loading..." />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100 height-full" alt="Loading..." />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100 height-full" alt="Loading..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
