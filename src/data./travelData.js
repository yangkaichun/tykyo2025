export const travelData = {
  trip: {
    title: "日本親子探索之旅：東京、大阪、京都、奈良",
    duration: "7天6夜",
    startDate: "2025-07-14",
    endDate: "2025-07-20",
    description: "一場充滿驚喜的日本親子探索之旅，從東京的現代魅力到京都的古典美學，從大阪的美食文化到奈良的自然風光。",
    days: [
      {
        id: 1,
        date: "2025-07-14",
        title: "啟程東京，進駐上野基地",
        location: "東京",
        theme: "抵達與安頓",
        activities: [
          {
            id: "activity_1_1",
            time: "15:30",
            title: "搭乘酷航 TR870 班機",
            type: "transport",
            icon: "✈️",
            description: "從桃園國際機場 (TPE) 第一航廈出發，預計 19:55 抵達東京成田機場 (NRT) 第一航廈。",
            duration: "4小時25分鐘",
            photos: [],
            tips: ["提前2小時到機場", "準備護照和登機證", "可在機上填寫入境卡"]
          },
          {
            id: "activity_1_2",
            time: "21:00",
            title: "兌換並搭乘京成Skyliner",
            type: "transport",
            icon: "🚆",
            description: "抵達後辦理入境，前往京成電鐵櫃檯，使用 Skyliner Discount Ticket 憑證兌換實體票券。搭乘Skyliner直達「京成上野站」。",
            duration: "45分鐘",
            photos: [],
            tips: ["保留兌換憑證", "注意末班車時間", "可在車上休息"]
          },
          {
            id: "activity_1_3",
            time: "22:30",
            title: "入住上野皇冠山丘高級酒店",
            type: "accommodation",
            icon: "🏨",
            description: "出站後步行至飯店辦理入住。此住宿包含早餐。",
            location: {
              name: "上野皇冠山丘高級酒店",
              address: "東京都台東區東上野二丁目16番1號",
              googleMapUrl: "https://maps.app.goo.gl/...",
              coordinates: { lat: 35.7089, lng: 139.7753 }
            },
            duration: "步行5分鐘",
            photos: ["上野皇冠山丘高級酒店_1.jpg", "上野皇冠山丘高級酒店_2.jpg"],
            tips: ["準備護照辦理入住", "確認早餐時間", "了解周邊設施"]
          }
        ]
      },
      {
        id: 2,
        date: "2025-07-15",
        title: "魔法與科學的奇幻一日",
        location: "東京",
        theme: "探索與體驗",
        activities: [
          {
            id: "activity_2_1",
            time: "09:00",
            title: "國立科學博物館",
            type: "attraction",
            icon: "🏛️",
            description: "步行穿過上野公園即可抵達。本日為日本國定假日「海之日」，人潮可能較多。",
            location: {
              name: "國立科學博物館",
              googleMapUrl: "https://www.google.com/maps/place/%E5%9C%8B%E7%AB%8B%E7%A7%91%E5%AD%B8%E5%8D%9A%E7%89%A9%E9%A4%A8/@35.7161921,139.7737277,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9a35c8f2e1:0x4e5b0e0e0e0e0e0e!8m2!3d35.7161921!4d139.7737277!16s%2Fg%2F11bc6r1qk3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
            },
            duration: "2小時",
            photos: ["國立科學博物館_1.jpg", "國立科學博物館_2.jpg"],
            tips: ["建議提早到達", "可租借語音導覽", "注意特展時間"]
          },
          {
            id: "activity_2_2",
            time: "12:30",
            title: "東京哈利波特影城",
            type: "attraction",
            icon: "🧙‍♂️",
            description: "從JR「上野站」搭乘山手線至「池袋站」，轉乘西武池袋線至「豐島園站」。使用 Klook 預訂的電子票入場。",
            location: {
              name: "東京哈利波特影城",
              googleMapUrl: "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E5%BD%B1%E5%9F%8E/@35.7100818,139.8111788,17z/data=!3m1!4b1!4m6!3m5!1s0x600108c3c1c67b67:0xdcb04aa1398efb4!8m2!3d35.0037816!4d135.777245!16zL20vMDN5NXNj?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
            },
            duration: "4-5小時",
            photos: ["東京哈利波特影城_1.webp", "東京哈利波特影城_2.webp"],
            tips: ["預留充足時間", "可購買紀念品", "注意拍照規定"]
          }
        ]
      },
      {
        id: 3,
        date: "2025-07-16",
        title: "未來科技與傳統市場",
        location: "東京",
        theme: "科技與美食",
        activities: [
          {
            id: "activity_3_1",
            time: "10:00",
            title: "teamLab Planets TOKYO",
            type: "attraction",
            icon: "🎨",
            description: "沉浸式數位藝術體驗，需要脫鞋進入部分展區。",
            location: {
              name: "teamLab Planets TOKYO",
              googleMapUrl: "https://maps.app.goo.gl/..."
            },
            duration: "2-3小時",
            photos: ["teamLab_Planets_TOKYO_1.webp", "teamLab_Planets_TOKYO_2.jpeg"],
            tips: ["穿著方便脫鞋的鞋子", "可能會弄濕衣物", "建議預約時段"]
          },
          {
            id: "activity_3_2",
            time: "14:00",
            title: "豐洲市場",
            type: "attraction",
            icon: "🐟",
            description: "世界最大的魚市場，體驗新鮮海鮮和壽司文化。",
            location: {
              name: "豐洲市場",
              googleMapUrl: "https://www.google.com/maps/place/%E8%B1%90%E6%B4%B2%E5%B8%82%E5%A0%B4/@35.6496,139.7872,17z/data=!3m1!4b1!4m6!3m5!1s0x601889f4c1c67b67:0xdcb04aa1398efb4!8m2!3d35.6496!4d139.7872!16zL20vMDN5NXNj?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
            },
            duration: "2小時",
            photos: ["豐洲市場_1.jpg", "豐洲市場_2.jpg"],
            tips: ["早上較為熱鬧", "注意營業時間", "可品嚐新鮮壽司"]
          },
          {
            id: "activity_3_3",
            time: "17:00",
            title: "東京晴空塔",
            type: "attraction",
            icon: "🗼",
            description: "東京新地標，可俯瞰整個東京都的美景。",
            location: {
              name: "東京晴空塔",
              googleMapUrl: "https://www.google.com/maps/search/%E6%9D%B1%E4%BA%AC%E6%99%B4%E7%A9%BA%E5%A1%94/@35.7100818,139.8111788,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
            },
            duration: "2小時",
            photos: ["東京晴空塔_1.jpg", "東京晴空塔_2.png"],
            tips: ["建議傍晚前往看夕陽", "可購買快速通關票", "注意天氣狀況"]
          }
        ]
      }
    ]
  },
  
  locations: [
    {
      id: "ueno_crown_hills_hotel",
      name: "上野皇冠山丘高級酒店",
      type: "hotel",
      description: "位於上野地區的高級酒店，交通便利，設施完善。",
      address: "東京都台東區東上野二丁目16番1號",
      googleMapUrl: "https://maps.app.goo.gl/...",
      coordinates: { lat: 35.7089, lng: 139.7753 },
      photos: [
        { url: "上野皇冠山丘高級酒店_1.jpg", caption: "酒店外觀", type: "exterior" },
        { url: "上野皇冠山丘高級酒店_2.jpg", caption: "酒店大廳", type: "interior" }
      ],
      amenities: ["免費WiFi", "早餐", "24小時前台"],
      rating: 4.2,
      tags: ["住宿", "上野", "高級酒店"]
    },
    {
      id: "national_science_museum",
      name: "國立科學博物館",
      type: "museum",
      description: "日本最大的科學博物館，展示豐富的自然科學和科技文物。",
      googleMapUrl: "https://www.google.com/maps/place/%E5%9C%8B%E7%AB%8B%E7%A7%91%E5%AD%B8%E5%8D%9A%E7%89%A9%E9%A4%A8/@35.7161921,139.7737277,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9a35c8f2e1:0x4e5b0e0e0e0e0e0e!8m2!3d35.7161921!4d139.7737277!16s%2Fg%2F11bc6r1qk3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
      photos: [
        { url: "國立科學博物館_1.jpg", caption: "博物館外觀", type: "exterior" },
        { url: "國立科學博物館_2.jpg", caption: "恐龍展示區", type: "interior" }
      ],
      rating: 4.5,
      tags: ["博物館", "科學", "教育", "親子"]
    }
  ],
  
  googleMapsData: [
    { name: "上野皇冠山丘高級酒店", url: "https://maps.app.goo.gl/..." },
    { name: "國立科學博物館", url: "https://www.google.com/maps/place/%E5%9C%8B%E7%AB%8B%E7%A7%91%E5%AD%B8%E5%8D%9A%E7%89%A9%E9%A4%A8/@35.7161921,139.7737277,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9a35c8f2e1:0x4e5b0e0e0e0e0e0e!8m2!3d35.7161921!4d139.7737277!16s%2Fg%2F11bc6r1qk3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "東京哈利波特影城", url: "https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E5%BD%B1%E5%9F%8E/@35.7100818,139.8111788,17z/data=!3m1!4b1!4m6!3m5!1s0x600108c3c1c67b67:0xdcb04aa1398efb4!8m2!3d35.0037816!4d135.777245!16zL20vMDN5NXNj?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "teamLab Planets TOKYO", url: "https://maps.app.goo.gl/..." },
    { name: "豐洲市場", url: "https://www.google.com/maps/place/%E8%B1%90%E6%B4%B2%E5%B8%82%E5%A0%B4/@35.6496,139.7872,17z/data=!3m1!4b1!4m6!3m5!1s0x601889f4c1c67b67:0xdcb04aa1398efb4!8m2!3d35.6496!4d139.7872!16zL20vMDN5NXNj?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D" },
    { name: "東京晴空塔", url: "https://www.google.com/maps/search/%E6%9D%B1%E4%BA%AC%E6%99%B4%E7%A9%BA%E5%A1%94/@35.7100818,139.8111788,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" }
  ]
};

