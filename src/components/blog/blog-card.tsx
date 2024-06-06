import { Card } from '../ui/card'

interface BlogCardProps {
  title: string
  description?: string
}

export function BlogCard({ title, description }: BlogCardProps) {
  return (
    <div className="group col-span-6 w-full cursor-pointer transition-colors duration-500">
      <Card className="h-[436px] w-full"></Card>
      <section className="mt-4">
        <h4 className="font-title text-dark font-semibold group-hover:text-orange-500">
          {title}
        </h4>
        <span className="mt-2 text-zinc-400">{description}</span>
      </section>
    </div>
  )
}
