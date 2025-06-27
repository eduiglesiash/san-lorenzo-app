import { DATES_PARTY } from '@/utils/data.js';
import { useState } from 'react';
import { useRef } from 'react';
export const FilterDay = () => {
  const dialog = useRef(null);
  const [daySelected, setDaySelected] = useState('Filtrar por día');

  const openDialog = () => {
    window.document.body.style.overflow = 'hidden';
    dialog.current.show();
  };
  const closeDialog = () => {
    window.document.body.style.overflow = 'auto';
    dialog.current.close();
  };

  const handleButtonsDay = (evt) => {
    const currentSelection = evt.target.textContent;

    setDaySelected(currentSelection === 'Sin filtro' ? 'Filtrar por día' : currentSelection);
    closeDialog();
  };

  return (
    <>
      <button
        onClick={openDialog}
        type='button'
        className='rounded-3xl p-2 bg-sl-olive text-sl-cream min-w-28 text-center font-semibold'>
        {daySelected}
      </button>
      <dialog
        ref={dialog}
        className='w-screen h-screen bg-sl-olive/60 z-50 animate-dialog-kf transition-opacity duration-300'>
        <div className='fixed bottom-0 bg-sl-cream p-6 rounded-tl-4xl rounded-tr-4xl shadow-elevation-high'>
          <section className='flex flex-row gap-4 flex-wrap justify-center'>
            {DATES_PARTY.map((day) => (
              <button
                onClick={handleButtonsDay}
                className='bg-sl-olive text-sl-cream py-2 px-4 rounded-3xl min-w-28'
                type='button'
                key={day}>
                {day}
              </button>
            ))}
            <button
              onClick={handleButtonsDay}
              type='button'
              className='bg-sl-brown text-sl-cream py-2 px-4 rounded-3xl min-w-28 w-11/12'>
              Sin filtro
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};
