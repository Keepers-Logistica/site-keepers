import { useEffect } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'

import LogoKeepersDark from '@/assets/images/logo.svg'

import { Header } from './header'

export function AppLayout() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation()

  function handleChangeLanguage(language: string) {
    changeLanguage(language)
    localStorage.setItem('language', language)
  }

  useEffect(() => {
    const language = localStorage.getItem('language')

    if (language) {
      handleChangeLanguage(language)
    }
  }, [])

  return (
    <main>
      <Header />
      <section>
        <Outlet />
        <FloatingWhatsApp
          accountName="Keepers Logística"
          phoneNumber="11 970759139"
          avatar={LogoKeepersDark}
          statusMessage={t('whatsApp.status')}
          chatMessage={t('whatsApp.text')}
          placeholder={t('whatsApp.typing')}
          notification
          notificationSound
        />
      </section>
    </main>
  )
}
