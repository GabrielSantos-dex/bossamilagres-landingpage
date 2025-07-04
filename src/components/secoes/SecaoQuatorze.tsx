export default function SecaoQuatroze() {
  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoDoze/SecaoDozeBG.webp"
        alt="Plano de fundo verde texturizado"
        loading="lazy"
      />

      <div className="relative z-10 max-w-6xl px-8 flex w-full h-full my-32 flex-col items-center justify-center">
        <article className="flex flex-col w-full items-center justify-center gap-16 max-w-6xl">
          <img
            className="w-full md:w-2/3 lg:w-1/2 xl:w-3/4"
            src="/images/secaoQuatorze/secaoQuatorzeSelos.webp"
            alt="Explicação sobre o vídeo"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
