import { Link } from 'react-router-dom'

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
          relateds.map((related: any, index: any) => {
            return (
              <div className="lg:w-[32%]" key={index}>
                <Link to={`/article/${related.id}`}>
                  <img
                    src={
                      env.VITE_CMS_API +
                      related.attributes.thumbnail.data.attributes.formats
                        .thumbnail.url
                    }
                    alt="banner principal"
                    className="h-[285px] w-[430px] rounded-lg object-cover"
                  />
                  <h4 className="text-dark mt-4 font-semibold">
                    {related.attributes.title}
                  </h4>
                  <span className="text-zinc-400">
                    {related.attributes.subtitle}
                  </span>
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}
