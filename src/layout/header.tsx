import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="absolute top-0 z-50 hidden h-9 w-full bg-black/30 px-20 lg:flex">
      <div className="m-auto flex w-full max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-2 ">
          <Link
            to="https://www.facebook.com/people/Keepers-Log%C3%ADstica/100057304254890/"
            target="_blank"
          >
            <FacebookLogo className="h-5 w-5 text-white transition-colors hover:text-orange-300" />
          </Link>
          <Link
            to="https://www.instagram.com/keepers_logistica/"
            target="_blank"
          >
            <InstagramLogo className="h-5 w-5  text-white transition-colors hover:text-orange-300" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/keepers-logistica/mycompany/"
            target="_blank"
          >
            <LinkedinLogo className="h-5 w-5  text-white transition-colors hover:text-orange-300" />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=Rdd6FLXW0bU&ab_channel=FelippiPerez"
            target="_blank"
          >
            <YoutubeLogo className="h-5 w-5  text-white transition-colors hover:text-orange-300" />
          </Link>
        </div>
        <div className="flex items-center  gap-6">
          <div className="flex items-center gap-2">
            <Phone color="white" className="h-5 w-5" />
            <span className="text-xs font-medium text-white">
              (11) 4151 - 9030
            </span>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeSimple color="white" className="h-5 w-5" />
            <span className="text-xs font-medium text-white">
              comercial@keepers.com.br
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
