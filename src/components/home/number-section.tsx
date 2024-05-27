import Counter from '../counter'

export function NumbersSection() {
  return (
    <section className="z-10 mb-16 flex h-56 w-full items-center justify-evenly bg-zinc-200 px-20">
      <div className="z-10 flex w-[250px]  flex-col items-center justify-center ">
        <span className="text-center font-bold text-zinc-400">desde</span>
        <h1 className="font-title text-6xl font-extrabold text-[#464646]">
          1996
        </h1>
        <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
          realizando <br /> operações
        </span>
      </div>
      <div className="flex w-[250px] flex-col items-center justify-center">
        <span className="text-center font-bold text-zinc-400">mais de</span>
        <h1 className="font-title text-6xl font-extrabold text-[#FF5D04]">
          + <Counter value={5200} comma />
        </h1>
        <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
          produtos <br /> armazenados
        </span>
      </div>
      <div className="flex w-[250px] flex-col items-center justify-center">
        <span className="text-center font-bold text-zinc-400">mais de</span>
        <h1 className="font-title text-6xl font-extrabold text-[#FF5D04]">
          + <Counter value={8600} comma />
        </h1>
        <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
          mercadorias <br /> movimentadas
        </span>
      </div>
    </section>
  )
}
