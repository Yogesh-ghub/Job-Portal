import './App.css'
import '@mantine/core/styles.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Home from './pages/Home';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  const theme = createTheme({
    colors: {
      'brightSun': [ "#fffbeb", "#fff3c6", "#ffe588", "#ffd149", "#ffbd20", "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d", "#461902",
      ],
      'mineShaft': ["#f6f6f6","#e7e7e7","#d1d1d1","#b0b0b0","#888888","#6d6d6d","#5d5d5d","#4f4f4f","#454545","#3d3d3d","#2d2d2d",
      ]
    }
  })

  return (
      <main className='min-h-[100dvh] bg-mine-shaft-950 font-["poppins"]'>
        <Header />
        <Outlet />
        <Footer />
      </main>
  )
}

export default App
