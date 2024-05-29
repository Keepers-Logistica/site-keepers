import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  Archive,
  Bag,
  ForkKnife,
  Gear,
  Graph,
  Hospital,
  ShoppingCart,
} from '@phosphor-icons/react'
import { ReactNode } from 'react'
import { Element } from 'react-scroll'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import autoPartsImg from '@/assets/images/carousel/autoparts.jpg'
import cosmeticsImg from '@/assets/images/carousel/cosmetics.jpg'
import ecommerceImg from '@/assets/images/carousel/ecommerce.jpg'
import foodsImg from '@/assets/images/carousel/foods.jpg'
import graphImg from '@/assets/images/carousel/graph.jpg'
import hospitalImg from '@/assets/images/carousel/hospital.jpg'
import suprimentsImg from '@/assets/images/carousel/supriments.jpg'
import { useResponsive } from '@/hooks/responisve'

import { TitleHeader } from '../title-header'

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
  const { Desktop } = useResponsive()
  return (
    <Element name="segments">
      <div className="relative mb-16">
        <TitleHeader title="Segmentos" className="mb-40 " />
        <div className="bg-[#FF8B4D] pb-24">
          <Desktop>
            <div className="flex flex-col items-center justify-center overflow-visible">
              <Swiper
                navigation
                modules={[EffectCoverflow, Autoplay, Navigation]}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  stopOnLastSlide: false,
                  waitForTransition: true,
                }}
                className="mySwiper -mt-28  overflow-visible"
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
                  <div key={index}>
                    <SwiperSlide className="h-full overflow-hidden rounded-xl">
                      <div className="h-full rounded-xl">
                        <img
                          src={slide.img}
                          alt={slide.name}
                          className="z-10 cursor-grab select-none rounded-xl"
                        />
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          </Desktop>
        </div>
      </div>
    </Element>
  )
}
