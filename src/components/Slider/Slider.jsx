import { useContext } from 'react'
import Context from '../../Context/StateContext';
import "./Slider.css"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function Slider() {

  const { currentSlide, setCurrentSlide } = useContext(Context)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  const data = [
    'assets/slider_1.jpg',
    'assets/slider_2.jpg',
    'assets/slider_3.jpg'
  ]


  return (
    <div className='slider'>
      <div className='container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
      </div>

      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <FaAngleLeft />
        </div>
        <div className='icon' onClick={nextSlide}>
          <FaAngleRight />
        </div>
      </div>
    </div>
  )
}

export default Slider