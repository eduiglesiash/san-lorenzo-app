import { HourIcon, LocationIcon } from './icons/CommonIcons';

const SIZE_ICON = 20;

export const CardActivity = ({
  activity = 'Gimkana Familiar',
  rating = '8,8',
  detail = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis, necessitatibus et non maiores debitis possimus omnis accusamus! Placeat neque, quam nostrum eos itaque qui fugit nesciunt officia temporibus a.',
  hour = '88:88',
  location = 'El poli'
}) => {
  return (
    <article className='bg-sl-olive text-sl-cream rounded-4xl'>
      <header className='flex flex-row justify-between items-center px-6 pt-2'>
        <h2 className='text-3xl tracking-tighter font-semibold'>{activity}</h2>
        <span className='text-2xl tracking-tighter font-semibold'>{rating}</span>
      </header>
      <p className='px-6 py-2'>{detail}</p>
      <footer className='border-t border-sl-cream'>
        <div className='px-6 py-2 flex flex-row justify-between'>
          <span className='flex flex-row gap-1 items-center'>
            <HourIcon
              width={SIZE_ICON}
              height={SIZE_ICON}
            />
            {hour}
          </span>
          <span className='text-right flex flex-row gap-1 items-center'>
            <LocationIcon
              width={SIZE_ICON}
              height={SIZE_ICON}
            />
            {location}
          </span>
        </div>
      </footer>
    </article>
  );
};
