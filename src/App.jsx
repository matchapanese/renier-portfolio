import { BrowserRouter, Routes, Route } from 'react-router';
import Particles from './component/Particles';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {


  return (
    <>
      <BrowserRouter>
        <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
          <Particles
            particleColors={['#ffffff']}
            particleCount={200}
            particleSpread={30}
            speed={0.05}
            particleBaseSize={100}
            glow={0.5}
            twinkle={0.3}
            moveParticlesOnHover={false}
            hoverEffect="parallax"
            driftSpeed={0.5}
            clickBurst={false}
          />
        </div>

        <Navbar />

        <main className="bg-primary font-body max-w-2xl mx-auto px-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
