import { Truck, WhatsappLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'

import pointsDecoratorImg from '@/assets/decorators/points.svg'
import { useResponsive } from '@/hooks/responisve'

import { Button } from '../ui/button'

export function ContactMe() {
  const { ref, inView } = useInView()
  const { Desktop } = useResponsive()
  const { t } = useTranslation()

  return (
    <Element name="contact">
      <motion.div
        ref={ref}
        className="relative flex h-[575px] w-full items-center justify-center bg-gradient-to-b from-[#FF5D04] to-[#993802]"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="z-10 mx-10 flex flex-col items-center justify-center lg:mx-20">
          <h4 className="font-title text-4xl font-bold text-white lg:text-5xl">
            {t('contactMeSection.interested')}
          </h4>
          <span className="font-title mt-8 text-center text-2xl text-white lg:text-4xl">
            {t('contactMeSection.contactUs')}{' '}
            <strong className="text-[#8F3C00]">
              {t('contactMeSection.evolve')}
            </strong>
          </span>

          <Button className="font-title mt-12 gap-4 bg-white p-10 text-xl font-bold text-[#FF5D04] hover:bg-orange-200">
            <span>{t('contactMeSection.contactButton')}</span>
            <WhatsappLogo className="h-7 w-7" />
          </Button>
        </div>
        <Desktop>
          <motion.img
            src={pointsDecoratorImg}
            className="absolute bottom-6 left-6"
            alt={t('contactMeSection.decoratorAlt')}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </Desktop>
        <motion.div
          className="absolute right-6 z-0 text-[450px] text-white opacity-5 lg:text-[700px]"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Truck className="opacity-10" />
        </motion.div>
      </motion.div>
    </Element>
  )
}
