import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  BoxArrowDown,
  Car,
  CheckSquare,
  CirclesThreePlus,
  Clipboard,
  Graph,
  Truck,
  UsersThree,
} from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CarouselAutoParts from '@/assets/images/carousel/carousel-autoparts.png'
import CarouselCosmetics from '@/assets/images/carousel/carousel-cosmetics.png'
import CarouselEcommerce from '@/assets/images/carousel/carousel-ecommerce.png'
import CarouselFoods from '@/assets/images/carousel/carousel-foods.png'
import CarouselGraph from '@/assets/images/carousel/carousel-graph.png'
import CarouselHospital from '@/assets/images/carousel/carousel-hospital.png'
import CarouselSupriments from '@/assets/images/carousel/carousel-supriments.png'

import { Button } from '../ui/button'
import { CardCarousel } from './card-carousel'

interface ButtonCarousel {
  id: number
  icon: ReactNode
  label: string
  active: boolean
}

interface SwiperRef {
  swiper: any
  current: any
}

export function SoluctionSection() {
  const swiperRef = useRef<SwiperRef>(null)

  const { ref, inView } = useInView()

  const [buttons, setButtons] = useState<ButtonCarousel[]>([
    {
      id: 1,
      icon: <Car className="mr-4 h-10 w-10" />,
      label: 'Recebimento',
      active: true,
    },
    {
      id: 2,
      icon: <Clipboard className="mr-4 h-10 w-10" />,
      label: 'Conferência',
      active: false,
    },
    {
      id: 3,
      icon: <CheckSquare className="mr-4 h-10 w-10" />,
      label: 'Armazenagem',
      active: false,
    },
    {
      id: 4,
      icon: <UsersThree className="mr-4 h-10 w-10" />,
      label: 'Manuseio',
      active: false,
    },
    {
      id: 5,
      icon: <BoxArrowDown className="mr-4 h-10 w-10" />,
      label: 'Separação',
      active: false,
    },
    {
      id: 6,
      icon: <CirclesThreePlus className="mr-4 h-10 w-10" />,
      label: 'Expedição',
      active: false,
    },
    {
      id: 7,
      icon: <Truck className="mr-4 h-10 w-10" />,
      label: 'Distribuição',
      active: false,
    },
    {
      id: 8,
      icon: <Graph className="mr-4 h-10 w-10" />,
      label: 'Gestão',
      active: false,
    },
  ])

  const slides = [
    {
      id: 1,
      title: 'Recebimento',
      description:
        'Preparação de pedidos (picking) de modo diferenciado, reduzindo substancialmente o tempo de ciclo do pedido, contando com um sistema apurado para localização de produtos e métodos de transmissão dos pedidos via EDI, em controles do nível de estoque, garantindo processos mais eficientes, maior na agilidade nas entregas.',
      topics: [
        'Atendimento de solicitações e ocorrências',
        'Processamento de pedidos',
        'Coleta de itens solicitados',
        'Controle de nível de estoque Informações',
      ],
      img: CarouselAutoParts,
    },
    {
      id: 2,
      title: 'Conferência',
      description:
        'A Keepers Logística realiza um controle rígido através de conferências ao longo da movimentação do material, oferecendo a seus clientes um nível de acuracidade de estoque altíssimo.',
      topics: [
        'Conferência de volumes declarados na nota fiscal',
        'Conferência quantitativa e qualitativa dos materiais recebidos',
        'Regularização da mercadoria recebida',
      ],
      img: CarouselEcommerce,
    },
    {
      id: 3,
      title: 'Armazenagem',
      description:
        'armazenagem com eficiência e tecnologia de ponta garantindo a qualidade operacional, além de contar com uma área para armazenagem com acesso restrito, câmeras de monitoramento e alarme para produtos de alto valor agregado e considerados atrativos.',
      topics: [
        'Cadastro de itens',
        'Endereçamento e armazenagem',
        'Inventário diário de itens movimentados',
        'Endereçamento de volumes',
      ],
      img: CarouselGraph,
    },
    {
      id: 4,
      title: 'Manuseio',
      description:
        'Estamos preparados para diferentes demandas sazonais, podendo desenvolver linhas de montagem específicas de acordo com as necessidades de cada cliente sempre obedecendo aos mais rigorosos critérios de qualidade, integrando logística com atividades complementares',
      topics: ['Montagem de kits', 'Seleção', 'Desmontagem', 'Etiquetagem'],
      img: CarouselCosmetics,
    },
    {
      id: 5,
      title: 'Separação',
      description:
        'Separação e preparação de pedidos (picking) de modo diferenciado, reduzindo substancialmente o tempo de ciclo do pedido, contando com um sistema apurado para localização de produtos e métodos de transmissão dos pedidos via EDI, em controles do nível de estoque, garantindo processos mais eficientes, maior na agilidade nas entregas.',
      topics: [
        'Atendimento de solicitações e ocorrências',
        'Processamento de pedidos',
        'Coleta de itens solicitados',
        'Conferência de pedidos',
      ],
      img: CarouselFoods,
    },
    {
      id: 6,
      title: 'Expedição',
      description:
        'A Keepers Logística realiza expedição com comprometimento, seu produto no local e momento exato.',
      topics: [
        'Agregar, pesar, embalar, ordenar e verificar o pedido',
        'Impressão de documentos fiscais',
        'Identificação, carregamento e despacho do veículo',
        'Gereciamento do transporte',
      ],
      img: CarouselGraph,
    },
    {
      id: 7,
      title: 'Distribuição',
      description:
        'A Keepers Logística adquiriu através dos anos um grande know-how na distribuição de pedidos de modo geral, sobretudo, pedidos com grande volume de fracionamento para atendimento, utilizando as ferramentas mais modernas em termos de tecnologia Keepers Logística garante a melhor experiência, proporcionando uma distribuição altamente eficiente',
      topics: [
        'Distribuição fracionada',
        'Logística reversa (devolução de pedido)',
        'Distribuição intensiva',
      ],
      img: CarouselHospital,
    },
    {
      id: 8,
      title: 'Gestão',
      description:
        'A Keepers Logística conta com uma moderna ferramenta que permite realizar um controle amplo, ágil e eficaz na gestão dos estoques, gerenciando a movimentação em todos os seus pontos e a produtividade em cada etapa, incluindo todo o fluxo fiscal.',
      topics: [
        'Login e senha individuais para cada nível de usuário',
        'Gerenciamento da armazenagem e controle FIFO e LIFO',
        'Controle desde à portaria até a entrega',
        'Controle por lotes de fabricação',
      ],
      img: CarouselSupriments,
    },
  ]

  function handleSetItem(id: number) {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(id - 1)
    }
  }

  function handleSlideChange(swiper: any) {
    const activeIndex = swiper.activeIndex + 1
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === activeIndex
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
  }
  return (
    <Element name="solutions">
      <div className="relative mb-16">
        <span className="text-decorator absolute right-0 z-0 -mr-[350px] mt-[300px] rotate-90 text-[220px] text-white opacity-30">
          KEEPERS
        </span>
        <div className="z-10 mb-16 flex flex-col items-center justify-center">
          <h1 className="font-title text-5xl font-semibold text-[#391805]">
            Serviços & Soluções
          </h1>
          <figure className="mt-4 h-2 w-52 rounded-sm bg-primary" />
        </div>

        <section className="m-auto max-w-[1100px] overflow-visible">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            speed={1000}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            className="z-10 mb-16 !overflow-visible"
            spaceBetween={70}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <CardCarousel
                  img={slide.img}
                  title={slide.title}
                  description={slide.description}
                  topics={slide.topics}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section
          ref={ref}
          className="z-50 m-auto grid max-w-[1440px] grid-cols-4 gap-8 px-20"
        >
          {buttons.map((button) => (
            <motion.div
              key={button.id}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant={button.active ? 'default' : 'outline'}
                className="font-title z-50 h-28 w-full text-base"
                onClick={() => handleSetItem(button.id)}
              >
                {button.icon}
                {button.label}
              </Button>
            </motion.div>
          ))}
        </section>
      </div>
    </Element>
  )
}
