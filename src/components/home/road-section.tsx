import { Truck } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import linesDecorator from '@/assets/decorators/lines.svg'
import triangulesDecorator from '@/assets/decorators/triangules.svg'
import emailImg from '@/assets/images/email.svg'
import firstRoad from '@/assets/images/first-road.svg'
import LineRoad from '@/assets/images/line-road.svg'
import secondRoad from '@/assets/images/second-road.svg'
import thirdRoad from '@/assets/images/third-road.svg'
import { useResponsive } from '@/hooks/responisve'

import { TitleHeader } from '../title-header'
import { SuportSection } from './suport-section'
import { SystemSection } from './system-section'

export function RoadSection() {
  const { ref: refOne, inView: inViewOne } = useInView()
  const { ref: refTwo, inView: inViewTwo } = useInView()
  const { ref: refThree, inView: inViewThree } = useInView()
  const { Desktop, Mobile } = useResponsive()
  const { t } = useTranslation()

  return (
    <div className="m-auto max-w-[1440px]">
      <div className="mx-10 lg:mx-20">
        <TitleHeader title={t('roadSection.title')} inView={inViewOne} />
        <div
          ref={refOne}
          className="relative flex grid-cols-12 items-center justify-center"
        >
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute right-0 top-24 -mr-20"
            initial={{ opacity: 0 }}
            animate={inViewOne ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <Desktop>
            <img
              src={firstRoad}
              alt="linha com um caminhão em cima"
              className="ml-[450px] mt-10"
            />
          </Desktop>
          <Mobile>
            <div className="relative">
              <div className="ml-8 flex items-center justify-center">
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={inViewOne ? { y: 590, opacity: 0 } : {}}
                  transition={{
                    type: 'spring',
                    damping: 100,
                    stiffness: 100,
                  }}
                >
                  <Truck className="mt-20 h-10 w-10 rotate-90 text-orange-500" />
                </motion.div>
              </div>
              <img
                src={LineRoad}
                alt="linha com um caminhão em cima"
                className="m-auto my-10"
              />
            </div>
          </Mobile>
          <Desktop>
            <motion.img
              src={triangulesDecorator}
              alt="triangulos"
              className="absolute bottom-24 left-24"
              initial={{ opacity: 0 }}
              animate={inViewOne ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </Desktop>
        </div>
        <SystemSection />
        <div ref={refTwo} className="relative">
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute left-0 top-24 -ml-20 scale-x-[-1]"
            initial={{ opacity: 0 }}
            animate={inViewTwo ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <Desktop>
            <img
              src={secondRoad}
              alt="linha com um caminhão em cima"
              className="ml-[200px] mt-10"
            />
          </Desktop>
          <Mobile>
            <div className="relative">
              <div className="ml-8 flex items-center justify-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={inViewTwo ? { y: 590, opacity: 0 } : {}}
                  transition={{
                    type: 'spring',
                    damping: 100,
                    stiffness: 100,
                  }}
                >
                  <Truck className="mt-20 h-10 w-10 rotate-90 text-orange-500" />
                </motion.div>
              </div>
              <img
                src={LineRoad}
                alt="linha com um caminhão em cima"
                className="m-auto my-10"
              />
            </div>
          </Mobile>
          <Desktop>
            <motion.img
              src={triangulesDecorator}
              alt="triangulos"
              className="absolute bottom-24 right-24 -ml-20 scale-x-[-1]"
              initial={{ opacity: 0 }}
              animate={inViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </Desktop>
        </div>
        <SuportSection />
        <div ref={refThree} className="relative ">
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute right-0 top-52 -mr-20"
            initial={{ opacity: 0 }}
            animate={inViewThree ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <Desktop>
            <img
              src={thirdRoad}
              alt="linha com um caminhão em cima"
              className="mb-20 ml-[200px] mt-10"
            />
          </Desktop>
          <Mobile>
            <div className="relative">
              <div className="ml-8 flex items-center justify-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={inViewThree ? { y: 590, opacity: 0 } : {}}
                  transition={{
                    type: 'spring',
                    damping: 100,
                    stiffness: 100,
                  }}
                >
                  <Truck className="mt-20 h-10 w-10 rotate-90 text-orange-500" />
                </motion.div>
              </div>
              <img
                src={LineRoad}
                alt="linha com um caminhão em cima"
                className="m-auto my-10"
              />
            </div>
          </Mobile>
          <Desktop>
            <motion.img
              src={emailImg}
              alt="emai"
              className="absolute bottom-0 "
              initial={{ opacity: 0 }}
              animate={inViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </Desktop>
        </div>
      </div>
    </div>
  )
}
