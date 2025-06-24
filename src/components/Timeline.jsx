import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Timeline = ({ days, onDaySelect }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
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
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            精彩行程安排
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            7天6夜的完整旅程，每一天都充滿驚喜與探索
          </p>
        </motion.div>

        <div className="relative">
          {/* 時間軸線 */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-pink-400"></div>

          {days.map((day, index) => (
            <motion.div
              key={day.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* 時間軸節點 */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-blue-600">{day.id}</span>
              </div>

              {/* 日期卡片 */}
              <motion.div
                className="ml-12 md:ml-0 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  {/* 日期標題 */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(day.date)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {day.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm font-medium">{day.location}</span>
                    </div>
                  </div>

                  {/* 主題標籤 */}
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                    {day.theme}
                  </div>

                  {/* 活動預覽 */}
                  <div className="space-y-3 mb-6">
                    {day.activities.slice(0, 3).map((activity, actIndex) => (
                      <div key={activity.id} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-sm">{getActivityIcon(activity.type)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <Clock size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {activity.title}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {day.activities.length > 3 && (
                      <div className="text-sm text-gray-500 text-center">
                        還有 {day.activities.length - 3} 個活動...
                      </div>
                    )}
                  </div>

                  {/* 查看詳情按鈕 */}
                  <Link
                    to={`/day/${day.id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 group"
                  >
                    查看完整行程
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 活動數量指示器 */}
                <div className="bg-gray-50 px-6 py-3 border-t">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>共 {day.activities.length} 個活動</span>
                    <div className="flex space-x-1">
                      {day.activities.map((_, actIndex) => (
                        <div
                          key={actIndex}
                          className="w-2 h-2 bg-blue-300 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 總結統計 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl shadow-lg px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{days.length}</div>
              <div className="text-sm text-gray-600">天數</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">
                {days.reduce((total, day) => total + day.activities.length, 0)}
              </div>
              <div className="text-sm text-gray-600">活動</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">城市</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

