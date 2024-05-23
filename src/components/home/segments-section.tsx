import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  Archive,
  Bag,
  CaretLeft,
  CaretRight,
  ForkKnife,
  Gear,
  Graph,
  Hospital,
  ShoppingCart,
} from '@phosphor-icons/react'
import { ReactNode, useState } from 'react'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import autoPartsImg from '@/assets/images/carousel/autoparts.jpg'
import cosmeticsImg from '@/assets/images/carousel/cosmetics.jpg'
import ecommerceImg from '@/assets/images/carousel/ecommerce.jpg'
import foodsImg from '@/assets/images/carousel/foods.jpg'
import graphImg from '@/assets/images/carousel/graph.jpg'
import hospitalImg from '@/assets/images/carousel/hospital.jpg'
import suprimentsImg from '@/assets/images/carousel/supriments.jpg'

interface Slides {
  id: number
  name: string
  img: string
  icon: ReactNode
}

const slides: Slides[] = [
  {
    id: 1,
    name: 'Peças',
    img: autoPartsImg,
    icon: <Gear color="white" className="h-8 w-8" />,
  },
  {
    id: 2,
    name: 'Cosméticos',
    img: cosmeticsImg,
    icon: <Bag color="white" className="h-8 w-8" />,
  },
  {
    id: 3,
    name: 'Ecommerce',
    img: ecommerceImg,
    icon: <ShoppingCart color="white" className="h-8 w-8" />,
  },
  {
    id: 4,
    name: 'Alimentos',
    img: foodsImg,
    icon: <ForkKnife color="white" className="h-8 w-8" />,
  },
  {
    id: 5,
    name: 'Gráfica',
    img: graphImg,
    icon: <Graph color="white" className="h-8 w-8" />,
  },
  {
    id: 6,
    name: 'Hospitalar',
    img: hospitalImg,
    icon: <Hospital color="white" className="h-8 w-8" />,
  },
  {
    id: 7,
    name: 'Suprimentos',
    img: suprimentsImg,
    icon: <Archive color="white" className="h-8 w-8" />,
  },
]

export function SegmentsSection() {
  const [slideIndex, setSlideIndex] = useState(1)

  const currentItem = slides.find((slide) => slide.id === slideIndex)

  return (
    <div className="mb-16">
      <div className="mb-40 flex flex-col items-center justify-center">
        <h1 className="font-title text-5xl font-semibold text-[#391805]">
          Segmentos
        </h1>
        <figure className="mt-4 h-2 w-52 rounded-sm bg-primary" />
      </div>
      <div className=" bg-[#FF8B4D] pb-10">
        <div className="flex flex-col items-center justify-center">
          <Swiper
            onRealIndexChange={({ activeIndex }) =>
              setSlideIndex(activeIndex + 1)
            }
            pagination={{
              clickable: true,
            }}
            autoplay
            navigation={true}
            modules={[EffectCoverflow]}
            className="mySwiper -mt-28"
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="overflow-hidden rounded-xl">
                <div className="h-full rounded-xl bg-red-300">
                  <img
                    src={slide.img}
                    alt={slide.name}
                    className="cursor-grab select-none rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-8 flex items-center gap-4">
            <CaretLeft className="h-6 w-6" color="white" />
            <div className="rounded-lg border-2 p-1">{currentItem?.icon}</div>
            <h4 className="font-title  text-3xl font-bold text-white">
              {currentItem?.name}
            </h4>
            <CaretRight className="h-6 w-6" color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
