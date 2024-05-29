import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  BoxArrowDown,
  Car,
  CheckCircle,
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
import { useMediaQuery } from 'react-responsive'
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

import { TitleHeader } from '../title-header'
import { Button } from '../ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Separator } from '../ui/separator'
import { CardCarousel } from './card-carousel'

interface ButtonCarousel {
  id: number
  icon: ReactNode
  label: string
  description: string
  topics: string[]
  img: string
  active: boolean
}

interface SwiperRef {
  swiper: any
  current: any
}

export function SoluctionSection() {
  const swiperRef = useRef<SwiperRef>(null)

  const { ref, inView } = useInView()
  const isDesktop = useMediaQuery({ minWidth: 992 })

  const [buttonsSlide, setButtonsSlide] = useState<ButtonCarousel[]>([
    {
      id: 1,
      icon: <Car className="mr-4 h-10 w-10" />,
      label: 'Recebimento',
      description:
        'Preparação de pedidos (picking) de modo diferenciado, reduzindo substancialmente o tempo de ciclo do pedido, contando com um sistema apurado para localização de produtos e métodos de transmissão dos pedidos via EDI, em controles do nível de estoque, garantindo processos mais eficientes, maior na agilidade nas entregas.',
      topics: [
        'Atendimento de solicitações e ocorrências',
        'Processamento de pedidos',
        'Coleta de itens solicitados',
        'Controle de nível de estoque Informações',
      ],
      img: CarouselAutoParts,
      active: true,
    },
    {
      id: 2,
      icon: <Clipboard className="mr-4 h-10 w-10" />,
      label: 'Conferência',
      description:
        'A Keepers Logística realiza um controle rígido através de conferências ao longo da movimentação do material, oferecendo a seus clientes um nível de acuracidade de estoque altíssimo.',
      topics: [
        'Conferência de volumes declarados na nota fiscal',
        'Conferência quantitativa e qualitativa dos materiais recebidos',
        'Regularização da mercadoria recebida',
      ],
      img: CarouselEcommerce,
      active: false,
    },
    {
      id: 3,
      icon: <CheckSquare className="mr-4 h-10 w-10" />,
      label: 'Armazenagem',
      description:
        'armazenagem com eficiência e tecnologia de ponta garantindo a qualidade operacional, além de contar com uma área para armazenagem com acesso restrito, câmeras de monitoramento e alarme para produtos de alto valor agregado e considerados atrativos.',
      topics: [
        'Cadastro de itens',
        'Endereçamento e armazenagem',
        'Inventário diário de itens movimentados',
        'Endereçamento de volumes',
      ],
      img: CarouselGraph,
      active: false,
    },
    {
      id: 4,
      icon: <UsersThree className="mr-4 h-10 w-10" />,
      label: 'Manuseio',
      description:
        'Estamos preparados para diferentes demandas sazonais, podendo desenvolver linhas de montagem específicas de acordo com as necessidades de cada cliente sempre obedecendo aos mais rigorosos critérios de qualidade, integrando logística com atividades complementares',
      topics: ['Montagem de kits', 'Seleção', 'Desmontagem', 'Etiquetagem'],
      img: CarouselCosmetics,
      active: false,
    },
    {
      id: 5,
      icon: <BoxArrowDown className="mr-4 h-10 w-10" />,
      label: 'Separação',
      description:
        'Separação e preparação de pedidos (picking) de modo diferenciado, reduzindo substancialmente o tempo de ciclo do pedido, contando com um sistema apurado para localização de produtos e métodos de transmissão dos pedidos via EDI, em controles do nível de estoque, garantindo processos mais eficientes, maior na agilidade nas entregas.',
      topics: [
        'Atendimento de solicitações e ocorrências',
        'Processamento de pedidos',
        'Coleta de itens solicitados',
        'Conferência de pedidos',
      ],
      img: CarouselFoods,
      active: false,
    },
    {
      id: 6,
      icon: <CirclesThreePlus className="mr-4 h-10 w-10" />,
      label: 'Expedição',
      description:
        'A Keepers Logística realiza expedição com comprometimento, seu produto no local e momento exato.',
      topics: [
        'Agregar, pesar, embalar, ordenar e verificar o pedido',
        'Impressão de documentos fiscais',
        'Identificação, carregamento e despacho do veículo',
        'Gereciamento do transporte',
      ],
      img: CarouselGraph,
      active: false,
    },
    {
      id: 7,
      icon: <Truck className="mr-4 h-10 w-10" />,
      label: 'Distribuição',
      description:
        'A Keepers Logística adquiriu através dos anos um grande know-how na distribuição de pedidos de modo geral, sobretudo, pedidos com grande volume de fracionamento para atendimento, utilizando as ferramentas mais modernas em termos de tecnologia Keepers Logística garante a melhor experiência, proporcionando uma distribuição altamente eficiente',
      topics: [
        'Distribuição fracionada',
        'Logística reversa (devolução de pedido)',
        'Distribuição intensiva',
      ],
      img: CarouselHospital,
      active: false,
    },
    {
      id: 8,
      icon: <Graph className="mr-4 h-10 w-10" />,
      label: 'Gestão',
      description:
        'A Keepers Logística conta com uma moderna ferramenta que permite realizar um controle amplo, ágil e eficaz na gestão dos estoques, gerenciando a movimentação em todos os seus pontos e a produtividade em cada etapa, incluindo todo o fluxo fiscal.',
      topics: [
        'Login e senha individuais para cada nível de usuário',
        'Gerenciamento da armazenagem e controle FIFO e LIFO',
        'Controle desde à portaria até a entrega',
        'Controle por lotes de fabricação',
      ],
      img: CarouselSupriments,
      active: false,
    },
  ])
  const [currentSlide, setCurrentSlide] = useState<ButtonCarousel>(
    buttonsSlide[0],
  )

  function handleSetItem(id: number) {
    setButtonsSlide((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
    const activeButton = buttonsSlide.find((button) => button.id === id)
    if (activeButton) {
      setCurrentSlide(activeButton)
    }
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(id - 1)
    }
  }

  function handleSlideChange(swiper: any) {
    const activeIndex = swiper.activeIndex + 1
    setButtonsSlide((prevButtons) =>
      prevButtons.map((button) =>
        button.id === activeIndex
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
    const activeButton = buttonsSlide.find(
      (button) => button.id === activeIndex,
    )
    if (activeButton) {
      setCurrentSlide(activeButton)
    }
  }
  return (
    <Element name="solutions">
      <div className="relative mb-16">
        {isDesktop && (
          <span className="text-decorator absolute right-0 z-0 -mr-[350px] mt-[300px] rotate-90 text-[220px] text-white opacity-30">
            KEEPERS
          </span>
        )}
        <div className="z-10 mb-16 flex flex-col items-center justify-center">
          <TitleHeader title="Serviços & Soluções" />
        </div>
        {isDesktop && (
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
              className="z-10 mb-16 !overflow-visible "
              spaceBetween={70}
            >
              {buttonsSlide.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <CardCarousel
                    img={slide.img}
                    title={slide.label}
                    description={slide.description}
                    topics={slide.topics}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {isDesktop ? (
          <section
            ref={ref}
            className="z-50 m-auto grid max-w-[1440px] grid-cols-1 gap-8 px-20 lg:grid-cols-4"
          >
            {buttonsSlide.map((button) => (
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
        ) : (
          <section
            ref={ref}
            className="z-50 m-auto grid max-w-[1440px] grid-cols-1 gap-8 px-10 lg:grid-cols-4"
          >
            {buttonsSlide.map((button, index) => (
              <Drawer key={index}>
                <DrawerTrigger>
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
                </DrawerTrigger>
                <DrawerContent className="min-h-[80vh]">
                  <div className="flex justify-between pb-7">
                    <div className="pl-8">
                      <div className="mb-4 mt-4 flex items-center justify-start ">
                        <figure className="mr-2 h-10 w-2 rounded-sm bg-orange-500" />
                        <h1 className="font-title text-2xl font-semibold text-[#391805]">
                          {currentSlide.label}
                        </h1>
                      </div>
                      <div>
                        <p className="mr-4 leading-6 text-[#828282]">
                          {currentSlide.description}
                        </p>
                      </div>
                    </div>
                    <img
                      src={currentSlide.img}
                      alt={currentSlide.label}
                      className="h-[200px] w-[200px]"
                    />
                  </div>
                  <Separator />
                  <div className="ml-8 mt-4 w-full">
                    {currentSlide.topics.map((topic, index) => (
                      <div key={index} className="my-2 flex items-center gap-4">
                        <CheckCircle className="h-6 w-6 text-emerald-400" />
                        <span className="text-start">{topic}</span>
                      </div>
                    ))}
                  </div>
                </DrawerContent>
              </Drawer>
            ))}
          </section>
        )}
      </div>
    </Element>
  )
}
