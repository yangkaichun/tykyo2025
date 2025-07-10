// 等待HTML文檔完全加載後再執行腳本
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    //  資料庫：已將所有飯店圖片更新為 Agoda 來源
    // =================================================================
  const dataStore = {
    // --- DAY 1 ---
    d1_img_scoot_plane: "https://upload.wikimedia.org/wikipedia/commons/8/87/Scoot_Boeing_787-8_9V-OFC.jpg",
    d1_img_scoot_cabin: "https://upload.wikimedia.org/wikipedia/commons/3/30/Scoot_B787-9_9V-OJA_cabin_view_20180917.jpg",
    d1_img_skyliner: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/assets/images/skyliner/index/photo_skyliner.jpg",
    d1_link_skyliner_route: "https://www.google.com/maps/dir/?api=1&origin=Narita+Airport+Terminal+2&destination=Keisei-Ueno+Station&travelmode=transit",
    d1_link_hotel_map: "https://www.google.com/maps/search/?api=1&query=Hotel+Crown+Hills+Ueno+Premier",
    d1_img_hotel_exterior: "https://pix8.agoda.net/hotelImages/9582583/0/0358dc346f324d2757754388435d7591.jpg", // Hotel Crown Hills Ueno Premier (來源: Agoda)
    d1_img_hotel_room: "https://pix8.agoda.net/hotelImages/9582583/0/1eab8d7c43a083a21558c426f4f2081f.jpg", // Hotel Crown Hills Ueno Premier (來源: Agoda)
    d1_img_hotel_view: "https://pix8.agoda.net/hotelImages/9582583/0/c97b8332147321e9057b54ab43f11b65.jpg", // Hotel Crown Hills Ueno Premier (來源: Agoda)

    // --- DAY 2 ---
    d2_link_harrypotter_map: "https://www.google.com/maps/search/?api=1&query=Warner+Bros.+Studio+Tour+Tokyo+-+The+Making+of+Harry+Potter",
    d2_link_to_harrypotter_route: "https://www.google.com/maps/dir/?api=1&origin=Ueno-okachimachi+Station&destination=Toshimaen+Station&travelmode=transit",
    d2_img_oedo_line: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Toei_12-600_series_EMU_04.jpg",
    d2_img_hp_entrance: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Warner_Bros._Studio_Tour_Tokyo_-_The_Making_of_Harry_Potter_at_Toshimaen_Amusement_Park_%2852981329610%29.jpg",
    d2_img_hp_hall: "https://upload.wikimedia.org/wikipedia/commons/1/13/The_Great_Hall_at_Warner_Bros_Studio_Tour_Tokyo.jpg",
    d2_img_hp_scene: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Diagon_Alley_at_Warner_Bros_Studio_Tour_Tokyo.jpg",
    d2_img_sunshine_aqua: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Sunshine_Aquarium_in_202209_02.jpg",
    d2_img_sunshine_show: "https://sunshinecity.jp/file/aquarium/performance/images/img_performance01.jpg",
    d2_img_sunshine_jellyfish: "https://sunshinecity.jp/file/aquarium/area/images/img_kurage.jpg",
    d2_link_to_ikebukuro_route: "https://www.google.com/maps/dir/?api=1&origin=Toshimaen+Station&destination=Ikebukuro+Station&travelmode=transit",
   
    // --- DAY 3 ---
    d3_link_teamlab_map: "https://www.google.com/maps/search/?api=1&query=teamLab+Planets+TOKYO+DMM",
    d3_img_teamlab_1: "https://planets.teamlab.art/images/art/infinite_crystal_universe_01_planets.jpg",
    d3_img_teamlab_2: "https://planets.teamlab.art/images/art/floating-in-the-falling-universe-of-flowers_01_planets.jpg",
    d3_img_teamlab_3: "https://planets.teamlab.art/images/art/drawing-on-the-water-surface_01_planets.jpg",
    d3_link_lalaport_map: "https://www.google.com/maps/search/?api=1&query=LaLaport+TOYOSU",
    d3_img_lalaport_1: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Urban_Dock_LaLaport_TOYOSU_Main_Entrance.jpg",
    d3_img_lalaport_2: "https://mitsui-shopping-park.com/lalaport/toyosu/asset/images/og.jpg",
    d3_link_skytree_map: "https://www.google.com/maps/search/?api=1&query=Tokyo+Skytree",
    d3_img_skytree_1: "https://www.japan-guide.com/g18/3064_01.jpg",
    d3_img_skytree_2: "https://upload.wikimedia.org/wikipedia/commons/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg",
    d3_img_skytree_3: "https://upload.wikimedia.org/wikipedia/commons/3/30/Tokyo_Skytree_Tembo_deck_floor_350.jpg",
    d3_img_pokemon_skytree: "https://www.pokemon.co.jp/shop/pokecen/skytreetown/images/main_visual.jpg",

    // --- DAY 4 ---
    d4_link_tokyo_locker_map: "https://www.google.com/maps/search/?api=1&query=coin+lockers+Tokyo+Station",
    d4_link_odaiba_map: "https://www.google.com/maps/search/?api=1&query=Odaiba+Tokyo",
    d4_img_gundam_1: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Life-sized_Unicorn_Gundam_statue_in_202209_01.jpg",
    d4_img_gundam_2: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Life-sized_Unicorn_Gundam_statue_in_202209_03.jpg",
    d4_img_gundam_3: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Life-sized_Unicorn_Gundam_statue_in_Destroy_Mode_at_night.jpg",
    d4_link_rakuspa_map: "https://www.google.com/maps/search/?api=1&query=RAKU+SPA+1010+Kanda",
    d4_img_rakuspa_1: "https://www.rakuspa.com/kanda/img/top/main_img02.jpg",
    d4_img_rakuspa_2: "https://www.rakuspa.com/kanda/img/floor/floor_4f.jpg",
    d4_link_to_rakuspa_route: "https://www.google.com/maps/dir/?api=1&origin=Daiba+Station&destination=RAKU+SPA+1010+Kanda&travelmode=transit",
    d4_link_yaesu_bus_map: "https://www.google.com/maps/search/?api=1&query=Bus+Terminal+Tokyo+Yaesu",
    d4_img_nightbus: "https://bus.willerexpress.co.jp/assets/img/bus/reborn/common/main_01_a.jpg",
    d4_img_yaesu_midtown: "https://upload.wikimedia.org/wikipedia/commons/8/87/Tokyo_Midtown_Yaesu_Yaesu_Central_Tower_202303.jpg",

    // --- DAY 5 ---
    d5_link_to_usjhotel_route: "https://www.google.com/maps/dir/?api=1&origin=WILLER+Bus+Stop+Universal+Studios+Japan&destination=The+Park+Front+Hotel+at+Universal+Studios+Japan&travelmode=walking",
    d5_link_usj_map: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan",
    d5_img_usj_1: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Universal_Studios_Japan_entrance_gate_2022.jpg",
    d5_img_usj_2: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Super_Nintendo_World_-_panoramio.jpg",
    d5_img_usj_3: "https://upload.wikimedia.org/wikipedia/commons/e/e3/The_Wizarding_World_of_Harry_Potter_at_Universal_Studios_Japan_-_April_2015.jpg",
    d5_link_usjhotel_map: "https://www.google.com/maps/search/?api=1&query=The+Park+Front+Hotel+at+Universal+Studios+Japan",
    d5_img_usjhotel_1: "https://pix8.agoda.net/hotelImages/813876/0/953b02298935471d469274431e67b278.jpg", // The Park Front Hotel (來源: Agoda)
    d5_img_usjhotel_2: "https://pix8.agoda.net/hotelImages/813876/0/e7816007b8b21c4314c1d1a12a5538e1.jpg", // The Park Front Hotel (來源: Agoda)
    d5_img_usjhotel_3: "https://pix8.agoda.net/hotelImages/813876/0/7d2cf398b6da2b1d0335043d93ac9a7c.jpg", // The Park Front Hotel (來源: Agoda)

    // --- DAY 6 ---
    d6_link_captain_line_route: "https://www.google.com/maps/dir/?api=1&origin=Universal+City+Port&destination=Kaiyukan+West+Wharf&travelmode=transit",
    d6_img_captain_line: "https://www.mmjp.or.jp/captain-line/img/top/img-sea-sp.jpg",
    d6_img_kaiyukan_1: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Osaka_Aquarium_Kaiyukan_and_Tempozan_Ferris_Wheel_2022.jpg",
    d6_img_kaiyukan_2: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Whale_shark_at_the_Osaka_Aquarium_Kaiyukan.jpg",
    d6_img_kaiyukan_3: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Jellyfish_in_Kaiyukan.jpg",
    d6_link_to_bonhostel_route: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=BON+Hostel+Osaka&travelmode=transit",
    d6_img_bonhostel: "https://pix8.agoda.net/hotelImages/5092789/0/0411a73e51d95f878a83279155737d95.jpg", // BON Hostel (來源: Agoda)
    d6_img_denden_town: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nipponbashi-Denden-Town.jpg",
    d6_img_dotonbori: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Dotonbori_Street_in_Osaka_at_night_2019_B.jpg",
    d6_img_glico: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Glico_Man_sign_at_night%2C_Dotonbori%2C_Osaka.jpg",

    // --- DAY 7 ---
    d7_link_to_kyoto_route: "https://www.google.com/maps/dir/?api=1&origin=Namba+Station&destination=Kyoto+Station&travelmode=transit",
    d7_link_fushimiinari_map: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha",
    d7_img_fushimiinari_1: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Fushimi_Inari-taisha_shrine_in_Kyoto.jpg",
    d7_img_fushimiinari_2: "https://upload.wikimedia.org/wikipedia/commons/3/30/Fushimi_Inari_Taisha_torii_2023-05.jpg",
    d7_img_fushimiinari_3: "https://www.japan-guide.com/g18/6915_05.jpg",
    d7_link_nara_map: "https://www.google.com/maps/search/?api=1&query=Nara+Park",
    d7_img_nara_1: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sika_deer_in_Nara_Park_in_a_row.jpg",
    d7_img_nara_2: "https://upload.wikimedia.org/wikipedia/commons/5/56/Todaiji_Temple_and_the_Great_Buddha_Hall_Nara_2017.jpg",
    d7_img_nara_3: "https://upload.wikimedia.org/wikipedia/commons/2/21/Great_Buddha_of_T%C5%8Ddai-ji_in_May_2019.jpg",
    d7_link_kyotohotel_map: "https://www.google.com/maps/search/?api=1&query=LOISIR+HOTEL+KYOTO+TOJI",
    d7_img_kyotohotel: "https://pix8.agoda.net/hotelImages/11263592/0/37a4c0a5270119e5904de22e379417cc.jpg", // LOISIR HOTEL KYOTO TOJI (來源: Agoda)

    // --- DAY 8 ---
    d8_img_kiyomizu_1: "https://upload.wikimedia.org/wikipedia/commons/4/42/Kiyomizu-dera_Temple_in_Kyoto_Japan_-_Nov_2022.jpg",
    d8_img_kiyomizu_2: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ninenzaka_street_in_Kyoto_Japan.jpg",
    d8_img_kiyomizu_3: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Sannenzaka_-_Kyoto%2C_Japan.jpg",
    d8_link_kiyomizu_route: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera+Temple",
    d8_link_makotoyu_map: "https://www.google.com/maps/search/?api=1&query=Makoto-yu+sento+Kyoto",
    d8_img_makotoyu_1: "https://1010.kyoto/wp-content/uploads/2016/10/IMG_3962.jpg",
    d8_img_makotoyu_2: "https://1010.kyoto/wp-content/uploads/2016/10/IMG_3979.jpg",
    d8_link_to_makotoyu_route: "https://www.google.com/maps/dir/?api=1&origin=Kiyomizu-dera+Temple&destination=Makoto-yu+sento+Kyoto&travelmode=transit",
    d8_link_kyoto_bus_map: "https://www.google.com/maps/search/?api=1&query=JR+Kyoto+Station+Hachijo+Gate+bus+terminal",

    // --- DAY 9 ---
    d9_link_gridshotel_map: "https://www.google.com/maps/search/?api=1&query=Grids+Tokyo+Ueno+Hotel&Hostel",
    d9_img_gridshotel_1: "https://pix8.agoda.net/hotelImages/2200373/0/bd6b44a274531de7e761ed8a90184c7a.jpg", // Grids Tokyo Ueno Hotel (來源: Agoda)
    d9_img_gridshotel_2: "https://pix8.agoda.net/hotelImages/2200373/0/007323b6af192b1563f69aa6f4770f5e.jpg", // Grids Tokyo Ueno Hotel (來源: Agoda)
    d9_img_gridshotel_3: "https://pix8.agoda.net/hotelImages/2200373/0/4901f4095724fd5f403c945bda0d8f08.jpg", // Grids Tokyo Ueno Hotel (來源: Agoda)
    d9_img_ameyoko_1: "https://www.japan-guide.com/g18/3020_01.jpg",
    d9_img_ameyoko_2: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ameya_Yokocho_at_night_2.jpg",
    d9_img_ueno_park_1: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ueno_Park_in_autumn_-_October_2018.jpg",
    d9_img_ueno_park_2: "https://www.tokyo-park.or.jp/special/shinobazunoike/images/main_visual_pc.jpg",

    // --- DAY 10 ---
    d10_link_to_hakone_route: "https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Hakone-Yumoto+Station&travelmode=transit",
    d10_link_owakudani_map: "https://www.google.com/maps/search/?api=1&query=Owakudani",
    d10_img_owakudani_1: "https://upload.wikimedia.org/wikipedia/commons/e/e4/%C5%8Cwakudani_valley_01.jpg",
    d10_img_owakudani_2: "https://upload.wikimedia.org/wikipedia/commons/7/77/Hakone_Ropeway_and_Mount_Fuji_2021.jpg",
    d10_img_owakudani_3: "https://www.japan-guide.com/g18/3817_01.jpg",
    d10_link_ashinoko_map: "https://www.google.com/maps/search/?api=1&query=Lake+Ashi",
    d10_img_pirate_ship_1: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hakone_Sightseeing_Cruise_and_Mount_Fuji_01.jpg",
    d10_img_pirate_ship_2: "https://www.japan-guide.com/g18/3850_01.jpg",
    d10_link_hakone_shrine_map: "https://www.google.com/maps/search/?api=1&query=Hakone+Shrine",
    d10_img_hakone_shrine_1: "https://hakonejinja.or.jp/wp-content/themes/hakonejinja/assets/images/about/img_intro_01.jpg",
    d10_img_hakone_shrine_2: "https://upload.wikimedia.org/wikipedia/commons/7/75/Hakone_Jinja_Heiwa-no-Torii_2023-05-1.jpg",

    // --- DAY 11 ---
    d11_link_ueno_locker_map: "https://www.google.com/maps/search/?api=1&query=coin+lockers+Ueno+Station",
    d11_img_ameyoko_1: "https://www.japan-guide.com/g18/3020_01.jpg",
    d11_img_ameyoko_2: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ameya-yokocho_2019_10.jpg",
    d11_link_to_rakuspa_route: "https://www.google.com/maps/dir/?api=1&origin=Ueno+Station&destination=RAKU+SPA+1010+Kanda&travelmode=transit",
    d11_img_rakuspa: "https://www.rakuspa.com/kanda/img/top/main_img02.jpg",
    d11_link_to_airport_route: "https://www.google.com/maps/dir/?api=1&origin=Keisei-Ueno+Station&destination=Narita+Airport+Terminal+2&travelmode=transit",
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
            img.onload = () => {
                img.style.backgroundColor = 'transparent'; // 載入成功後移除背景色
            };
            img.onerror = () => {
                img.style.display = 'none'; // 載入失敗則隱藏
            };
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
