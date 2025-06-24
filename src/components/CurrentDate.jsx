export const CurrentDate = () => {
  const fecha = new Date();
  const opciones = { weekday: 'long', month: 'short', day: '2-digit' };
  const formateada = fecha.toLocaleDateString('es-ES', opciones);
  return (
    <article className='w-full h-full bg-sl-light-olive rounded-4xl grid place-content-center py-6 px-4'>
      <span className='text-balance text-center text-5xl tracking-tighter text-sl-brown font-semibold'>
        {formateada}
      </span>
    </article>
  );
};
