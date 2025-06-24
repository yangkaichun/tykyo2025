import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Camera, Calendar, Mail, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '快速導航',
      links: [
        { name: '首頁', href: '/' },
        { name: '照片集', href: '/gallery' },
        { name: '地圖總覽', href: '/map' },
      ]
    },
    {
      title: '旅遊資訊',
      links: [
        { name: '行程規劃', href: '/#timeline' },
        { name: '景點介紹', href: '/#gallery' },
        { name: '交通指南', href: '/#map' },
      ]
    },
    {
      title: '實用連結',
      links: [
        { name: 'Google地圖', href: 'https://maps.google.com', external: true },
        { name: '日本觀光局', href: 'https://www.jnto.go.jp', external: true },
        { name: '天氣預報', href: 'https://weather.yahoo.co.jp', external: true },
      ]
    }
  ];

  const socialStats = [
    { icon: MapPin, label: '造訪地點', value: '20+' },
    { icon: Camera, label: '精彩照片', value: '100+' },
    { icon: Calendar, label: '旅遊天數', value: '7天' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* 主要內容區 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌區域 */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                🇯🇵 日本探索之旅
              </h3>
              <p className="text-gray-400 leading-relaxed">
                記錄一場充滿驚喜的日本親子探索之旅，從東京的現代魅力到京都的古典美學，每一個瞬間都值得珍藏。
              </p>
            </div>

            {/* 統計數據 */}
            <div className="grid grid-cols-3 gap-4">
              {socialStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon size={20} className="mx-auto text-blue-400 mb-2" />
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 導航連結 */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : ''}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 分隔線 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 版權資訊 */}
            <motion.div
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="flex items-center">
                © {currentYear} 日本探索之旅. 
                <span className="mx-2">Made with</span>
                <Heart size={16} className="text-red-500 mx-1" />
                <span>for amazing memories</span>
              </p>
            </motion.div>

            {/* 技術標籤 */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Built with</span>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">Tailwind</span>
                  <span className="px-2 py-1 bg-pink-600 text-white text-xs rounded">Framer Motion</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 額外資訊 */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-lg px-6 py-3">
            <Calendar size={16} className="text-blue-400" />
            <span className="text-gray-300 text-sm">
              旅遊日期：2025年7月14日 - 7月20日
            </span>
            <div className="w-px h-4 bg-gray-600"></div>
            <MapPin size={16} className="text-pink-400" />
            <span className="text-gray-300 text-sm">
              東京 → 大阪 → 京都 → 奈良
            </span>
          </div>
        </motion.div>
      </div>

      {/* 底部裝飾 */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-xs">
            <p>此網站展示2025年日本親子旅遊的完整行程規劃與實地記錄</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

