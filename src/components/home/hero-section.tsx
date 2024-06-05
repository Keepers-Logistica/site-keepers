import { CaretDown } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Element, Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'

import { Button } from '../ui/button'
import { Navigation } from './navigation'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <Element name="home" className="min-h-[100vh] bg-zinc-900">
      <figure className="bg-hero absolute" />
      <figure className="bg-decorator-home absolute">
        <div className="m-auto h-[70%] max-w-[1440px] px-10 lg:px-20">
          <Navigation />
          <section className="m-auto flex h-full w-full flex-col items-center justify-center ">
            <div className="flex w-full items-end justify-center ">
              <div className="font-title text-center text-3xl font-semibold text-white lg:text-6xl">
                <h1 className="mb-4">
                  {t('heroSection.heading')} <br />
                </h1>
                <span className="text-[#FFC9AB]">
                  <Typewriter
                    words={t('heroSection.typewriter', { returnObjects: true })}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
              {/* <figure className="mb-2 ml-2 h-3 w-3 rounded-sm bg-primary" /> */}
            </div>
            <motion.div whileTap={{ scale: 0.85 }}>
              <Link to="solutions" spy={true} smooth={true} duration={500}>
                <Button className="font-title mt-11 px-8 py-7 text-lg font-semibold">
                  {t('heroSection.button')}
                </Button>
              </Link>
            </motion.div>
          </section>
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-center">
          <CaretDown className="mb-5 h-8 w-8 text-zinc-400/55" />
        </div>
      </figure>
    </Element>
  )
}
