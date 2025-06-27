export const DateSeparator = ({ day = '88 Ago' }) => {
  return (
    <div className='relative flex flex-row justify-center'>
      <hr className='border-sl-olive border-2 w-full absolute top-1/2 z-10' />
      <span className='relative z-20 text-4xl font-semibold tracking-tighter text-sl-olive inline-block bg-white px-4'>
        {day}
      </span>
    </div>
  );
};
