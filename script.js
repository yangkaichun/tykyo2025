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
    d1_img_scoot_plane: "https://cdn.flyscoot.com/prod/images/default-source/embraer-2024/embraer-e190-e2.jpg?sfvrsn=6e80a7e2_1",
    d1_img_scoot_cabin: "https://www.mainlymiles.com/wp-content/uploads/2021/08/scoot-a321neo-cabin.jpg",
    d1_img_skyliner: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/assets/images/skyliner/index/photo_skyliner.jpg",
    d1_link_skyliner_route: "https://www.google.com/maps/dir/?api=1&origin=Narita+Airport+Terminal+2&destination=Keisei-Ueno+Station&travelmode=transit",
    d1_link_hotel_map: "https://www.google.com/maps/search/?api=1&query=Hotel+Crown+Hills+Ueno+Premier",
    d1_img_hotel_exterior: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/484158061.jpg?k=52458032cb4101e40a7a0b8a436575a7c2e353b364c6b8f3a3f5b721e064e62a&o=",
    d1_img_hotel_room: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/509423340.jpg?k=1418f4a3313936270b3b429d2f2b3b75f284e6f47f20543e4905304b4c194b3c&o=",
    d1_img_hotel_view: "https://img.travel.rakuten.co.jp/share/HOTEL/183057/183057.jpg",

    // --- DAY 2 ---
    d2_link_harrypotter_map: "https://www.google.com/maps/search/?api=1&query=Warner+Bros.+Studio+Tour+Tokyo+-+The+Making+of+Harry+Potter",
    d2_link_to_harrypotter_route: "https://www.google.com/maps/dir/?api=1&origin=Ueno-okachimachi+Station&destination=Toshimaen+Station&travelmode=transit",
    d2_img_oedo_line: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Toei_12-600_series_EMU_04.jpg",
    d2_img_hp_entrance: "https://youneed.jp/wp-content/uploads/2023/07/20230713_02.jpg",
    d2_img_hp_hall: "https://www.gotokyo.org/jp/spot/editor/images/230626_01.jpg",
    d2_img_hp_scene: "https://static.gltjp.com/glt/data/article/21000/20324/20230830_022836_e75d9fe6_w1920.webp",
    d2_img_sunshine_aqua: "https://sunshinecity.jp/file/aquarium/official/images/og_image.jpg",
    d2_img_sunshine_show: "https://rimage.gnst.jp/livejapan.com/public/img/spot/lj/00/00/lj0000615/lj0000615_5ef5912ed72ed_main.jpg?20230606090615&q=80&rw=684&rh=684",
    d2_img_sunshine_jellyfish: "https://sunshinecity.jp/file/aquarium/area/images/img_kurage.jpg",
    d2_link_to_ikebukuro_route: "https://www.google.com/maps/dir/?api=1&origin=Toshimaen+Station&destination=Ikebukuro+Station&travelmode=transit",
   
    // --- DAY 3 ---
    d3_link_teamlab_map: "https://www.google.com/maps/search/?api=1&query=teamLab+Planets+TOKYO+DMM",
    d3_img_teamlab_1: "https://planets.teamlab.art/images/art/infinite_crystal_universe_01_planets.jpg",
    d3_img_teamlab_2: "https://planets.teamlab.art/images/art/floating-in-the-falling-universe-of-flowers_01_planets.jpg",
    d3_img_teamlab_3: "https://planets.teamlab.art/images/art/drawing-on-the-water-surface_01_planets.jpg",
    d3_link_lalaport_map: "https://www.google.com/maps/search/?api=1&query=LaLaport+TOYOSU",
    d3_img_lalaport_1: "https://mitsui-shopping-park.com/lalaport/toyosu/asset/images/og.jpg",
    d3_img_lalaport_2: "https://www.gotokyo.org/jp/spot/52/images/4569_1_1400x1119.jpg",
    d3_link_skytree_map: "https://www.google.com/maps/search/?api=1&query=Tokyo+Skytree",
    d3_img_skytree_1: "https://www.japan-guide.com/g18/3064_01.jpg",
    d3_img_skytree_2: "https://upload.wikimedia.org/wikipedia/commons/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg",
    d3_img_skytree_3: "https://www.tokyo-solamachi.jp/en/assets/images/common/img_ogp.jpg",
    d3_img_pokemon_skytree: "https://www.pokemon.co.jp/shop/pokecen/skytreetown/images/main_visual.jpg",

    // --- DAY 4 ---
    d4_link_tokyo_locker_map: "https://www.google.com/maps/search/?api=1&query=coin+lockers+Tokyo+Station",
    d4_link_odaiba_map: "https://www.google.com/maps/search/?api=1&query=Odaiba+Tokyo",
    d4_img_gundam_1: "https://www.tokyo-odaiba.net/media/unicorn-gundam/main.jpg",
    d4_img_gundam_2: "https://www.unicorn-gundam-statue.jp/wordpress/wp-content/themes/unicorn-gundam-statue/assets/images/img_slider_03.jpg",
    d4_img_gundam_3: "https://www.unicorn-gundam-statue.jp/wordpress/wp-content/themes/unicorn-gundam-statue/assets/images/img_slider_06.jpg",
    d4_link_rakuspa_map: "https://www.google.com/maps/search/?api=1&query=RAKU+SPA+1010+Kanda",
    d4_img_rakuspa_1: "https://www.rakuspa.com/kanda/img/top/main_img02.jpg",
    d4_img_rakuspa_2: "https://www.rakuspa.com/kanda/img/floor/floor_4f.jpg",
    d4_link_to_rakuspa_route: "https://www.google.com/maps/dir/?api=1&origin=Daiba+Station&destination=RAKU+SPA+1010+Kanda&travelmode=transit",
    d4_link_yaesu_bus_map: "https://www.google.com/maps/search/?api=1&query=Bus+Terminal+Tokyo+Yaesu",
    d4_img_nightbus: "https://bus.willerexpress.co.jp/assets/img/bus/reborn/common/main_01_a.jpg",
    d4_img_yaesu_midtown: "https://www.tokyomidtown-yaesu.jp/en/assets/images/common/img_ogp.jpg",

    // --- DAY 5 ---
    d5_link_to_usjhotel_route: "https://www.google.com/maps/dir/?api=1&origin=WILLER+Bus+Stop+Universal+Studios+Japan&destination=The+Park+Front+Hotel+at+Universal+Studios+Japan&travelmode=walking",
    d5_link_usj_map: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan",
    d5_img_usj_1: "https://www.usj.co.jp/web/ja/jp/assets/images/common/og_image.png",
    d5_img_usj_2: "https://www.usj.co.jp/web/ja/jp/areas/super-nintendo-world/assets/images/common/og_image.png",
    d5_img_usj_3: "https://www.usj.co.jp/web/ja/jp/areas/the-wizarding-world-of-harry-potter/assets/images/common/og_image.png",
    d5_link_usjhotel_map: "https://www.google.com/maps/search/?api=1&query=The+Park+Front+Hotel+at+Universal+Studios+Japan",
    d5_img_usjhotel_1: "https://www.parkfront-hotel.com/assets/images/about/og_image.jpg",
    d5_img_usjhotel_2: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/497673551.jpg?k=3f86e492212f4625b65f24d77764d88e0b48a032d88001150424534f593b4e72&o=",
    d5_img_usjhotel_3: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/220268571.jpg?k=9587424fb80ac7b3d3ab1078ce09f2910d540306141a0e14d10f2142e88a07c3&o=",

    // --- DAY 6 ---
    d6_link_captain_line_route: "https://www.google.com/maps/dir/?api=1&origin=Universal+City+Port&destination=Kaiyukan+West+Wharf&travelmode=transit",
    d6_img_captain_line: "https://www.mmjp.or.jp/captain-line/img/top/img-sea-sp.jpg",
    d6_img_kaiyukan_1: "https://www.kaiyukan.com/img/ogp.jpg",
    d6_img_kaiyukan_2: "https://www.kaiyukan.com/connect/enjoy/images/img_point-learn_01.jpg",
    d6_img_kaiyukan_3: "https://www.kaiyukan.com/connect/enjoy/images/img_point-feel_02.jpg",
    d6_link_to_bonhostel_route: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=BON+Hostel+Osaka&travelmode=transit",
    d6_img_bonhostel: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/171507978.jpg?k=acb9c3f0c3f0bb2e70e9d407ff58782d49574f260341e98d9d288d0115371cc2&o=",
    d6_img_denden_town: "https://osaka-info.jp/page/wp-content/uploads/2022/01/spot_main_den-den-town.jpg",
    d6_img_dotonbori: "https://osaka-info.jp/page/wp-content/uploads/2022/01/spot_main_dotonbori.jpg",
    d6_img_glico: "https://osaka-info.jp/page/wp-content/uploads/2022/01/spot_main_dotonbori-ebisubashi-bridge.jpg",

    // --- DAY 7 ---
    d7_link_to_kyoto_route: "https://www.google.com/maps/dir/?api=1&origin=Namba+Station&destination=Kyoto+Station&travelmode=transit",
    d7_link_fushimiinari_map: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha",
    d7_img_fushimiinari_1: "https://inari.jp/wp/wp-content/themes/inari/img/about/img_intro01.jpg",
    d7_img_fushimiinari_2: "https://inari.jp/wp/wp-content/themes/inari/img/about/img_intro02.jpg",
    d7_img_fushimiinari_3: "https://inari.jp/wp/wp-content/themes/inari/img/about/img_intro03.jpg",
    d7_link_nara_map: "https://www.google.com/maps/search/?api=1&query=Nara+Park",
    d7_img_nara_1: "https://narashikanko.or.jp/wp-content/uploads/2021/11/img_spot_narapark-01-2.jpg",
    d7_img_nara_2: "https://www.todaiji.or.jp/information/images/img_daibutsuden01.jpg",
    d7_img_nara_3: "https://www.todaiji.or.jp/information/images/img_daibutsu01.jpg",
    d7_link_kyotohotel_map: "https://www.google.com/maps/search/?api=1&query=LOISIR+HOTEL+KYOTO+TOJI",
    d7_img_kyotohotel: "https://www.solarehotels.com/hotel/kinki/loisir-kyototoji/img/main.jpg",

    // --- DAY 8 ---
    d8_img_kiyomizu_1: "https://www.kiyomizudera.or.jp/wordpress/wp-content/uploads/2021/04/HERO_IMG_SP.jpg",
    d8_img_kiyomizu_2: "https://media.cntraveler.com/photos/5b9183d2530182553b4d455d/16:9/w_2560,c_limit/Ninenzaka_GettyImages-643509936.jpg",
    d8_img_kiyomizu_3: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sannenzaka_in_snow_20230125.jpg",
    d8_link_kiyomizu_route: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera+Temple",
    d8_link_makotoyu_map: "https://www.google.com/maps/search/?api=1&query=Makoto-yu+sento+Kyoto",
    d8_img_makotoyu_1: "https://1010.kyoto/wp-content/uploads/2016/10/IMG_3962.jpg",
    d8_img_makotoyu_2: "https://1010.kyoto/wp-content/uploads/2016/10/IMG_3979.jpg",
    d8_link_to_makotoyu_route: "https://www.google.com/maps/dir/?api=1&origin=Kiyomizu-dera+Temple&destination=Makoto-yu+sento+Kyoto&travelmode=transit",
    d8_link_kyoto_bus_map: "https://www.google.com/maps/search/?api=1&query=JR+Kyoto+Station+Hachijo+Gate+bus+terminal",

    // --- DAY 9 ---
    d9_link_gridshotel_map: "https://www.google.com/maps/search/?api=1&query=Grids+Tokyo+Ueno+Hotel&Hostel",
    d9_img_gridshotel_1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221261208.jpg",
    d9_img_gridshotel_2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/562679711.jpg",
    d9_img_gridshotel_3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325904139.jpg",
    d9_img_ameyoko_1: "https://static.gltjp.com/glt/data/article/21000/20604/20240127_171051_3ed959f4_w1920.webp",
    d9_img_ameyoko_2: "https://www.gotokyo.org/jp/spot/47/images/3034_1_1400x1119.jpg",
    d9_img_ueno_park_1: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ueno_Park_in_autumn_-_October_2018.jpg",
    d9_img_ueno_park_2: "https://www.tokyo-park.or.jp/special/shinobazunoike/images/main_visual_pc.jpg",

    // --- DAY 10 ---
    d10_link_to_hakone_route: "https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Hakone-Yumoto+Station&travelmode=transit",
    d10_link_owakudani_map: "https://www.google.com/maps/search/?api=1&query=Owakudani",
    d10_img_owakudani_1: "https://www.kanagawa-kankou.or.jp/image/1004/1004_c1_2_1.jpg",
    d10_img_owakudani_2: "https://www.hakonenavi.jp/wp-content/uploads/2021/04/owakudani_main.jpg",
    d10_img_owakudani_3: "https://www.hakoneropeway.co.jp/wp/wp-content/themes/ropeway/assets/images/owakudani/feature/bg_01.jpg",
    d10_link_ashinoko_map: "https://www.google.com/maps/search/?api=1&query=Lake+Ashi",
    d10_img_pirate_ship_1: "https://www.hakone-kankosen.co.jp/foreign/ch/img/home/main_img_01.jpg",
    d10_img_pirate_ship_2: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/s6wfbzqw7y2i51xupqf5/HakoneSightseeingCruise.jpg",
    d10_link_hakone_shrine_map: "https://www.google.com/maps/search/?api=1&query=Hakone+Shrine",
    d10_img_hakone_shrine_1: "https://hakonejinja.or.jp/wp-content/themes/hakonejinja/assets/images/about/img_intro_01.jpg",
    d10_img_hakone_shrine_2: "https://hakonejinja.or.jp/wp-content/themes/hakonejinja/assets/images/about/img_intro_04.jpg",

    // --- DAY 11 ---
    d11_link_ueno_locker_map: "https://www.google.com/maps/search/?api=1&query=coin+lockers+Ueno+Station",
    d11_img_ameyoko_1: "https://static.gltjp.com/glt/data/article/21000/20604/20240127_171051_3ed959f4_w1920.webp",
    d11_img_ameyoko_2: "https://www.japan-guide.com/g18/3020_01.jpg",
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
