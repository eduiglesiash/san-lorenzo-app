import { useState } from 'react';
import { ShowIcon, SportIcon, BullIcon } from './FiltersIcons';

const SIZE_ICON = 20;
export const Filter = ({ text = 'Ejemplo', icon = 'espectáculo', isFilterActive, onFilterSelected = () => {} }) => {
  const [isActive, setIsActive] = useState(isFilterActive);
  const stateClassBtn = isActive ? 'bg-sl-cream text-sl-brown' : 'bg-sl-brown text-sl-cream';
  const handleStateButton = (evt) => {
    setIsActive(!isActive);
    // console.log({ textFilter: evt.target.textContent });
    onFilterSelected({ type: isActive ? 'delete' : 'add', filterText: evt.target.textContent });
  };

  return (
    <button
      onClick={handleStateButton}
      className={`flex flex-row gap-1 rounded-3xl font-light p-2 + ${stateClassBtn}`}
      type='button'>
      {icon === 'sport' && (
        <SportIcon
          width={SIZE_ICON}
          heigth={SIZE_ICON}
        />
      )}
      {icon === 'show' && (
        <ShowIcon
          width={SIZE_ICON}
          height={SIZE_ICON}
        />
      )}
      {icon === 'bull' && (
        <BullIcon
          width={SIZE_ICON}
          height={SIZE_ICON}
        />
      )}
      {text}
    </button>
  );
};
