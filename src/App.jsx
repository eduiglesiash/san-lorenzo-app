import './App.css';
import { Home } from '@/pages/Home';
import { Landing } from '@/pages/Landing';
import { ActivityDetail } from '@/pages/ActivityDetail';
// Supports weights 100-900
import '@fontsource-variable/onest';

import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

function App() {
  return (
    <>
      <Landing />
      <Home />
      <ActivityDetail />
    </>
  );
}

export default App;
