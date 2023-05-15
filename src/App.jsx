import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Missions, MyProfile, Navbar, Rockets } from './components'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  )
}

export default App
