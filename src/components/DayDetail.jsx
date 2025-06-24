import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock, ExternalLink, Camera } from 'lucide-react';

const DayDetail = ({ days, onImageClick }) => {
  const { dayId } = useParams();
  const day = days.find(d => d.id === parseInt(dayId));

  if (!day) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">找不到該日行程</h2>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            返回首頁
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return date.toLocaleDateString('zh-TW', options);
  };

  const getActivityIcon = (type) => {
    const icons = {
      transport: '🚆',
      accommodation: '🏨',
      attraction: '🎯',
      food: '🍜',
      shopping: '🛍️'
    };
    return icons[type] || '📍';
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按鈕 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回行程總覽
          </Link>
        </motion.div>

        {/* 日期標題 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Day {day.id}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {day.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{formatDate(day.date)}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>{day.location}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 text-sm font-medium rounded-full">
              {day.theme}
            </span>
          </div>
        </motion.div>

        {/* 活動時間軸 */}
        <div className="relative">
          {/* 時間軸線 */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-pink-400"></div>

          {day.activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="relative mb-12 ml-16"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* 時間軸節點 */}
              <div className="absolute -left-12 top-6 w-8 h-8 bg-white border-4 border-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg">{getActivityIcon(activity.type)}</span>
              </div>

              {/* 活動卡片 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* 活動標題 */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center text-blue-600 text-sm font-medium mb-2">
                        <Clock size={16} className="mr-1" />
                        {activity.time}
                        {activity.duration && (
                          <span className="ml-2 text-gray-500">
                            ({activity.duration})
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {activity.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        activity.type === 'transport' 
                          ? 'bg-green-100 text-green-800'
                          : activity.type === 'accommodation'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {activity.type === 'transport' ? '交通' :
                         activity.type === 'accommodation' ? '住宿' :
                         activity.type === 'attraction' ? '景點' : '活動'}
                      </span>
                    </div>
                    <div className="text-3xl">{activity.icon}</div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* 照片展示 */}
                {activity.photos && activity.photos.length > 0 && (
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Camera size={18} className="mr-2" />
                      實地照片
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {activity.photos.map((photo, photoIndex) => (
                        <motion.div
                          key={photoIndex}
                          className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden cursor-pointer group"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => onImageClick(`/src/assets/${photo}`)}
                        >
                          <img
                            src={`/src/assets/${photo}`}
                            alt={`${activity.title} - 照片 ${photoIndex + 1}`}
                            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 地點資訊 */}
                {activity.location && (
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin size={18} className="mr-2" />
                      地點資訊
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-2">
                        {activity.location.name}
                      </h5>
                      {activity.location.address && (
                        <p className="text-gray-600 text-sm mb-3">
                          {activity.location.address}
                        </p>
                      )}
                      {activity.location.googleMapUrl && (
                        <a
                          href={activity.location.googleMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          在Google地圖中查看
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* 實用提示 */}
                {activity.tips && activity.tips.length > 0 && (
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      💡 實用提示
                    </h4>
                    <ul className="space-y-2">
                      {activity.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 導航按鈕 */}
        <motion.div
          className="flex justify-between mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {day.id > 1 ? (
            <Link
              to={`/day/${day.id - 1}`}
              className="flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              上一天
            </Link>
          ) : (
            <div></div>
          )}

          {day.id < days.length && (
            <Link
              to={`/day/${day.id + 1}`}
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              下一天
              <ArrowLeft size={18} className="ml-2 rotate-180" />
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DayDetail;

