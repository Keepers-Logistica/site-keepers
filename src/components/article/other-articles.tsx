import { env } from '@/env'

interface OtherArticlesProps {
  relateds: any
}

export function OtherArticles({ relateds }: OtherArticlesProps) {
  return (
    <div className="flex flex-col ">
      <h2 className="font-title mb-8 text-4xl font-semibold text-[#391805]">
        Artigos e posts relacionados
      </h2>
      <div className="mb-20 flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
        {relateds &&
          relateds.map((related, index) => {
            const { attributes } = related

            return (
              <div className="lg:w-[32%]" key={index}>
                <span>{attributes}</span>
                <img
                  src={env.VITE_CMS_API + related}
                  alt="banner principal"
                  className="w-[430px] rounded-lg"
                />
                <h4 className="text-dark mt-4 font-semibold">Titulo</h4>
                <span className="text-zinc-400">Lorem ipsum, dolor sit</span>
              </div>
            )
          })}
        {/* <div className="lg:w-[32%]">
          <img
            src={env.VITE_CMS_API + articleOne}
            alt="banner principal"
            className="w-[430px] rounded-lg"
          />
          <h4 className="text-dark mt-4 font-semibold">Titulo</h4>
          <span className="text-zinc-400">Lorem ipsum, dolor sit</span>
        </div>
        <div className="lg:w-[32%]">
          <img
            src={env.VITE_CMS_API + articleTwo}
            alt="banner principal"
            className="w-[430px] rounded-lg"
          />
          <h4 className="text-dark mt-4 font-semibold">Titulo</h4>
          <span className="text-zinc-400">Lorem ipsum, dolor sit</span>
        </div>
        <div className="lg:w-[32%]">
          <img
            src={env.VITE_CMS_API + articleThird}
            alt="banner principal"
            className="w-[430px] rounded-lg"
          />
          <h4 className="text-dark mt-4 font-semibold">Titulo</h4>
          <span className="text-zinc-400">Lorem ipsum, dolor sit</span>
        </div> */}
      </div>
    </div>
  )
}
