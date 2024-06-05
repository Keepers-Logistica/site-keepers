import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  BoxArrowDown,
  Car,
  CheckCircle,
  CheckSquare,
  CirclesThreePlus,
  Clipboard,
  Graph,
  Truck,
  UsersThree,
} from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'
import { Element } from 'react-scroll'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CarouselAutoParts from '@/assets/images/carousel/carousel-autoparts.png'
import CarouselCosmetics from '@/assets/images/carousel/carousel-cosmetics.png'
import CarouselEcommerce from '@/assets/images/carousel/carousel-ecommerce.png'
import CarouselFoods from '@/assets/images/carousel/carousel-foods.png'
import CarouselGraph from '@/assets/images/carousel/carousel-graph.png'
import CarouselHospital from '@/assets/images/carousel/carousel-hospital.png'
import CarouselSupriments from '@/assets/images/carousel/carousel-supriments.png'

import { TitleHeader } from '../title-header'
import { Button } from '../ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Separator } from '../ui/separator'
import { CardCarousel } from './card-carousel'

type $SpecialObject = object | Array<string | object>

interface ButtonCarousel {
  id: number
  icon: ReactNode
  label: string
  description: string
  topics: string[] | $SpecialObject | any
  img: string
  active: boolean
}

interface SwiperRef {
  swiper: any
  current: any
}

export function SoluctionSection() {
  const swiperRef = useRef<SwiperRef>(null)
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const { ref: buttonsRef, inView: inViewButtons } = useInView()
  const { ref: titleRef, inView: inViewTitle } = useInView()
  const isDesktop = useMediaQuery({ minWidth: 992 })

  const slides = [
    {
      id: 1,
      icon: <Car className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.0.label'),
      description: t('solutionSection.buttons.0.description'),
      topics: t('solutionSection.buttons.0.topics', { returnObjects: true }),
      img: CarouselAutoParts,
      active: true,
    },
    {
      id: 2,
      icon: <Clipboard className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.1.label'),
      description: t('solutionSection.buttons.1.description'),
      topics: t('solutionSection.buttons.1.topics', { returnObjects: true }),
      img: CarouselEcommerce,
      active: false,
    },
    {
      id: 3,
      icon: <CheckSquare className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.2.label'),
      description: t('solutionSection.buttons.2.description'),
      topics: t('solutionSection.buttons.2.topics', { returnObjects: true }),
      img: CarouselGraph,
      active: false,
    },
    {
      id: 4,
      icon: <UsersThree className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.3.label'),
      description: t('solutionSection.buttons.3.description'),
      topics: t('solutionSection.buttons.3.topics', { returnObjects: true }),
      img: CarouselCosmetics,
      active: false,
    },
    {
      id: 5,
      icon: <BoxArrowDown className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.4.label'),
      description: t('solutionSection.buttons.4.description'),
      topics: t('solutionSection.buttons.4.topics', { returnObjects: true }),
      img: CarouselFoods,
      active: false,
    },
    {
      id: 6,
      icon: <CirclesThreePlus className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.5.label'),
      description: t('solutionSection.buttons.5.description'),
      topics: t('solutionSection.buttons.5.topics', { returnObjects: true }),
      img: CarouselGraph,
      active: false,
    },
    {
      id: 7,
      icon: <Truck className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.6.label'),
      description: t('solutionSection.buttons.6.description'),
      topics: t('solutionSection.buttons.6.topics', { returnObjects: true }),
      img: CarouselHospital,
      active: false,
    },
    {
      id: 8,
      icon: <Graph className="mr-4 h-10 w-10" />,
      label: t('solutionSection.buttons.7.label'),
      description: t('solutionSection.buttons.7.description'),
      topics: t('solutionSection.buttons.7.topics', { returnObjects: true }),
      img: CarouselSupriments,
      active: false,
    },
  ]

  const [buttonsSlide, setButtonsSlide] = useState<ButtonCarousel[]>(slides)
  const [currentSlide, setCurrentSlide] = useState<ButtonCarousel>(
    buttonsSlide[0],
  ) as any

  function handleSetItem(id: number) {
    setButtonsSlide((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
    const activeButton = buttonsSlide.find((button) => button.id === id)
    if (activeButton) {
      setCurrentSlide(activeButton)
    }
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(id - 1)
    }
  }

  function handleSlideChange(swiper: any) {
    const activeIndex = swiper.activeIndex + 1
    setButtonsSlide((prevButtons) =>
      prevButtons.map((button) =>
        button.id === activeIndex
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
    const activeButton = buttonsSlide.find(
      (button) => button.id === activeIndex,
    )
    if (activeButton) {
      setCurrentSlide(activeButton)
    }
  }

  useEffect(() => {
    setButtonsSlide(slides)
  }, [language])

  return (
    <Element name="solutions">
      <div className="relative mb-16">
        {isDesktop && (
          <span className="text-decorator absolute right-0 z-0 -mr-[350px] mt-[300px] rotate-90 text-[220px] text-white opacity-30">
            KEEPERS
          </span>
        )}
        <div
          ref={titleRef}
          className="z-10 mb-16 flex flex-col items-center justify-center"
        >
          <TitleHeader
            title={t('solutionSection.title')}
            inView={inViewTitle}
          />
        </div>
        {isDesktop && (
          <section className="m-auto max-w-[950px] overflow-visible">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
                stopOnLastSlide: false,
                waitForTransition: true,
              }}
              speed={1000}
              centeredSlides={true}
              onSlideChange={handleSlideChange}
              className="z-10 mb-16 !overflow-visible "
              spaceBetween={70}
            >
              {buttonsSlide.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <CardCarousel
                    img={slide.img}
                    title={slide.label}
                    description={slide.description}
                    topics={slide.topics}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {isDesktop ? (
          <section
            ref={buttonsRef}
            className="z-50 m-auto grid max-w-[1440px] grid-cols-1 gap-8 px-20 lg:grid-cols-4"
          >
            {buttonsSlide.map((button) => (
              <motion.div
                key={button.id}
                animate={{
                  opacity: inViewButtons ? 1 : 0,
                  y: inViewButtons ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant={button.active ? 'default' : 'outline'}
                  className="font-title z-50 h-28 w-full text-base"
                  onClick={() => handleSetItem(button.id)}
                >
                  {button.icon}
                  {button.label}
                </Button>
              </motion.div>
            ))}
          </section>
        ) : (
          <section
            ref={buttonsRef}
            className="z-50 m-auto grid max-w-[1440px] grid-cols-1 gap-8 px-10 lg:grid-cols-4"
          >
            {buttonsSlide.map((button, index) => (
              <Drawer key={index}>
                <DrawerTrigger>
                  <motion.div
                    key={button.id}
                    animate={{
                      opacity: inViewButtons ? 1 : 0,
                      y: inViewButtons ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      variant={button.active ? 'default' : 'outline'}
                      className="font-title z-50 h-28 w-full text-base"
                      onClick={() => handleSetItem(button.id)}
                    >
                      {button.icon}
                      {button.label}
                    </Button>
                  </motion.div>
                </DrawerTrigger>
                <DrawerContent className="min-h-[80vh]">
                  <div className="flex justify-between pb-7">
                    <div className="pl-8">
                      <div className="mb-4 mt-4 flex items-center justify-start ">
                        <figure className="mr-2 h-10 w-2 rounded-sm bg-orange-500" />
                        <h1 className="font-title text-2xl font-semibold text-[#391805]">
                          {currentSlide.label}
                        </h1>
                      </div>
                      <div>
                        <p className="mr-4 leading-6 text-[#828282]">
                          {currentSlide.description}
                        </p>
                      </div>
                    </div>
                    <img
                      src={currentSlide.img}
                      alt={currentSlide.label}
                      className="h-[200px] w-[200px]"
                    />
                  </div>
                  <Separator />
                  <div className="ml-8 mt-4 w-full">
                    {currentSlide.topics.map((topic: any, index: any) => (
                      <div key={index} className="my-2 flex items-center gap-4">
                        <CheckCircle className="h-6 w-6 text-emerald-400" />
                        <span className="text-start">{topic}</span>
                      </div>
                    ))}
                  </div>
                </DrawerContent>
              </Drawer>
            ))}
          </section>
        )}
      </div>
    </Element>
  )
}
