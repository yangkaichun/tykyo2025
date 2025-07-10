// 等待HTML文檔完全加載後再執行腳本
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    //  資料庫：請在此處填入您自己的圖片及Google Maps連結
    // =================================================================
    // 說明：
    // - 圖片連結(img): 請填入圖片的直接網址 (例如 https://.../image.jpg)
    // - 地圖/路線連結(link): 請填入Google Maps的分享連結
    // =================================================================
    const dataStore = {
        // --- DAY 1 ---
        d1_img_scoot_plane: "YOUR_SCOOT_AIRLINER_IMAGE_URL_HERE", // D1: 酷航客機的圖片連結
        d1_img_scoot_cabin: "YOUR_SCOOT_CABIN_IMAGE_URL_HERE", // D1: 酷航機艙內部的圖片連結
        d1_img_skyliner: "YOUR_SKYLINER_TRAIN_IMAGE_URL_HERE", // D1: 京成Skyliner列車的圖片連結
        d1_link_skyliner_route: "YOUR_SKYLINER_ROUTE_GOOGLE_MAPS_URL_HERE", // D1: 從成田機場到上野的Skyliner路線規劃連結
        d1_link_hotel_map: "YOUR_D1_HOTEL_CROWN_HILLS_MAP_URL_HERE", // D1: 上野皇冠山丘酒店的Google Maps位置連結
        d1_img_hotel_exterior: "YOUR_D1_HOTEL_EXTERIOR_IMAGE_URL_HERE", // D1: 飯店外觀的圖片連結
        d1_img_hotel_room: "YOUR_D1_HOTEL_ROOM_IMAGE_URL_HERE", // D1: 飯店房間的圖片連結
        d1_img_hotel_view: "YOUR_D1_HOTEL_VIEW_IMAGE_URL_HERE", // D1: 飯店窗景的圖片連結

        // --- DAY 2 ---
        d2_link_harrypotter_map: "YOUR_HARRY_POTTER_STUDIO_MAP_URL_HERE", // D2: 哈利波特影城的Google Maps位置連結
        d2_link_to_harrypotter_route: "YOUR_ROUTE_TO_HP_STUDIO_MAP_URL_HERE", // D2: 前往哈利波特影城的路線規劃連結
        d2_img_oedo_line: "YOUR_OEDO_LINE_TRAIN_IMAGE_URL_HERE", // D2: 都營大江戶線列車的圖片連結
        d2_img_hp_entrance: "YOUR_HP_ENTRANCE_IMAGE_URL_HERE", // D2: 哈利波特影城入口的圖片連結
        d2_img_hp_hall: "YOUR_HP_GREAT_HALL_IMAGE_URL_HERE", // D2: 霍格華茲大廳的圖片連結
        d2_img_hp_scene: "YOUR_HP_MAGIC_SCENE_IMAGE_URL_HERE", // D2: 影城內魔法場景的圖片連結
        d2_img_sunshine_aqua: "YOUR_SUNSHINE_AQUARIUM_IMAGE_URL_HERE", // D2: 池袋陽光水族館的圖片連結
        d2_img_sunshine_show: "YOUR_SUNSHINE_AQUARIUM_SHOW_IMAGE_URL_HERE", // D2: 水族館表演的圖片連結
        d2_img_sunshine_jellyfish: "YOUR_SUNSHINE_AQUARIUM_JELLYFISH_IMAGE_URL_HERE", // D2: 水族館水母區的圖片連結
        d2_link_to_ikebukuro_route: "YOUR_ROUTE_TO_IKEBUKURO_MAP_URL_HERE", // D2: 前往池袋的路線規劃連結
        
        // --- DAY 3 ---
        d3_link_teamlab_map: "YOUR_TEAMLAB_MAP_URL_HERE", // D3: teamLab Planets的Google Maps位置連結
        d3_img_teamlab_1: "YOUR_TEAMLAB_IMAGE_1_URL_HERE", // D3: teamLab場景圖片1
        d3_img_teamlab_2: "YOUR_TEAMLAB_IMAGE_2_URL_HERE", // D3: teamLab場景圖片2
        d3_img_teamlab_3: "YOUR_TEAMLAB_IMAGE_3_URL_HERE", // D3: teamLab場景圖片3
        d3_link_lalaport_map: "YOUR_LALAPORT_TOYOSU_MAP_URL_HERE", // D3: 豐洲LaLaport的Google Maps位置連結
        d3_img_lalaport_1: "YOUR_LALAPORT_IMAGE_1_URL_HERE", // D3: LaLaport商場圖片1
        d3_img_lalaport_2: "YOUR_LALAPORT_IMAGE_2_URL_HERE", // D3: LaLaport商場圖片2
        d3_link_skytree_map: "YOUR_SKYTREE_MAP_URL_HERE", // D3: 東京晴空塔的Google Maps位置連結
        d3_img_skytree_1: "YOUR_SKYTREE_IMAGE_1_URL_HERE", // D3: 晴空塔圖片1
        d3_img_skytree_2: "YOUR_SKYTREE_IMAGE_2_URL_HERE", // D3: 晴空塔圖片2
        d3_img_skytree_3: "YOUR_SKYTREE_IMAGE_3_URL_HERE", // D3: 晴空塔圖片3
        d3_img_pokemon_skytree: "YOUR_POKEMON_CENTER_SKYTREE_IMAGE_URL_HERE", // D3: 晴空塔寶可夢中心的圖片連結

        // --- DAY 4 ---
        d4_link_tokyo_locker_map: "YOUR_TOKYO_STATION_LOCKER_MAP_URL_HERE", // D4: 東京車站置物櫃的Google Maps位置連結
        d4_link_odaiba_map: "YOUR_ODAIBA_MAP_URL_HERE", // D4: 台場的Google Maps位置連結
        d4_img_gundam_1: "YOUR_GUNDAM_IMAGE_1_URL_HERE", // D4: 獨角獸鋼彈圖片1
        d4_img_gundam_2: "YOUR_GUNDAM_IMAGE_2_URL_HERE", // D4: 獨角獸鋼彈圖片2
        d4_img_gundam_3: "YOUR_GUNDAM_IMAGE_3_URL_HERE", // D4: 獨角獸鋼彈圖片3
        d4_link_rakuspa_map: "YOUR_RAKUSPA_KANDA_MAP_URL_HERE", // D4: RAKU SPA 1010 神田的Google Maps位置連結
        d4_img_rakuspa_1: "YOUR_RAKUSPA_IMAGE_1_URL_HERE", // D4: RAKU SPA圖片1
        d4_img_rakuspa_2: "YOUR_RAKUSPA_IMAGE_2_URL_HERE", // D4: RAKU SPA圖片2
        d4_link_to_rakuspa_route: "YOUR_ROUTE_TO_RAKUSPA_FROM_ODAIBA_URL_HERE", // D4: 從台場前往RAKU SPA的路線規劃連結
        d4_link_yaesu_bus_map: "YOUR_YAESU_BUS_TERMINAL_MAP_URL_HERE", // D4: 東京八重洲巴士總站的Google Maps位置連結
        d4_img_nightbus: "YOUR_WILLER_BUS_IMAGE_URL_HERE", // D4: WILLER夜間巴士的圖片連結
        d4_img_yaesu_midtown: "YOUR_YAESU_MIDTOWN_IMAGE_URL_HERE", // D4: 東京中城八重洲的圖片連結

        // --- DAY 5 ---
        d5_link_to_usjhotel_route: "YOUR_ROUTE_TO_PARK_FRONT_HOTEL_URL_HERE", // D5: 從巴士站到The Park Front Hotel的路線連結
        d5_link_usj_map: "YOUR_USJ_MAP_URL_HERE", // D5: 日本環球影城的Google Maps位置連結
        d5_img_usj_1: "YOUR_USJ_IMAGE_1_URL_HERE", // D5: USJ圖片1
        d5_img_usj_2: "YOUR_USJ_IMAGE_2_URL_HERE", // D5: USJ圖片2
        d5_img_usj_3: "YOUR_USJ_IMAGE_3_URL_HERE", // D5: USJ圖片3
        d5_link_usjhotel_map: "YOUR_PARK_FRONT_HOTEL_MAP_URL_HERE", // D5: The Park Front Hotel的Google Maps位置連結
        d5_img_usjhotel_1: "YOUR_PARK_FRONT_HOTEL_IMAGE_1_URL_HERE", // D5: 飯店圖片1
        d5_img_usjhotel_2: "YOUR_PARK_FRONT_HOTEL_IMAGE_2_URL_HERE", // D5: 飯店圖片2
        d5_img_usjhotel_3: "YOUR_PARK_FRONT_HOTEL_IMAGE_3_URL_HERE", // D5: 飯店圖片3

        // --- DAY 6 ---
        d6_link_captain_line_route: "YOUR_CAPTAIN_LINE_ROUTE_URL_HERE", // D6: 船長線的路線規劃連結
        d6_img_captain_line: "YOUR_CAPTAIN_LINE_FERRY_IMAGE_URL_HERE", // D6: 船長線渡輪的圖片連結
        d6_img_kaiyukan_1: "YOUR_KAIYUKAN_IMAGE_1_URL_HERE", // D6: 大阪海遊館圖片1
        d6_img_kaiyukan_2: "YOUR_KAIYUKAN_IMAGE_2_URL_HERE", // D6: 大阪海遊館圖片2
        d6_img_kaiyukan_3: "YOUR_KAIYUKAN_IMAGE_3_URL_HERE", // D6: 大阪海遊館圖片3
        d6_link_to_bonhostel_route: "YOUR_ROUTE_TO_BON_HOSTEL_URL_HERE", // D6: 前往BON Hostel的路線規劃連結
        d6_img_bonhostel: "YOUR_BON_HOSTEL_IMAGE_URL_HERE", // D6: BON Hostel的圖片連結
        d6_img_denden_town: "YOUR_DENDEN_TOWN_IMAGE_URL_HERE", // D6: 日本橋電電城的圖片連結
        d6_img_dotonbori: "YOUR_DOTONBORI_IMAGE_URL_HERE", // D6: 道頓堀的圖片連結
        d6_img_glico: "YOUR_GLICO_SIGN_IMAGE_URL_HERE", // D6: 固力果跑跑人的圖片連結

        // --- DAY 7 ---
        d7_link_to_kyoto_route: "YOUR_ROUTE_TO_KYOTO_STATION_URL_HERE", // D7: 從大阪前往京都車站的路線規劃連結
        d7_link_fushimiinari_map: "YOUR_FUSHIMI_INARI_MAP_URL_HERE", // D7: 伏見稻荷大社的Google Maps位置連結
        d7_img_fushimiinari_1: "YOUR_FUSHIMI_INARI_IMAGE_1_URL_HERE", // D7: 伏見稻荷大社圖片1
        d7_img_fushimiinari_2: "YOUR_FUSHIMI_INARI_IMAGE_2_URL_HERE", // D7: 伏見稻荷大社圖片2
        d7_img_fushimiinari_3: "YOUR_FUSHIMI_INARI_IMAGE_3_URL_HERE", // D7: 伏見稻荷大社圖片3
        d7_link_nara_map: "YOUR_NARA_PARK_MAP_URL_HERE", // D7: 奈良公園的Google Maps位置連結
        d7_img_nara_1: "YOUR_NARA_DEER_IMAGE_URL_HERE", // D7: 奈良鹿的圖片連結
        d7_img_nara_2: "YOUR_TODAIJI_TEMPLE_IMAGE_URL_HERE", // D7: 東大寺的圖片連結
        d7_img_nara_3: "YOUR_NARA_BUDDHA_IMAGE_URL_HERE", // D7: 東大寺大佛的圖片連結
        d7_link_kyotohotel_map: "YOUR_LOISIR_HOTEL_MAP_URL_HERE", // D7: LOISIR HOTEL KYOTO TOJI的Google Maps位置連結
        d7_img_kyotohotel: "YOUR_LOISIR_HOTEL_IMAGE_URL_HERE", // D7: LOISIR HOTEL的圖片連結

        // --- DAY 8 ---
        d8_img_kiyomizu_1: "YOUR_KIYOMIZU_TEMPLE_IMAGE_1_URL_HERE", // D8: 清水寺圖片1
        d8_img_kiyomizu_2: "YOUR_NINENZAKA_IMAGE_URL_HERE", // D8: 二年坂的圖片連結
        d8_img_kiyomizu_3: "YOUR_SANNENZAKA_IMAGE_URL_HERE", // D8: 三年坂的圖片連結
        d8_link_kiyomizu_route: "YOUR_KIYOMIZU_WALKING_ROUTE_URL_HERE", // D8: 清水寺周邊的散步路線規劃連結
        d8_link_makotoyu_map: "YOUR_MAKOTOYU_SPA_MAP_URL_HERE", // D8: 誠の湯的Google Maps位置連結
        d8_img_makotoyu_1: "YOUR_MAKOTOYU_IMAGE_1_URL_HERE", // D8: 誠の湯圖片1
        d8_img_makotoyu_2: "YOUR_MAKOTOYU_IMAGE_2_URL_HERE", // D8: 誠の湯圖片2
        d8_link_to_makotoyu_route: "YOUR_ROUTE_TO_MAKOTOYU_URL_HERE", // D8: 前往誠の湯的路線規劃連結
        d8_link_kyoto_bus_map: "YOUR_KYOTO_BUS_TERMINAL_MAP_URL_HERE", // D8: 京都夜間巴士乘車點的Google Maps位置連結

        // --- DAY 9 ---
        d9_link_gridshotel_map: "YOUR_GRIDS_HOTEL_MAP_URL_HERE", // D9: Grids Tokyo Ueno Hotel的Google Maps位置連結
        d9_img_gridshotel_1: "YOUR_GRIDS_HOTEL_IMAGE_1_URL_HERE", // D9: 飯店圖片1
        d9_img_gridshotel_2: "YOUR_GRIDS_HOTEL_IMAGE_2_URL_HERE", // D9: 飯店圖片2
        d9_img_gridshotel_3: "YOUR_GRIDS_HOTEL_IMAGE_3_URL_HERE", // D9: 飯店圖片3
        d9_img_ameyoko_1: "YOUR_AMEYOKO_IMAGE_1_URL_HERE", // D9: 阿美橫丁圖片1
        d9_img_ameyoko_2: "YOUR_AMEYOKO_IMAGE_2_URL_HERE", // D9: 阿美橫丁圖片2
        d9_img_ueno_park_1: "YOUR_UENO_PARK_IMAGE_1_URL_HERE", // D9: 上野公園圖片1
        d9_img_ueno_park_2: "YOUR_SHINOBAZU_POND_IMAGE_URL_HERE", // D9: 不忍池的圖片連結

        // --- DAY 10 ---
        d10_link_to_hakone_route: "YOUR_ROUTE_TO_HAKONE_URL_HERE", // D10: 前往箱根的路線規劃連結
        d10_link_owakudani_map: "YOUR_OWAKUDANI_MAP_URL_HERE", // D10: 大涌谷的Google Maps位置連結
        d10_img_owakudani_1: "YOUR_OWAKUDANI_IMAGE_1_URL_HERE", // D10: 大涌谷圖片1
        d10_img_owakudani_2: "YOUR_HAKONE_ROPEWAY_IMAGE_URL_HERE", // D10: 箱根纜車的圖片連結
        d10_img_owakudani_3: "YOUR_OWAKUDANI_VOLCANO_IMAGE_URL_HERE", // D10: 大涌谷火山景觀的圖片連結
        d10_link_ashinoko_map: "YOUR_LAKE_ASHINOKO_MAP_URL_HERE", // D10: 蘆之湖的Google Maps位置連結
        d10_img_pirate_ship_1: "YOUR_HAKONE_PIRATE_SHIP_IMAGE_1_URL_HERE", // D10: 海賊船圖片1
        d10_img_pirate_ship_2: "YOUR_HAKONE_PIRATE_SHIP_IMAGE_2_URL_HERE", // D10: 海賊船圖片2
        d10_link_hakone_shrine_map: "YOUR_HAKONE_SHRINE_MAP_URL_HERE", // D10: 箱根神社的Google Maps位置連結
        d10_img_hakone_shrine_1: "YOUR_HAKONE_SHRINE_IMAGE_1_URL_HERE", // D10: 箱根神社圖片1
        d10_img_hakone_shrine_2: "YOUR_HAKONE_SHRINE_TORII_IMAGE_URL_HERE", // D10: 平和鳥居的圖片連結

        // --- DAY 11 ---
        d11_link_ueno_locker_map: "YOUR_UENO_COIN_LOCKER_MAP_URL_HERE", // D11: 上野車站置物櫃的Google Maps位置連結
        d11_img_ameyoko_1: "YOUR_AMEYOKO_SHOPPING_IMAGE_1_URL_HERE", // D11: 阿美橫丁購物圖片1
        d11_img_ameyoko_2: "YOUR_AMEYOKO_SHOPPING_IMAGE_2_URL_HERE", // D11: 阿美橫丁購物圖片2
        d11_link_to_rakuspa_route: "YOUR_ROUTE_TO_RAKUSPA_KANDA_MAP_URL_HERE", // D11: 從上野前往RAKU SPA的路線規劃連結
        d11_img_rakuspa: "YOUR_RAKUSPA_KANDA_EXTERIOR_IMAGE_URL_HERE", // D11: RAKU SPA的圖片連結
        d11_link_to_airport_route: "YOUR_ROUTE_TO_NARITA_AIRPORT_MAP_URL_HERE", // D11: 前往成田機場的路線規劃連結
    };

    // =================================================================
    //  動態載入資料的程式碼 (無需修改此部分)
    // =================================================================

    // 載入圖片
    const images = document.querySelectorAll('img[data-key]');
    images.forEach(img => {
        const key = img.dataset.key;
        if (dataStore[key] && dataStore[key].startsWith('http')) {
            img.src = dataStore[key];
            img.style.backgroundColor = 'transparent'; // 載入成功後移除背景色
        } else {
            img.style.display = 'none'; // 如果沒有提供URL，則隱藏圖片
        }
    });

    // 載入連結
    const links = document.querySelectorAll('a[data-key]');
    links.forEach(link => {
        const key = link.dataset.key;
        if (dataStore[key] && dataStore[key].startsWith('http')) {
            link.href = dataStore[key];
            link.target = "_blank"; // 在新分頁開啟連結
            link.rel = "noopener noreferrer";
        } else {
            link.style.display = 'none'; // 如果沒有提供URL，則隱藏按鈕
        }
    });


    // =================================================================
    //  網頁互動功能程式碼 (無需修改此部分)
    // =================================================================

    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 圖片載入錯誤處理
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });

    // 導航欄滾動效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.sticky-nav');
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });

});
