export function NumbersSection() {
  return (
    <section className="mb-16 flex h-56 w-full items-center justify-evenly bg-zinc-200 px-20">
      <div className="flex flex-col items-center justify-center">
        <span className="text-center font-bold text-zinc-400">desde</span>
        <h1 className="font-title text-6xl font-extrabold text-[#464646]">
          1996
        </h1>
        <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
          realizando <br /> operações
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-center font-bold text-zinc-400">mais de</span>
        <h1 className="font-title text-6xl font-extrabold text-[#FF5D04]">
          +5,200
        </h1>
        <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
          produtos <br /> armazenados
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-center font-bold text-zinc-400">mais de</span>
        <h1 className="font-title text-6xl font-extrabold text-[#FF5D04]">
          +8,600
        </h1>
        <span className="mt-2 text-center font-bold leading-5 text-zinc-400">
          mercadorias <br /> movimentadas
        </span>
      </div>
    </section>
  )
}
