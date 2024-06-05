import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import BrazilFlag from '@/assets/flags/brazilian-flag.png'
import ChinaFlag from '@/assets/flags/china-flag.png'
import EuaFlag from '@/assets/flags/eua-flag.png'
import SpainFlag from '@/assets/flags/spain-flag.png'
import { cn } from '@/lib/utils'

interface CountryFlag {
  className?: string
}

interface CountrysFlags {
  uf: string
  flag: string
}

export function CountryFlag({ className }: CountryFlag) {
  const {
    i18n: { language },
  } = useTranslation()

  const countryFlags: CountrysFlags[] = [
    { uf: 'pt', flag: BrazilFlag },
    { uf: 'en', flag: EuaFlag },
    { uf: 'es', flag: SpainFlag },
    { uf: 'zh', flag: ChinaFlag },
  ]

  const [currentCountry, setCurrentCountry] = useState<CountrysFlags>(
    countryFlags[0],
  )

  function handleSetCountry(uf: string) {
    const newCountry = countryFlags.find((country) => country.uf === uf)

    if (!newCountry) return

    setCurrentCountry(newCountry)
  }

  useEffect(() => {
    handleSetCountry(language)
  }, [language])

  return (
    <img
      className={cn('h-[20px] w-[30px] rounded-md', className)}
      src={currentCountry.flag}
      alt={currentCountry.uf}
    />
  )
}
