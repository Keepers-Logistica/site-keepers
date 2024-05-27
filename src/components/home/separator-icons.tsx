import { Gear, Package, Truck, Upload } from '@phosphor-icons/react'

import ArrowRight from '@/assets/decorators/arrow-right.svg'

export function SeparatorIcons() {
  return (
    <section className="z-50 mb-16 flex h-28 w-full items-center justify-center bg-zinc-200">
      <div className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary">
        <Upload className="h-8 w-8 text-[#FDCAAE]" />
      </div>
      <img src={ArrowRight} alt="seta para direita" className="mr-3" />
      <div className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary">
        <Gear className="h-8 w-8 text-[#FDCAAE]" />
      </div>
      <img src={ArrowRight} alt="seta para direita" className="mr-3" />
      <div className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary">
        <Package className="h-8 w-8 text-[#FDCAAE]" />
      </div>
      <img src={ArrowRight} alt="seta para direita" className="mr-3" />
      <div className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary">
        <Truck className="h-8 w-8 text-[#FDCAAE]" />
      </div>
    </section>
  )
}
