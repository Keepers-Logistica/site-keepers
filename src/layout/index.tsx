import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Outlet } from 'react-router'

import LogoKeepersDark from '@/assets/images/logo.svg'

import { Header } from './header'

export function AppLayout() {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
        <FloatingWhatsApp
          accountName="Keepers Logística"
          phoneNumber="11 970759139"
          avatar={LogoKeepersDark}
          statusMessage="Online agora"
          chatMessage="Tem alguma dúvida ou deseja fazer um orçamento sem compromisso ?"
          placeholder="Digite algo..."
          notification
          notificationSound
        />
      </section>
    </main>
  )
}
