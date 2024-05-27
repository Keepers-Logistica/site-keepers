import { twMerge } from 'tailwind-merge'

interface TitleHeaderProps {
  title: string
  className?: string
}

export function TitleHeader({ title, className }: TitleHeaderProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center',
        className,
      )}
    >
      <h1 className="font-title text-5xl font-semibold text-[#391805]">
        {title}
      </h1>
      <figure className="mt-4 h-2 w-52 rounded-sm bg-primary" />
    </div>
  )
}
