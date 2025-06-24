import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Navigation, Star, Clock } from 'lucide-react';

const MapOverview = ({ locations, googleMapsData, fullPage = false }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapView, setMapView] = useState('overview');

  const containerClass = fullPage 
    ? "min-h-screen pt-20 pb-16" 
    : "py-20";

  // 地圖視圖選項
  const mapViews = [
    { id: 'overview', name: '總覽', icon: MapPin },
    { id: 'route', name: '路線', icon: Navigation },
    { id: 'nearby', name: '周邊', icon: Star }
  ];

  // 地點類型圖標
  const getLocationIcon = (type) => {
    const icons = {
      hotel: '🏨',
      attraction: '🎯',
      museum: '🏛️',
      transport: '🚆',
      restaurant: '🍜',
      shopping: '🛍️'
    };
    return icons[type] || '📍';
  };

  // 地點類型顏色
  const getLocationColor = (type) => {
    const colors = {
      hotel: 'bg-blue-500',
      attraction: 'bg-red-500',
      museum: 'bg-purple-500',
      transport: 'bg-green-500',
      restaurant: 'bg-orange-500',
      shopping: 'bg-pink-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <section id="map" className={`bg-gray-50 ${containerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            地圖總覽
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索所有景點位置，規劃最佳旅遊路線
          </p>
        </motion.div>

        {/* 地圖視圖切換 */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {mapViews.map((view) => {
            const Icon = view.icon;
            return (
              <button
                key={view.id}
                onClick={() => setMapView(view.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  mapView === view.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <Icon size={18} />
                <span>{view.name}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 地點列表 */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="mr-2 text-blue-600" size={20} />
                所有地點 ({locations.length})
              </h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedLocation?.id === location.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedLocation(location)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${getLocationColor(location.type)}`}>
                        <span>{getLocationIcon(location.type)}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {location.name}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {location.description}
                        </p>
                        
                        {location.rating && (
                          <div className="flex items-center space-x-1 mb-2">
                            <Star size={12} className="text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{location.rating}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                            location.type === 'hotel' 
                              ? 'bg-blue-100 text-blue-800'
                              : location.type === 'attraction'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {location.type === 'hotel' ? '住宿' : 
                             location.type === 'attraction' ? '景點' : 
                             location.type === 'museum' ? '博物館' : '其他'}
                          </span>
                          
                          {location.googleMapUrl && (
                            <a
                              href={location.googleMapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 地圖區域 */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* 地圖標題 */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedLocation ? selectedLocation.name : '日本旅遊地圖'}
                  </h3>
                  {selectedLocation && (
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
                {selectedLocation && (
                  <p className="text-gray-600 mt-2">{selectedLocation.description}</p>
                )}
              </div>

              {/* 地圖內容 */}
              <div className="h-96 bg-gray-100 flex items-center justify-center relative">
                {/* 這裡應該嵌入真實的Google地圖 */}
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">
                    互動式地圖
                  </h4>
                  <p className="text-gray-500 mb-4">
                    {selectedLocation 
                      ? `顯示 ${selectedLocation.name} 的詳細位置`
                      : '顯示所有景點位置和路線規劃'
                    }
                  </p>
                  
                  {/* Google地圖連結 */}
                  <div className="space-y-2">
                    {googleMapsData.slice(0, 3).map((mapData, index) => (
                      <a
                        key={index}
                        href={mapData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 mr-2 mb-2"
                      >
                        <ExternalLink size={14} />
                        <span>{mapData.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 地圖圖例 */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-3 text-sm">圖例</h5>
                  <div className="space-y-2">
                    {[
                      { type: 'hotel', name: '住宿' },
                      { type: 'attraction', name: '景點' },
                      { type: 'museum', name: '博物館' }
                    ].map((item) => (
                      <div key={item.type} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getLocationColor(item.type)}`}></div>
                        <span className="text-xs text-gray-600">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 地圖操作 */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>即時更新</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Navigation size={14} />
                      <span>路線規劃</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>在Google地圖中開啟</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 統計資訊 */}
        {!fullPage && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-8 bg-white rounded-xl shadow-lg px-8 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{locations.length}</div>
                <div className="text-sm text-gray-600">個地點</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{googleMapsData.length}</div>
                <div className="text-sm text-gray-600">地圖連結</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4</div>
                <div className="text-sm text-gray-600">個城市</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MapOverview;

