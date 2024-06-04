import { useTranslation } from 'react-i18next'

import { useResponsive } from '@/hooks/responisve'

import Counter from '../counter'

export function NumbersSection() {
  const { Desktop } = useResponsive()
  const { t } = useTranslation()
  return (
    <section className="z-10 mb-16 flex min-h-56 w-full bg-zinc-200 px-20">
      <div className="m-auto flex w-full max-w-[1440px] flex-col items-center justify-evenly lg:flex-row">
        <div className="z-10 flex w-[250px] flex-col items-center justify-center space-y-2 py-6 lg:space-y-0 lg:py-0 ">
          <span className="text-center font-bold text-zinc-400">
            {t('numbersSection.since')}
          </span>
          <h1 className="font-title text-5xl font-extrabold text-[#464646] lg:text-6xl">
            1996
          </h1>
          <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
            {t('numbersSection.realizing')}{' '}
            <Desktop>
              <br />
            </Desktop>{' '}
            {t('numbersSection.operations')}
          </span>
        </div>
        <div className="z-10 flex w-[250px] flex-col items-center justify-center space-y-2 py-6 lg:space-y-0 lg:py-0 ">
          <span className="text-center font-bold text-zinc-400">
            {t('numbersSection.moreThan')}
          </span>
          <h1 className="font-title text-5xl font-extrabold text-[#FF5D04] lg:text-6xl">
            + <Counter value={5200} />
          </h1>
          <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
            {t('numbersSection.products')}{' '}
            <Desktop>
              <br />
            </Desktop>{' '}
            {t('numbersSection.stored')}{' '}
          </span>
        </div>
        <div className="z-10 flex w-[250px] flex-col items-center justify-center space-y-2 py-6 lg:space-y-0 lg:py-0 ">
          <span className="text-center font-bold text-zinc-400">
            {t('numbersSection.moreThan')}
          </span>
          <h1 className="font-title text-5xl font-extrabold text-[#FF5D04] lg:text-6xl">
            + <Counter value={8600} />
          </h1>
          <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
            {t('numbersSection.goods')}{' '}
            <Desktop>
              <br />
            </Desktop>{' '}
            {t('numbersSection.busy')}
          </span>
        </div>
      </div>
    </section>
  )
}
