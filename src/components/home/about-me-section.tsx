import { PlayCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

import BuildingKeepersImage from '@/assets/images/building-keepers.png'
import { useResponsive } from '@/hooks/responisve'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export function AboutMeSection() {
  const { ref, inView } = useInView()
  const { t } = useTranslation()
  const { Desktop, Mobile } = useResponsive()

  return (
    <Element name="about-me">
      <motion.div
        className="z-10 m-auto my-16 grid max-w-[1440px] grid-cols-12 justify-between px-10 lg:px-20"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={BuildingKeepersImage}
          alt="Prédio da Keepers"
          className="col-span-12 lg:col-span-5"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="col-span-1" />
        <motion.section
          className="col-span-12 mt-8 flex flex-col items-start lg:col-span-5 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mt-4 flex items-center justify-start">
            <figure className="mr-4 h-12 w-3 rounded-sm bg-orange-500" />
            <motion.h1
              className="font-title text-5xl font-semibold text-[#391805]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('aboutMeSection.title')}
            </motion.h1>
          </div>
          <motion.h4
            className="font-title mt-4 text-xl text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t('aboutMeSection.subtitle')}
          </motion.h4>

          <motion.p
            className="z-10 mt-4 text-lg leading-8 text-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            dangerouslySetInnerHTML={{
              __html: t('aboutMeSection.description'),
            }}
          />
          <Mobile>
            <Link to="https://www.youtube.com/watch?v=Rdd6FLXW0bU">
              <Button className="font-title mt-11 bg-[#FF5D04] px-14 py-5 font-semibold">
                {t('aboutMeSection.button')}{' '}
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Mobile>
          <Desktop>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="font-title mt-11 bg-[#FF5D04] px-14 py-5 font-semibold">
                  {t('aboutMeSection.button')}{' '}
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="m-0 flex w-fit items-center justify-center border-none bg-transparent p-0">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Rdd6FLXW0bU"
                  height={700}
                  width={1230}
                  playing
                  style={{
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 20px 10px rgba(255, 99, 71, 0.5)',
                  }}
                  controls={true}
                />
              </DialogContent>
            </Dialog>
          </Desktop>
        </motion.section>
      </motion.div>
    </Element>
  )
}
