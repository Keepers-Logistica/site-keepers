import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'

import LogoKeepersDark from '@/assets/images/logo.svg'

import { Header } from './header'

export function AppLayout() {
  const { t } = useTranslation()

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
