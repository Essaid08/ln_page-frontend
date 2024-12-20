import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

import Palindrom from './pages/Palindrom';
import PerfectNumber from './pages/PerfectNumber';
import Fibonacci from './pages/Fibonacci';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>
      {/* ensures the page scrolls to the top on navigation */}
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/palindrom' element={<Palindrom/>} />
        <Route path='/perfect_number'  element={<PerfectNumber/>} />
        <Route path='/fibonacci'  element={<Fibonacci/>} />
      </Routes>
    </Router>
  )
}

export default App
