import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function CarouselArticles() {
  const swiperRef = useRef<any>(null)

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <div className="relative m-auto w-screen max-w-[1440px] ">
      <Swiper
        ref={swiperRef}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        className="h-[662px]"
      >
        <SwiperSlide className="bg-red-300">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-blue-300">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-green-300">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-yellow-300">Slide 4</SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          onClick={goPrev}
          className="z-10 -ml-14 flex h-[105px] w-[105px] items-center justify-end rounded-full bg-white"
        >
          <CaretLeft className="mr-2 h-9 w-9 font-semibold text-orange-500" />
        </button>
        <button
          onClick={goNext}
          className="z-10 -mr-14 flex h-[105px] w-[105px] items-center justify-start rounded-full bg-white"
        >
          <CaretRight className="ml-2 h-9 w-9 font-semibold text-orange-500" />
        </button>
      </div>
    </div>
  )
}
