import { SportIcon } from '@/components/FiltersIcons';

const SIZE_ICON = 120;

export const ActivityDetail = () => {
  return (
    <main className='h-screen w-screen p-6 flex flex-col gap-2'>
      <header className='flex flex-row gap-2 items-center justify-around text-sl-olive'>
        <h2 className='text-5xl tracking-tighter text-sl-olive font-bold'>Ginkana Familiar</h2>
        <SportIcon
          width={SIZE_ICON}
          height={SIZE_ICON}
        />
        <span className='bg-sl-olive text-2xl font-bold rounded-3xl text-sl-cream p-3 text-center'>3 Agosto</span>
      </header>
      <section className='flex flex-col gap-4'>
        <div>
          <p className='text-sl-brown text-md tracking-tighter font-bold'>Organiza:</p>
          <p className='text-sl-olive text-xl font-semibold tracking-tight'> Asociación "Una vida en el pueblo"</p>
        </div>
        <div>
          <p className='text-sl-brown text-lg tracking-tighter font-bold'>Colabora:</p>
          <p className='text-sl-olive text-xl font-semibold tracking-tight'> Ayuntamiento de Mata de Alcántara</p>
        </div>
      </section>
      <img
        className='rounded-3xl'
        src='imgs/el-llano.webp'
        alt=''
      />
      <section className='flex flex-row justify-between items-center'>
        <span className='bg-sl-olive text-2xl font-bold rounded-3xl text-sl-cream py-5 px-8 text-center'>El LLano</span>
        <span className='bg-sl-olive text-2xl font-bold rounded-3xl text-sl-cream py-5 px-8 text-center'>00:05 h</span>
      </section>
      <p className='text-sl-olive text-lg text-pretty'>
        Disfruta entre niños y mayores, una de las mejores Gymkanas. Bla blabla bla blablabla bla bla. Descripción de la
        actividad Descripción de la actividad Descripción de la actividad Descripción de la actividad Descripción de la
        actividad
      </p>
      {/* Sección de votación */}
      <section>
        <h2 className='text-sl-brown text-4xl tracking-tighter font-bold'>Vota la actividad ??</h2>
      </section>

      {/* Comentarios */}
      <section>
        <h2 className='text-sl-brown text-4xl tracking-tighter font-bold'>Comentarios ??? </h2>
      </section>
    </main>
  );
};
