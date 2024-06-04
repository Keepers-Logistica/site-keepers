import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

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
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Navigation,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import autoPartsImg from '@/assets/images/carousel/autoparts.jpg'
import autoPartsImgEn from '@/assets/images/carousel/autoparts-en.png'
import cosmeticsImg from '@/assets/images/carousel/cosmetics.jpg'
import cosmeticsImgEn from '@/assets/images/carousel/cosmetics-en.png'
import ecommerceImg from '@/assets/images/carousel/ecommerce.jpg'
import foodsImg from '@/assets/images/carousel/foods.jpg'
import foodsImgEn from '@/assets/images/carousel/foods-en.png'
import graphImg from '@/assets/images/carousel/graph.jpg'
import graphImgEn from '@/assets/images/carousel/graph-en.png'
import hospitalImg from '@/assets/images/carousel/hospital.jpg'
import hospitalImgEn from '@/assets/images/carousel/hospital-en.png'
import suprimentsImg from '@/assets/images/carousel/supriments.jpg'
import suprimentsImgEn from '@/assets/images/carousel/supriments-en.png'
import { useResponsive } from '@/hooks/responisve'

import { TitleHeader } from '../title-header'

interface Slides {
  id: number
  name: string
  img: string
  icon: ReactNode
}

export function SegmentsSection() {
  const { Desktop, Mobile } = useResponsive()
  const { ref: titleRef, inView: inViewTitle } = useInView()
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const slides: Slides[] = [
    {
      id: 1,
      name: 'Peças',
      img: language === 'pt' ? autoPartsImg : autoPartsImgEn,
      icon: <Gear color="white" className="h-8 w-8" />,
    },
    {
      id: 2,
      name: 'Cosméticos',
      img: language === 'pt' ? cosmeticsImg : cosmeticsImgEn,
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
      img: language === 'pt' ? foodsImg : foodsImgEn,
      icon: <ForkKnife color="white" className="h-8 w-8" />,
    },
    {
      id: 5,
      name: 'Gráfica',
      img: language === 'pt' ? graphImg : graphImgEn,
      icon: <Graph color="white" className="h-8 w-8" />,
    },
    {
      id: 6,
      name: 'Hospitalar',
      img: language === 'pt' ? hospitalImg : hospitalImgEn,
      icon: <Hospital color="white" className="h-8 w-8" />,
    },
    {
      id: 7,
      name: 'Suprimentos',
      img: language === 'pt' ? suprimentsImg : suprimentsImgEn,
      icon: <Archive color="white" className="h-8 w-8" />,
    },
  ]
  return (
    <Element name="segments">
      <div className="relative mb-16" ref={titleRef}>
        <TitleHeader
          title={t('segmentsSection.title')}
          className="mb-40 "
          inView={inViewTitle}
        />
        <div className="bg-[#FF8B4D] pb-0 lg:pb-24">
          <Desktop>
            <div className="flex flex-col items-center justify-center !overflow-visible">
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
                className="mySwiper -mt-28 !overflow-visible"
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
          <Mobile>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                stopOnLastSlide: false,
                waitForTransition: true,
              }}
            >
              {slides.map((slide, index) => (
                <div key={index}>
                  <SwiperSlide className="overflow-hidden rounded-xl">
                    <div className="h-full rounded-xl">
                      <img
                        src={slide.img}
                        alt={slide.name}
                        className="z-10 h-full cursor-grab select-none rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </Mobile>
        </div>
      </div>
    </Element>
  )
}
