import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationBar from './components/NavigationBar'
import {Routes, Route} from 'react-router-dom'

import EventPage from './pages/EventPage'
import HomePage from './pages/HomePage'
import ProgramKerjaPage from './pages/ProgramKerjaPage'
import SekbidPage from './pages/SekbidPage'

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/bidang" Component={SekbidPage} />
        <Route path="/proker" Component={ProgramKerjaPage} />
        <Route path="/events" Component={EventPage} />
      </Routes>
    </div>
  )
}
export default App
