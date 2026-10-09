import React, { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, CircleMarker, Tooltip, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import * as d3 from 'd3-geo';
import GEOJSON from '../data/India_State_Boundary.json';

const INDIA_BOUNDS = {
  southWest: L.latLng(5.0, 65.0),
  northEast: L.latLng(40.0, 100.0)
};

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6A8Vvq_w_oIm0CmHOZJKMXL5WIgWUdjg2-zscOJ6VBfRzEC6Ujc7gI4OxNY-_VSoMSQ/exec";

// Initial Bounds Fitter
const InitialBoundsFitter = () => {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      const bounds = L.latLngBounds(INDIA_BOUNDS.southWest, INDIA_BOUNDS.northEast);
      map.fitBounds(bounds, { 
        padding: [50, 50], 
        maxZoom: 6,
        animate: false
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

// Map Controller
const MapController = ({ activeFeature }) => {
  const map = useMap();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    const timer2 = setTimeout(() => {
      map.invalidateSize();
    }, 500);
    const timer3 = setTimeout(() => {
      map.invalidateSize();
    }, 1000);

    const container = map.getContainer();
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      resizeObserver.disconnect();
    };
  }, [map]);

  useEffect(() => {
    if (activeFeature) {
      try {
        const layer = L.geoJSON(activeFeature);
        const bounds = layer.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { 
            padding: [100, 100], 
            maxZoom: 6,
            animate: true,
            duration: 1.5
          });
        }
      } catch (e) {
        console.warn("Bounds fitting failed", e);
      }
    }
  }, [activeFeature, map]);

  return null;
};

// Fullscreen Control
const FullscreenControl = () => {
  const map = useMap();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
        setTimeout(() => map.invalidateSize(), 200);
      }).catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
          setTimeout(() => map.invalidateSize(), 200);
        });
      }
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    const bounds = L.latLngBounds(INDIA_BOUNDS.southWest, INDIA_BOUNDS.northEast);
    map.fitBounds(bounds, { padding: [10, 10], animate: true, duration: 1 });
  };

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar !border-none !mt-4 md:!mt-24 !mr-2 md:!mr-4 flex flex-col gap-2">
        <button 
          onClick={handleReset}
          className="bg-black/90 hover:bg-hyped-red text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
          title="Reset View"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
        </button>
        <button 
          onClick={toggleFullscreen}
          className="bg-black/90 hover:bg-hyped-red text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9L4 4m0 0l5-5M4 4v5m11 0l5-5m0 0l-5-5m5 5v-5M9 15l-5 5m0 0l5 5m-5-5v-5m11 0l5 5m0 0l-5 5m5-5v-5"></path>
            </svg>
          ) : (
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

// Map Legend
const MapLegend = () => (
  <div className="hidden md:block absolute bottom-4 right-4 md:bottom-16 md:right-8 z-[1000] bg-black/90 border border-white/10 p-3 md:p-4 w-48 md:w-64 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-100 origin-bottom-right">
    <h4 className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 border-b border-white/10 pb-2">Institute Density Index</h4>
    
    <div className="flex items-center gap-2 mb-2">
       <span className="text-[7px] md:text-[9px] font-bold text-gray-500">LOW</span>
       <div className="h-1.5 md:h-2 flex-1 bg-gradient-to-r from-[#500724] via-[#b91c1c] to-[#ef4444] rounded-sm"></div>
       <span className="text-[7px] md:text-[9px] font-bold text-white">HIGH</span>
    </div>
    
    <div className="mt-3 md:mt-4 grid grid-cols-1 gap-1.5 md:gap-2">
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#ef4444] shadow-[0_0_5px_#ef4444]"></span>
             <span className="text-[8px] md:text-[10px] text-gray-300 font-bold uppercase">Critical Hub</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-mono text-gray-500">&gt; 4k</span>
       </div>
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#b91c1c]"></span>
             <span className="text-[8px] md:text-[10px] text-gray-300 font-bold uppercase">High Density</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-mono text-gray-500">2k - 4k</span>
       </div>
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#991b1b]"></span>
             <span className="text-[8px] md:text-[10px] text-gray-300 font-bold uppercase">Major</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-mono text-gray-500">1k - 2k</span>
       </div>
       <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#7f1d1d]"></span>
             <span className="text-[8px] md:text-[10px] text-gray-300 font-bold uppercase">Medium</span>
           </div>
           <span className="text-[8px] md:text-[10px] font-mono text-gray-500">200 - 1k</span>
       </div>
       <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#500724]"></span>
             <span className="text-[8px] md:text-[10px] text-gray-300 font-bold uppercase">Emerging</span>
           </div>
           <span className="text-[8px] md:text-[10px] font-mono text-gray-500">&lt; 200</span>
       </div>
    </div>
  </div>
);

// Map Disclaimer
const MapDisclaimer = () => (
  <div className="hidden md:block absolute bottom-5 left-5 z-[1000] pointer-events-none">
    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 max-w-[280px] md:max-w-sm rounded-sm shadow-2xl">
      <p className="text-[8px] md:text-[9px] text-gray-400 font-sans leading-relaxed text-justify uppercase tracking-wide">
        <span className="text-hyped-red font-bold">Disclaimer:</span> This map provides a visual representation generated by AI and is intended for illustrative purposes only. Data accuracy is not guaranteed and may not be exact.
      </p>
    </div>
  </div>
);

// Campaign Form Component
const CampaignForm = ({ locationName, onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    contactNumber: '',
    email: '',
    activationTypes: {},
    additionalRegions: '',
    campaignBrief: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = e.target.checked;
      setFormData(prev => ({
        ...prev,
        activationTypes: {
          ...prev.activationTypes,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const activeTypes = Object.entries(formData.activationTypes)
      .filter(([_, isActive]) => isActive)
      .map(([type]) => type)
      .join(', ');

    const payload = {
      location: locationName,
      brandName: formData.brandName,
      contactName: formData.contactName,
      contactNumber: formData.contactNumber,
      email: formData.email,
      activationTypes: activeTypes,
      additionalRegions: formData.additionalRegions,
      campaignBrief: formData.campaignBrief
    };

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', 
          headers: {
            'Content-Type': 'text/plain', 
          },
          body: JSON.stringify(payload)
        });
      } else {
        console.log("No Google Script URL provided. Data:", payload);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6 md:p-12 animate-in fade-in zoom-in duration-300">
         <div className="h-20 w-20 md:h-32 md:w-32 rounded-full bg-hyped-red/10 flex items-center justify-center mb-6 md:mb-10 border-2 border-hyped-red shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <svg className="w-10 h-10 md:w-16 md:h-16 text-hyped-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
         </div>
         <h3 className="text-2xl sm:text-3xl md:text-5xl font-black font-display text-white mb-3 md:mb-4 uppercase tracking-wide">Request Received</h3>
         <p className="text-xs sm:text-sm md:text-lg text-gray-400 mb-8 md:mb-12 max-w-lg leading-relaxed">Our strategy team will analyze the <span className="text-white font-bold">{locationName}</span> student ecosystem and connect with you shortly.</p>
         <button onClick={onBack} className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-hyped-red hover:text-white transition-colors border-b-2 border-transparent hover:border-hyped-red pb-1">Return to Map</button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col animate-in slide-in-from-right duration-300">
       <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-0">
          <div>
            <h2 className="text-lg sm:text-2xl md:text-4xl font-black font-display text-white uppercase tracking-wider">Activate <span className="text-hyped-red">{locationName}</span></h2>
            <p className="text-[10px] md:text-sm text-gray-500 mt-1 md:mt-2 uppercase tracking-[0.2em] font-bold">Campaign Request Form</p>
          </div>
          <button onClick={onBack} className="text-gray-500 hover:text-white transition-transform hover:scale-110 flex-shrink-0">
            <svg className="w-5 h-5 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
       </div>

       <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5 flex-1 overflow-y-auto pr-1 md:pr-2 pb-12 md:pb-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
             <div className="space-y-1.5">
               <label className="text-[8px] md:text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Brand Name</label>
               <input 
                 required 
                 name="brandName"
                 value={formData.brandName}
                 onChange={handleInputChange}
                 type="text" 
                 className="w-full bg-neutral-900 border-2 border-neutral-800 p-2 md:p-3 text-xs md:text-sm text-white focus:border-hyped-red focus:outline-none transition-colors rounded-none placeholder-neutral-700" 
                 placeholder="Ex. Spotify" 
               />
             </div>
             <div className="space-y-1.5">
               <label className="text-[8px] md:text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Your Name</label>
               <input 
                 required 
                 name="contactName"
                 value={formData.contactName}
                 onChange={handleInputChange}
                 type="text" 
                 className="w-full bg-neutral-900 border-2 border-neutral-800 p-2 md:p-3 text-xs md:text-sm text-white focus:border-hyped-red focus:outline-none transition-colors rounded-none placeholder-neutral-700" 
                 placeholder="Full Name" 
               />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Contact Number</label>
              <input 
                required 
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                type="tel" 
                className="w-full bg-neutral-900 border-2 border-neutral-800 p-3 md:p-4 text-sm md:text-base text-white focus:border-hyped-red focus:outline-none transition-colors rounded-none placeholder-neutral-700" 
                placeholder="+91 99999 99999" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Business Email</label>
              <input 
                required 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email" 
                className="w-full bg-neutral-900 border-2 border-neutral-800 p-3 md:p-4 text-sm md:text-base text-white focus:border-hyped-red focus:outline-none transition-colors rounded-none placeholder-neutral-700" 
                placeholder="name@company.com" 
              />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Activation Type</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
               {['Campus Ambassadors', 'College Events', 'App Downloads', 'Creator Partnerships'].map((type) => (
                 <label key={type} className="flex items-center gap-3 p-3 md:p-4 border-2 border-neutral-800 bg-neutral-900/50 cursor-pointer hover:border-hyped-red hover:bg-neutral-900 transition-all group">
                    <input 
                      type="checkbox" 
                      name={type}
                      checked={!!formData.activationTypes[type]}
                      onChange={handleInputChange}
                      className="accent-hyped-red w-4 h-4" 
                    />
                    <span className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-white uppercase tracking-wide">{type}</span>
                 </label>
               ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Additional Regions (if any)</label>
            <input 
              type="text" 
              name="additionalRegions"
              value={formData.additionalRegions}
              onChange={handleInputChange}
              className="w-full bg-neutral-900 border-2 border-neutral-800 p-3 md:p-4 text-sm md:text-base text-white focus:border-hyped-red focus:outline-none transition-colors rounded-none placeholder-neutral-700" 
              placeholder="Add more states..." 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.15em] text-hyped-red">Campaign Brief (if any)</label>
            <textarea 
              name="campaignBrief"
              value={formData.campaignBrief}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-neutral-900 border-2 border-neutral-800 p-3 md:p-4 text-sm md:text-base text-white focus:border-hyped-red focus:outline-none transition-colors rounded-none placeholder-neutral-700 resize-none" 
              placeholder="Tell us about your campaign goals..." 
            />
          </div>

          {errorMsg && <p className="text-red-500 font-bold text-sm">{errorMsg}</p>}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-hyped-red hover:bg-red-600 text-white text-base md:text-lg font-black uppercase tracking-[0.2em] py-4 md:py-6 mt-4 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed`}
          >
             {isSubmitting ? 'Sending Request...' : 'Submit Request'}
          </button>
       </form>
    </div>
  );
};

// State 3D Modal
const State3DModal = ({ feature, data, onClose, onLocationSelect }) => {
  const [pathData, setPathData] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const { reachPercentage, sentimentPercentage, reachLabel, sentimentLabel } = useMemo(() => {
    const normalizedScore = Math.min(data.score, 8000);
    const reachVal = 75 + Math.floor((normalizedScore / 8000) * 24); 
    
    const nameHash = data.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const sentimentVal = 60 + (nameHash % 35); 

    let rLabel = "High";
    if (reachVal > 90) rLabel = "Max Coverage";
    else if (reachVal > 85) rLabel = "Very High";

    let sLabel = "Neutral";
    if (sentimentVal > 85) sLabel = "Euphoric";
    else if (sentimentVal > 70) sLabel = "Positive";
    else sLabel = "Stable";

    return {
      reachPercentage: reachVal,
      sentimentPercentage: sentimentVal,
      reachLabel: rLabel,
      sentimentLabel: sLabel
    };
  }, [data]);

  useEffect(() => {
  if (!feature || !feature.geometry) return;
  try {
    const width = 400; 
    const height = 400;

    // Use geoIdentity for projected meter coordinates
    const projection = d3.geoIdentity()
      .reflectY(true) // Flips the coordinates so the state isn't upside down
      .fitSize([width - 40, height - 40], feature); // Adds padding to avoid edge clipping

    const pathGenerator = d3.geoPath().projection(projection);
    const d = pathGenerator(feature);
    
    if (d) setPathData(d);
  } catch (e) {
    console.warn("D3 projection failed", e);
  }
}, [feature]);

  const topColor = '#ef4444';
  const sideColor = '#7f1d1d';
  
  const layers = Array.from({ length: 30 }).map((_, i) => (
    <div
      key={i}
      className="state-layer"
      style={{
        transform: `translateZ(${i * 2}px)`, 
        zIndex: i,
        backfaceVisibility: 'visible'
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="overflow-visible">
        <path
          d={pathData}
          fill={i === 29 ? topColor : sideColor}
          stroke={i === 29 ? '#ffffff' : 'none'}
          strokeWidth={i === 29 ? "3" : "0"}
          style={{ 
             filter: i === 0 ? 'drop-shadow(0px 60px 40px rgba(239, 68, 68, 0.4))' : 'none' 
          }}
        />
      </svg>
    </div>
  ));

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4 overflow-hidden">
      
      <div className="relative w-full max-w-full h-[85vh] md:max-w-[95vw] md:h-[85vh] bg-black border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.15)]">
        
        <div className={`w-full md:w-1/2 relative bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-neutral-950 flex items-center justify-center transition-all duration-700 ${showForm ? 'hidden md:block md:w-0 md:opacity-0 md:overflow-hidden' : 'h-[35vh] md:h-full md:opacity-100'}`}>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           
           <div className="relative w-[60%] md:w-[70%] max-w-[300px] md:max-w-[400px] aspect-square state-3d-container">
            {layers}
           </div>
           
           <div className="absolute top-3 left-4 md:top-8 md:left-8">
              <p className="text-[10px] md:text-sm font-mono text-hyped-red mb-1 md:mb-2 tracking-widest">REGION_ID: {data.id.split('-')[1] || '01'}</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tight drop-shadow-lg leading-tight md:leading-none">{data.name}</h2>
           </div>
           <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 text-right">
              <p className="text-[8px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">Institute Count</p>
              <p className="text-xl sm:text-2xl md:text-5xl font-bold font-mono text-white tracking-tighter">{data.score.toLocaleString()}</p>
           </div>
        </div>

        <div className={`${showForm ? 'w-full' : 'w-full md:w-1/2'} h-auto md:h-full px-4 sm:px-5 md:px-8 py-4 sm:py-6 md:py-8 bg-black border-t md:border-t-0 md:border-l border-white/10 relative transition-all duration-700 overflow-y-auto custom-scrollbar`}>
          
          {!showForm ? (
            <div className="flex flex-col min-h-full animate-in slide-in-from-right duration-300 pb-6 md:pb-0">
               <button onClick={() => {
                  onClose();
                  onLocationSelect(null);
                }} className="absolute top-3 md:top-6 right-3 md:right-6 text-gray-500 hover:text-white transition-colors hover:rotate-90 duration-300 z-50 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>

               <div className="mt-6 md:mt-10 flex-grow">
                  <span className="inline-block px-2 py-0.5 md:px-4 md:py-1.5 border border-hyped-red text-hyped-red text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 md:mb-6">Market Intelligence</span>
                  <p className="text-sm sm:text-base md:text-2xl text-gray-300 font-light leading-relaxed border-l-4 border-hyped-red pl-3 md:pl-6">
                    {data.description || `${data.name} represents a key strategic hub with a high concentration of educational institutions, offering significant brand penetration opportunities among Gen Z demographics.`}
                  </p>
               </div>

               <div className="space-y-3 md:space-y-6 mt-4 md:mt-10">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                      <div className="relative p-3 md:p-5 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-hyped-red/50 transition-all group flex flex-col justify-between h-full">
                          <div>
                              <div className="mb-1.5">
                                  <span className="px-1.5 py-0.5 bg-hyped-red/10 border border-hyped-red/30 text-[7px] font-bold text-hyped-red uppercase tracking-widest rounded">{reachLabel}</span>
                              </div>
                              <div className="flex justify-between items-start mb-2">
                                  <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Campus Reach</h4>
                                  <div className="h-1 w-1 rounded-full bg-hyped-red shadow-[0_0_8px_#ef4444] animate-pulse"></div>
                              </div>
                              <div className="mb-1.5">
                                   <span className="text-2xl md:text-3xl font-black font-display text-white tracking-tight">{reachPercentage}%</span>
                              </div>
                          </div>
                          
                          <div className="w-full bg-white/10 h-1 mt-auto">
                              <div className="h-full bg-white group-hover:bg-hyped-red transition-all duration-500 ease-out" style={{ width: `${reachPercentage}%` }}></div>
                          </div>
                      </div>

                      <div className="relative p-3 md:p-5 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-hyped-red/50 transition-all group flex flex-col justify-between h-full">
                          <div>
                              <div className="mb-1.5">
                                  <span className="px-1.5 py-0.5 bg-green-500/10 border border-green-500/30 text-[7px] font-bold text-green-500 uppercase tracking-widest rounded">{sentimentLabel}</span>
                              </div>
                              <div className="flex justify-between items-start mb-2">
                                   <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Youth Sentiment</h4>
                                   <div className="h-1 w-1 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></div>
                              </div>

                              <div className="mb-1.5">
                                   <span className="text-2xl md:text-3xl font-black font-display text-white tracking-tight">{sentimentPercentage}/100</span>
                              </div>
                          </div>
                          
                          <div className="w-full bg-white/10 h-1 mt-auto">
                              <div className="h-full bg-green-500 transition-all duration-500 ease-out" style={{ width: `${sentimentPercentage}%` }}></div>
                          </div>
                      </div>
                  </div>

                  <div className="pt-1">
                    <button 
                      onClick={() => setShowForm(true)}
                      className="w-full group relative bg-white hover:bg-hyped-red transition-all duration-300 py-3 md:py-5 px-3 md:px-6 flex items-center justify-between shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]"
                    >
                       <div className="flex items-center min-w-0">
                          <span className="text-xs md:text-base font-black uppercase tracking-wider text-black group-hover:text-white transition-colors truncate">Activate Brand Presence</span>
                       </div>
                       <span className="bg-black text-white group-hover:bg-white group-hover:text-hyped-red p-1.5 md:p-2 transition-colors rounded-sm flex-shrink-0 ml-2 md:ml-4">
                          <svg className="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                    </button>
                  </div>
               </div>
            </div>
          ) : (
            <CampaignForm locationName={data.name} onBack={() => setShowForm(false)} />
          )}

        </div>

      </div>
    </div>
  );
};

// Map Events
const MapEvents = ({ onMapClick }) => {
  useMapEvents({
    click: () => {
      onMapClick();
    },
  });
  return null;
};

// Main Map Component
const MapDisplay = ({ locations, onLocationSelect, selectedLocation }) => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapRef = React.useRef(null);

  const normalize = (s) => {
    if (!s) return "";
    let name = String(s).toLowerCase().trim();
    name = name.replace(/&/g, 'and');
    name = name.replace(/\s+/g, ' ');
    name = name.replace(/[\.\(\)]/g, '');
    name = name.trim();
    
    if (name.includes('uttaranchal') || name.includes('uttarakhand')) return 'uttarakhand';
    if (name.includes('orissa') || name.includes('odisha')) return 'odisha';
    if (name.includes('pondicherry') || name.includes('puducherry')) return 'puducherry';
    if (name.includes('jammu') && name.includes('kashmir')) return 'jammu and kashmir';
    if (name.includes('telangana')) return 'telangana';
    if (name.includes('chhattisgarh')) return 'chhattisgarh';
    if (name.includes('jharkhand')) return 'jharkhand';
    if (name.includes('andaman') || name.includes('nicobar')) return 'andaman and nicobar islands';
    if (name.includes('lakshadweep')) return 'lakshadweep';
    if (name.includes('dadra') || name.includes('nagar') || name.includes('daman') || name.includes('diu')) {
       return 'dadra and nagar haveli and daman and diu';
    }
    if (name.includes('ladakh')) return 'ladakh';
    
    return name;
  };

  useEffect(() => {
    if (!GEOJSON) return;

    setGeoJsonData(GEOJSON);
  }, []);

  const geoJsonRef = React.useRef(null);
  const locationsRef = React.useRef(locations);
  const selectedLocationRef = React.useRef(selectedLocation);

  useEffect(() => {
    locationsRef.current = locations;
  }, [locations]);

  useEffect(() => {
    selectedLocationRef.current = selectedLocation;
  }, [selectedLocation]);

  useEffect(() => {
    if (selectedLocation && geoJsonData) {
      const targetName = normalize(selectedLocation.name);
      
      const feature = geoJsonData.features.find((f) => {
        const pName = f.properties.Name_1 || f.properties.name || f.properties.st_nm || "";
        const nName = normalize(pName);
        return nName === targetName;
      });
      
      if (feature) {
        setActiveFeature(feature);
        setIsModalOpen(true);
      }
    } else {
      setActiveFeature(null);
      setIsModalOpen(false);
    }
  }, [selectedLocation, geoJsonData]);

  useEffect(() => {
    if (geoJsonRef.current) {
      geoJsonRef.current.setStyle(style);
    }
  }, [selectedLocation, locations]);

  const getColor = (name) => {
    const targetName = normalize(name);
    const loc = locationsRef.current.find(l => normalize(l.name) === targetName);
    const count = loc ? loc.score : 0;
    
    if (count > 4000) return '#ef4444';
    if (count > 2000) return '#b91c1c';
    if (count > 1000) return '#991b1b';
    if (count > 200) return '#7f1d1d';
    return '#500724';
  };

  const style = (feature) => {
    const name = feature.properties.Name_1 || feature.properties.name || feature.properties.st_nm;
    const targetName = normalize(name);
    const isSelected = selectedLocationRef.current && normalize(selectedLocationRef.current.name) === targetName;
    
    return {
      fillColor: getColor(name),
      weight: isSelected ? 3 : 1,
      opacity: 1,
      color: isSelected ? '#ef4444' : 'rgba(255,255,255,0.2)',
      dashArray: isSelected ? '' : '3',
      fillOpacity: isSelected ? 0.9 : 0.7
    };
  };

  const onEachFeature = (feature, layer) => {
    const name = feature.properties.Name_1 || feature.properties.name || feature.properties.st_nm;
    const targetName = normalize(name);
    
    layer.on({
      mouseover: (e) => {
        const l = e.target;
        l.setStyle({
          weight: 3,
          color: '#ef4444',
          dashArray: '',
          fillOpacity: 0.9
        });
        l.bringToFront();
      },
      mouseout: (e) => {
        const l = e.target;
        l.setStyle(style(feature));
      },
      click: (e) => {
        L.DomEvent.stopPropagation(e);
        const loc = locationsRef.current.find(l => normalize(l.name) === targetName);
        if (loc) {
          onLocationSelect(loc);
        }
      }
    });

    const initialLoc = locationsRef.current.find(l => normalize(l.name) === targetName);
    if (initialLoc) {
      layer.bindTooltip(`
        <div class="font-sans">
          <div class="font-bold text-xs uppercase tracking-wider mb-1">${initialLoc.name}</div>
          <div class="text-[10px] text-hyped-red font-mono">${initialLoc.score.toLocaleString()} Institutes</div>
        </div>
      `, {
        permanent: false,
        direction: "top",
        className: "bg-black/90 border border-white/10 text-white p-2 shadow-xl backdrop-blur-sm rounded-none",
        offset: [0, -10],
        opacity: 1
      });
    }
  };

  return (
    <div className="h-full w-full relative bg-[#020617] overflow-hidden">
      <MapContainer 
        center={[22.0, 82.0]} 
        zoom={5} 
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%", background: "transparent" }}
        zoomControl={false}
        className="z-10"
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        /> */}

        <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=cb1_4bv6_1_dd06bc681921141ea70ed31a"
/>

        <InitialBoundsFitter />
        <MapEvents onMapClick={() => onLocationSelect(null)} />

        {geoJsonData && (
          <GeoJSON 
            key={`geojson-${geoJsonData ? 'ready' : 'none'}-${locations.length}`}
            ref={geoJsonRef}
            data={geoJsonData} 
            style={style} 
            onEachFeature={onEachFeature} 
          />
        )}
        
        {locations.map(loc => {
             const isSelected = selectedLocation?.id === loc.id;
             return (
               <CircleMarker 
                  key={loc.id}
                  interactive={false}
                  center={[loc.lat, loc.lng]}
                  pathOptions={{ 
                    color: isSelected ? '#ffffff' : '#ef4444', 
                    fillColor: '#ef4444', 
                    fillOpacity: isSelected ? 1 : 0.5, 
                    weight: isSelected ? 2 : 0 
                  }}
                  radius={isSelected ? 12 : Math.min(Math.max(Math.log(loc.score) * 1.5, 2), 10)}
                  eventHandlers={{
                    click: (e) => {
                      L.DomEvent.stopPropagation(e);
                      onLocationSelect(loc);
                    }
                  }}
               >
                  <Tooltip className="bg-black text-white border-hyped-red">
                     <span>{loc.name}: {loc.score}</span>
                  </Tooltip>
               </CircleMarker>
             );
        })}

        <MapController activeFeature={activeFeature} />
        <FullscreenControl />
      </MapContainer>

      <MapLegend />
      <MapDisclaimer />

      {selectedLocation && activeFeature && isModalOpen && (
         <State3DModal 
           feature={activeFeature} 
           data={selectedLocation} 
           onClose={() => setIsModalOpen(false)}
           onLocationSelect={onLocationSelect}
         />
      )}

      {selectedLocation && !isModalOpen && (
        <div className="absolute top-24 right-8 z-[1000] animate-in slide-in-from-right">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-hyped-red hover:bg-red-600 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 group transition-all"
          >
            <span>View {selectedLocation.name} Intel</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MapDisplay;
