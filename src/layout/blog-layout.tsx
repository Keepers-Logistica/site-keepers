import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'

import { Header } from '../components/blog/header'

export function BlogLayout() {
  const {
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
      </section>
    </main>
  )
}
