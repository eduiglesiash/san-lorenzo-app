import { NubesClarosIcon } from './WheatherIcons';

const SIZE_ICON = 108;

export const Wheather = ({ degrees = 32, min = 18, max = 39, wheather = 'Nubes y claros de ejemplo' }) => {
  return (
    <article className='w-full h-full bg-sl-cream text-sl-brown rounded-4xl py-6 px-4 font-medium flex flex-col gap-2 items-center text-lg'>
      <div>
        <span className='text-7xl block tracking-tighter font-semibold'>{degrees}º</span>
        <div className='relative -top-[28px]'>
          <NubesClarosIcon
            width={SIZE_ICON}
            height={SIZE_ICON}
          />
        </div>
      </div>
      <p className='text-center text-balance'>{wheather}</p>
      <div className='flex flex-row justify-between w-full'>
        <span>Mín: {min}º</span>
        <span className='text-right'>Max: {max}º</span>
      </div>
    </article>
  );
};
