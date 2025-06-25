export const ActivitiesForDay = ({ NumActivities = 88 }) => {
  return (
    <article className='w-full h-full bg-sl-olive rounded-4xl grid place-content-center py-6 px-4'>
      <div className='flex flex-col gap-2 text-sl-cream text-balance text-center tracking-tighter font-semibold'>
        <span className='text-5xl'>{NumActivities}</span>
        <span className='text-xl'>Actividades</span>
      </div>
    </article>
  );
};
