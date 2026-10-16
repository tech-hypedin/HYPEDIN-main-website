import { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import gsap from 'gsap'

import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import ThreeBackground from './components/ThreeBackground.jsx';
import GrainOverlay from './components/GrainOverlay.jsx';
import ScrollToTop from './components/ScrollToTop';

import HomeView from './pages/HomeView';
import AboutView from './pages/AboutView';
import NetworkView from './pages/NetworkView';
import CreatorsView from './pages/CreatorsView.jsx';
import ContactView from './pages/ContactView';
import CreatorsForm from './pages/CreatorsForm.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import { Careers } from './pages/Careers.jsx';

function App() {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false)

  if (!isLoaderComplete) {
    return <Loader onComplete={() => setIsLoaderComplete(true)} />
  }

  const toasterOption = {
    className: 'font-body border border-[#1f1f1f] bg-[#090907] text-white rounded-none',
    style: {
      background: '#000000',
      color: '#EF4444',
      border: '1px solid #1f1f1f',
      borderRadius: '16px'
    },
    success: {
      duration: 3000,
      iconTheme: {
        primary: '#67ce0d',
        secondary: '#000000'
      },
      style: {
        color: '#67ce0d'
      }
    },
    error: {
      duration: 3000,
      iconTheme: {
        primary: '#EF4444',
        secondary: '#000000'
      },
      style: {
        color: '#EF4444'
      }
    }
  }

  return (
    <>
      <Toaster position='bottom-left' toastOptions={toasterOption} />
      <ScrollToTop />
      <GrainOverlay />
      <ThreeBackground />
      <Navbar />
      
      <div className="relative z-10 min-h-screen min-w-screen">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomeView/>} />
            <Route path="about" element={<AboutView />} />
            <Route path="network" element={<NetworkView />} />
            <Route path="creators" element={<CreatorsView />} />
            <Route path="contact" element={<ContactView />} />
            <Route path="creators-form" element={<CreatorsForm />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="careers" element={<Careers/>}/>
          </Route>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
