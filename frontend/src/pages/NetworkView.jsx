import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSEO } from '../hooks/useSEO'
import Footer from '../components/Footer'
import NetworkMapDisplay from '../components/NetworkMapDisplay'
import NetworkSidebar from '../components/NetworkSidebar'
import { fetchCollegeData } from '../services/geminiService'
import '../styles/network-map.css'

export default function NetworkView() {
  useSEO({
    title: 'HYPEDIN Network | College Heatmap - Campus Coverage Across India',
    description: 'Explore HYPEDIN\'s extensive college network across 50+ Indian cities. Interactive heatmap showing campus coverage and student reach in every region.',
    canonical: 'https://www.hypedin.co/network',
    ogTitle: 'HYPEDIN Network | Campus Heatmap',
    ogDescription: 'Discover our 5,000+ college partnerships spanning 50+ cities across North, South, East, and West India.',
    keywords: 'college network India, campus coverage, student reach, college partnerships, university network, Gen Z distribution'
  })

  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    handleSearch("India")
  }, [])

  const handleSearch = async (query) => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await fetchCollegeData(query)
      setLocations(data)
    } catch (err) {
      console.error(err)
      setError("Failed to load map data. Please check your API connection.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "HYPEDIN College Network Heatmap",
            "description": "Interactive heatmap representing 5,000+ college partnerships across 50+ Indian cities with student reach analytics",
            "url": "https://www.hypedin.co/network",
            "keywords": "college network, education heatmap, campus distribution, student reach",
            "spatialCoverage": {
              "@type": "Place",
              "name": "India",
              "geo": {
                "@type": "GeoShape",
                "box": "8.4° N 68.1° E 35.5° N 97.4° E"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2026-04-03",
            "creator": {
              "@type": "Organization",
              "name": "HYPEDIN"
            }
          })}
        </script>
      </Helmet>

      <div
        className="min-h-screen pt-24 md:pt-32 px-4 md:px-12 bg-brand-black"
        style={{
          paddingTop: 'calc(env(safe-area-inset-top) + 96px)',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10 border-b border-white/10 pb-6">
            <div>
              <span className="block text-brand-red font-sans text-xs tracking-[0.3em] uppercase mb-3">
                HYPEDIN Network
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-none">
                College Heatmap
              </h1>
            </div>
            <a
              href="https://hypedin-network-601970444116.us-west1.run.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 border border-white/10 text-[10px] uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Open Fullscreen
            </a>
          </div>

          <div
            className="relative w-full overflow-hidden border border-white/10 bg-black rounded-sm 
              aspect-[9/16] md:aspect-auto h-auto md:h-[90vh] 
              min-h-[750px] md:min-h-[600px]"
          >
            <div className="flex flex-col md:flex-row h-full w-full bg-slate-950 overflow-hidden text-slate-100 font-sans md:pt-0">

              {/* Map Area - Top on Mobile, Right on Desktop */}
              <div className="w-full h-[45vh] md:h-full md:flex-1 relative z-10 order-1 md:order-2">
                {error && (
                  <div className="absolute top-4 md:top-24 left-4 right-4 z-[1000] bg-red-500/90 text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-md flex justify-between items-center max-w-lg mx-auto">
                     <span>{error}</span>
                     <button onClick={() => setError(null)} className="font-bold ml-4 hover:text-red-200">&times;</button>
                  </div>
                )}
                
                <NetworkMapDisplay 
                  locations={locations} 
                  onLocationSelect={setSelectedLocation}
                  selectedLocation={selectedLocation}
                />
              </div>

              {/* Sidebar - Bottom on Mobile, Left on Desktop - HIDDEN when location selected */}
              {!selectedLocation && (
                <div className="w-full h-[85vh] md:h-full md:w-auto relative z-20 order-2 md:order-1 animate-in fade-in duration-300">
                  <NetworkSidebar 
                  locations={locations} 
                  onSearch={handleSearch} 
                  isLoading={isLoading}
                  selectedLocation={selectedLocation}
                  onSelect={setSelectedLocation}
                />
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-gray-500 font-sans text-xs tracking-widest uppercase">
          Tip: If you can scroll the map, you're officially in the matrix.
        </div>
      </div>

      <Footer />
    </div>
    </>
  )
}
