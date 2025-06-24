import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Star, ExternalLink } from 'lucide-react';

const PhotoGallery = ({ photos, onImageClick, fullPage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  // 獲取所有照片
  const allPhotos = photos.reduce((acc, location) => {
    if (location.photos) {
      location.photos.forEach(photo => {
        acc.push({
          ...photo,
          locationName: location.name,
          locationId: location.id,
          category: location.type || 'attraction'
        });
      });
    }
    return acc;
  }, []);

  // 分類選項
  const categories = [
    { id: 'all', name: '全部', icon: Camera },
    { id: 'hotel', name: '住宿', icon: '🏨' },
    { id: 'attraction', name: '景點', icon: '🎯' },
    { id: 'museum', name: '博物館', icon: '🏛️' },
    { id: 'transport', name: '交通', icon: '🚆' }
  ];

  // 過濾照片
  const filteredPhotos = selectedCategory === 'all' 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === selectedCategory);

  const containerClass = fullPage 
    ? "min-h-screen pt-20 pb-16" 
    : "py-20";

  return (
    <section id="gallery" className={`bg-white ${containerClass}`}>
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
            精彩照片集
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            記錄旅程中每一個美好瞬間，感受日本的獨特魅力
          </p>
        </motion.div>

        {/* 分類篩選 */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {typeof Icon === 'string' ? (
                  <span className="text-lg">{Icon}</span>
                ) : (
                  <Icon size={18} />
                )}
                <span>{category.name}</span>
                <span className="text-sm opacity-75">
                  ({category.id === 'all' ? allPhotos.length : allPhotos.filter(p => p.category === category.id).length})
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* 照片網格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={`${photo.locationId}-${index}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => onImageClick(`/src/assets/${photo.url}`)}
              onMouseEnter={() => setHoveredPhoto(index)}
              onMouseLeave={() => setHoveredPhoto(null)}
              layout
            >
              {/* 圖片 */}
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={`/src/assets/${photo.url}`}
                  alt={photo.caption || photo.locationName}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* 懸停遮罩 */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredPhoto === index ? 'bg-opacity-40' : 'bg-opacity-0'
                }`}>
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredPhoto === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <div className="text-white text-center">
                      <Camera size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">點擊放大檢視</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 照片資訊 */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                    {photo.caption || photo.locationName}
                  </h3>
                  {photo.type === 'exterior' && (
                    <Star size={16} className="text-yellow-500 flex-shrink-0 ml-2" />
                  )}
                </div>
                
                <div className="flex items-center text-gray-500 text-xs mb-3">
                  <MapPin size={12} className="mr-1" />
                  <span className="truncate">{photo.locationName}</span>
                </div>

                {/* 照片類型標籤 */}
                <div className="flex items-center justify-between">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    photo.type === 'exterior' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {photo.type === 'exterior' ? '外觀' : '內部'}
                  </span>
                  
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 空狀態 */}
        {filteredPhotos.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Camera size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              暫無照片
            </h3>
            <p className="text-gray-500">
              此分類下暫時沒有照片，請選擇其他分類查看
            </p>
          </motion.div>
        )}

        {/* 統計資訊 */}
        {!fullPage && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-xl px-8 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{allPhotos.length}</div>
                <div className="text-sm text-gray-600">張照片</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{photos.length}</div>
                <div className="text-sm text-gray-600">個地點</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
                <div className="text-sm text-gray-600">個分類</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;

