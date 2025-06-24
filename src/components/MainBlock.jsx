import { ActivitiesForDay } from './ActivitiesForDay';
import { CurrentDate } from './CurrentDate';
import { Wheather } from './Wheather';

export const MainBlock = () => {
  return (
    <section className='bento-grid'>
      <div className='bento-grid__child1'>
        <Wheather />
      </div>
      <div className='bento-grid__child2'>
        {/* // Currentdate  */}
        <CurrentDate />
      </div>
      <div className='bento-grid__child3'>
        {/* // ActivityForDay */}
        <ActivitiesForDay />
      </div>
    </section>
  );
};
