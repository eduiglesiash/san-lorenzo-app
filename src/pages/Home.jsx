import { CardActivity } from '../components/CardActivity';
import { Filters } from '../components/Filters';
import { Greeting } from '../components/Greeting';
import { MainBlock } from '../components/MainBlock';

export const Home = () => {
  return (
    <main className='h-screen w-screen p-6 flex flex-col gap-8'>
      <Greeting text='Hola, ' />
      <MainBlock />
      <section className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-3xl tracking-tighter font-semibold text-sl-brown'>Actividades</h2>
          {/* Filtro de fecha */}
          <p>Filtra por día</p>
        </div>
        {/* Selección de filtros */}
        <Filters />
        {/* Card de actividades */}
        <CardActivity />
        <CardActivity />
        <CardActivity />
      </section>
    </main>
  );
};
