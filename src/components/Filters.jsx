import { useState } from 'react';
import { Filter } from './Filter';

export const Filters = () => {
  const [filterSelected, setFilterSelected] = useState([]);

  const handleFilterSelected = (filter) => {
    const { type, filterText } = filter;
    // console.log({ type, filterText });
    if (type === 'add') setFilterSelected([...filterSelected, filterText]);
    if (type === 'delete') {
      const filtersTemp = filterSelected;
      const index = filtersTemp.indexOf(filterText);
      if (index !== -1) filtersTemp.splice(index, 1);
      setFilterSelected(filtersTemp);
    }
  };
  // console.log({ filterSelected });
  return (
    <menu className='flex flex-row gap-2'>
      <Filter
        text='Espectáculos'
        icon='show'
        onFilterSelected={handleFilterSelected}
      />
      <Filter
        text='Deportes'
        icon='sport'
        onFilterSelected={handleFilterSelected}
      />
      <Filter
        text='Toros'
        icon='bull'
        onFilterSelected={handleFilterSelected}
      />
    </menu>
  );
};
