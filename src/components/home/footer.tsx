import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import Logo from '@/assets/images/logo.svg'
import LogoKeepersImg from '@/assets/images/logo-keepers.svg'

import { Separator } from '../ui/separator'

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C]  pt-16">
      <section className="m-auto grid max-w-[1440px] grid-cols-12 space-y-10 px-20 pb-52">
        <div className="col-span-12 flex flex-col lg:col-span-5">
          <img
            src={LogoKeepersImg}
            className="w-[300px]"
            alt="Logo da Keepers Logistica"
          />
          <span className="mt-12 text-base leading-8 text-white">
            A Keepers Logística tem como objetivo proporcionar uma experiência
            memorável para nossos clientes, aumentando substancialmente a
            satisfação dos mesmos, e sobretudo, preocupando-se também com a
            satisfação dos clientes de nossos clientes.
          </span>

          <div className="mt-11 flex gap-4">
            <Link
              to="https://www.facebook.com/people/Keepers-Log%C3%ADstica/100057304254890/"
              target="_blank"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#494848] text-2xl text-white transition-colors hover:bg-zinc-800">
                <FacebookLogo />
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/company/keepers-logistica/mycompany/"
              target="_blank"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#494848] text-2xl text-white transition-colors hover:bg-zinc-800">
                <LinkedinLogo />
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/keepers_logistica/"
              target="_blank"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#494848] text-2xl text-white transition-colors hover:bg-zinc-800">
                <InstagramLogo />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-1"></div>
        <div className="col-span-12 lg:col-span-3">
          <div>
            <h4 className="font-title text-3xl font-semibold text-white">
              Serviços
            </h4>
            <div className="mt-2 h-2 w-16 rounded-[2px] bg-[#FF5D04]" />
          </div>
          <p className="mt-7 text-[#A9A9A9]">Recebimento</p>
          <p className="mt-7 text-[#A9A9A9]">Conferência</p>
          <p className="mt-7 text-[#A9A9A9]">Armazenagem</p>
          <p className="mt-7 text-[#A9A9A9]">Manuseio</p>
          <p className="mt-7 text-[#A9A9A9]">Separação</p>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div>
            <h4 className="font-title text-3xl font-semibold text-white">
              Endereço
            </h4>
            <div className="mt-2 h-2 w-16 rounded-[2px] bg-[#FF5D04]" />
          </div>
          <p className="mt-7 text-[#A9A9A9]">
            Rua Texas, 111 - Jardim Rancho Alegre
          </p>
          <p className="mt-7 text-[#A9A9A9]">Santana de Parnaiba - SP</p>
          <p className="mt-7 text-[#A9A9A9]">CEP: 06515-200</p>
          <p className="mt-7 text-[#A9A9A9]">(11) 4151-9030</p>
          <p className="mt-7 text-[#A9A9A9]">comercial@keepers.com.br</p>
        </div>
      </section>
      <Separator className="bg-[#D9D9D9] opacity-10" />
      <div className="font-title flex w-full items-center justify-center py-3 text-sm text-white">
        <div className="flex gap-2">
          <span>
            Copyright ©2024 Todos os direitos reservados | Keepers Logística
          </span>
          <img src={Logo} alt="logo Keepers" />
        </div>
      </div>
    </footer>
  )
}
