import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Logo from '@/assets/images/logo.svg'
import LogoKeepersImg from '@/assets/images/logo-keepers.svg'

import { Separator } from '../ui/separator'

export function Footer() {
  const { t } = useTranslation()

  const services = t('footerSection.servicesList', {
    returnObjects: true,
  }) as string[]
  const addressDetails = t('footerSection.addressDetails', {
    returnObjects: true,
  }) as string[]

  return (
    <footer className="bg-[#2C2C2C] pt-16">
      <section className="m-auto grid max-w-[1440px] grid-cols-12 space-y-10 px-10 pb-52 lg:px-20">
        <div className="col-span-12 flex flex-col lg:col-span-5">
          <img
            src={LogoKeepersImg}
            className="w-[300px]"
            alt="Logo da Keepers Logistica"
          />
          <span className="mt-12 text-base leading-8 text-white">
            {t('footerSection.companyDescription')}
          </span>

          <div className="mt-11 flex gap-4">
            <Link
              to="https://www.facebook.com/people/Keepers-Log%C3%ADstica/100057304254890/"
              target="_blank"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#494848] text-2xl text-white transition-colors hover:bg-zinc-800">
                <FacebookLogo
                  aria-label={t('footerSection.socialMediaAlt.facebook')}
                />
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/company/keepers-logistica/mycompany/"
              target="_blank"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#494848] text-2xl text-white transition-colors hover:bg-zinc-800">
                <LinkedinLogo
                  aria-label={t('footerSection.socialMediaAlt.linkedin')}
                />
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/keepers_logistica/"
              target="_blank"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#494848] text-2xl text-white transition-colors hover:bg-zinc-800">
                <InstagramLogo
                  aria-label={t('footerSection.socialMediaAlt.instagram')}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-1"></div>
        <div className="col-span-12 lg:col-span-3">
          <div>
            <h4 className="font-title text-3xl font-semibold text-white">
              {t('footerSection.servicesTitle')}
            </h4>
            <div className="mt-2 h-2 w-16 rounded-[2px] bg-[#FF5D04]" />
          </div>
          {services.map((service, index) => (
            <p key={index} className="mt-7 text-[#A9A9A9]">
              {service}
            </p>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div>
            <h4 className="font-title text-3xl font-semibold text-white">
              {t('footerSection.addressTitle')}
            </h4>
            <div className="mt-2 h-2 w-16 rounded-[2px] bg-[#FF5D04]" />
          </div>
          {addressDetails.map((detail, index) => (
            <p key={index} className="mt-7 text-[#A9A9A9]">
              {detail}
            </p>
          ))}
        </div>
      </section>
      <Separator className="bg-[#D9D9D9] opacity-10" />
      <div className="font-title flex w-full items-center justify-center py-3 text-sm text-white">
        <div className="flex gap-2">
          <span className="text-center">{t('footerSection.footerText')}</span>
          <img src={Logo} alt="logo Keepers" className="hidden lg:flex" />
        </div>
      </div>
    </footer>
  )
}
