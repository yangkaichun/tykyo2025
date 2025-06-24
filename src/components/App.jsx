import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// 組件導入
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import DayDetail from './components/DayDetail';
import PhotoGallery from './components/PhotoGallery';
import MapOverview from './components/MapOverview';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// 數據導入
import { travelData } from './data/travelData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    // 模擬載入時間
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDaySelect = (dayId) => {
    setSelectedDay(dayId);
  };

  const handleImageClick = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App min-h-screen bg-background text-foreground">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero data={travelData.trip} />
              <Timeline 
                days={travelData.trip.days} 
                onDaySelect={handleDaySelect}
              />
              <PhotoGallery 
                photos={travelData.locations}
                onImageClick={handleImageClick}
              />
              <MapOverview 
                locations={travelData.locations}
                googleMapsData={travelData.googleMapsData}
              />
            </main>
          } />
          
          <Route path="/day/:dayId" element={
            <DayDetail 
              days={travelData.trip.days}
              onImageClick={handleImageClick}
            />
          } />
          
          <Route path="/gallery" element={
            <PhotoGallery 
              photos={travelData.locations}
              onImageClick={handleImageClick}
              fullPage={true}
            />
          } />
          
          <Route path="/map" element={
            <MapOverview 
              locations={travelData.locations}
              googleMapsData={travelData.googleMapsData}
              fullPage={true}
            />
          } />
        </Routes>

        <Footer />

        {/* 燈箱效果 */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="photo-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.img
                src={lightboxImage}
                alt="放大檢視"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
                onClick={closeLightbox}
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;

