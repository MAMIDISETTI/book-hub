import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  // const {booksList} = props
  return (
    <div className="slider-container">
      <div className="slider-container-desc">
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
        </Slider>
      </div>
      <div className="slider-container-mobile">
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png"
              alt="slider"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ReactSlick
