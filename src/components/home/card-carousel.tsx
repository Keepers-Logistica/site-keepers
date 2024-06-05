import { CheckCircle } from '@phosphor-icons/react'

import { Card } from '../ui/card'

interface CardCarouselProps {
  title: string
  description: string
  img: string
  topics: any
}

export function CardCarousel({
  title,
  description,
  img,
  topics,
}: CardCarouselProps) {
  return (
    <Card className="m-auto grid  h-[400px] grid-cols-2 rounded-[20px]">
      <div className="col-span-1 p-10">
        <div className="flex flex-col justify-start">
          <h4 className="font-title flex items-end text-xl font-semibold text-[#391805]">
            {title}
            <figure className="mb-2 ml-1 h-2 w-2 rounded-[3px] bg-primary" />
          </h4>
          <p className="mb-5 mt-5 text-start text-sm leading-5 text-[#828282]">
            {description}
          </p>
          {topics.map((topic: any, index: any) => (
            <div key={index} className="my-1 flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-emerald-400" />
              <span className="text-start text-sm">{topic}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <img src={img} alt="carousel image" className="h-[400px]" />
      </div>
    </Card>
  )
}
