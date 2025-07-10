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
    d1_img_scoot_plane: "https://cdn.flyscoot.com/prod/images/default-source/embraer-2024/embraer-e190-e2.jpg?sfvrsn=6e80a7e2_1", // D1: 酷航客機的圖片連結
    d1_img_scoot_cabin: "https://www.mainlymiles.com/wp-content/uploads/2021/08/scoot-a321neo-cabin.jpg", // D1: 酷航機艙內部的圖片連結
    d1_img_skyliner: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/assets/images/skyliner/index/photo_skyliner.jpg", // D1: 京成Skyliner列車的圖片連結
    d1_link_skyliner_route: "https://www.google.com/maps/dir/Narita+Airport+Terminal+1,+1-1+Furugome,+Narita,+Chiba+282-0004,+Japan/Keisei-Ueno+Station,+1+Uenokoen,+Taito+City,+Tokyo+110-0007,+Japan/@35.786961,139.924874,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6022f16143b85351:0x4465b84318c4e43b!2m2!1d140.3928501!2d35.771987!1m5!1m1!1s0x60188e9d1be25c87:0x228766522df1867c!2m2!1d139.7770119!2d35.7107739!3e3?entry=ttu", // D1: 從成田機場到上野的Skyliner路線規劃連結
    d1_link_hotel_map: "https://www.google.com/maps/place/HOTEL+CROWN+HILLS+UENO+PREMIER/@35.707764,139.775218,17z/data=!3m1!4b1!4m9!3m8!1s0x60188e9944321975:0xb633e696662768e8!5m2!4m1!1i2!8m2!3d35.707764!4d139.775218!16s%2Fg%2F11b6dxwx3r?entry=ttu", // D1: 上野皇冠山丘酒店的Google Maps位置連結
    d1_img_hotel_exterior: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/484158061.jpg?k=52458032cb4101e40a7a0b8a436575a7c2e353b364c6b8f3a3f5b721e064e62a&o=", // D1: 飯店外觀的圖片連結
    d1_img_hotel_room: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/509423340.jpg?k=1418f4a3313936270b3b429d2f2b3b75f284e6f47f20543e4905304b4c194b3c&o=", // D1: 飯店房間的圖片連結
    d1_img_hotel_view: "https://i0.wp.com/yfl-kelvin.com/wp-content/uploads/2023/04/20230302_091114466_iOS.jpg", // D1: 飯店窗景的圖片連結

    // --- DAY 2 ---
    d2_link_harrypotter_map: "https://www.google.com/maps/place/Warner+Bros.+Studio+Tour+Tokyo+%E2%80%93+The+Making+of+Harry+Potter/@35.7865213,139.6105809,17z/data=!3m1!4b1!4m6!3m5!1s0x6018eb7a7164b383:0x36a5a22534573138!8m2!3d35.786517!4d139.6131558!16s%2Fg%2F11h__t29m?entry=ttu", // D2: 哈利波特影城的Google Maps位置連結
    d2_link_to_harrypotter_route: "https://www.google.com/maps/dir/Ueno-okachimachi+Sta.,+Ueno,+Taito+City,+Tokyo,+Japan/Warner+Bros.+Studio+Tour+Tokyo+%E2%80%93+The+Making+of+Harry+Potter,+1-ch%C5%8Dme-1-7+Kasugach%C5%8D,+Nerima+City,+Tokyo+179-0074,+Japan/@35.751144,139.6053335,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x60188e9936730591:0xd3300f2849b2875e!2m2!1d139.7753443!2d35.7081702!1m5!1m1!1s0x6018eb7a7164b383:0x36a5a22534573138!2m2!1d139.6131558!2d35.786517!3e3?entry=ttu", // D2: 前往哈利波特影城的路線規劃連結
    d2_img_oedo_line: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Toei_12-600_series_EMU_04.jpg", // D2: 都營大江戶線列車的圖片連結
    d2_img_hp_entrance: "https://youneed.jp/wp-content/uploads/2023/07/20230713_02.jpg", // D2: 哈利波特影城入口的圖片連結
    d2_img_hp_hall: "https://www.gotokyo.org/jp/spot/editor/images/230626_01.jpg", // D2: 霍格華茲大廳的圖片連結
    d2_img_hp_scene: "https://static.gltjp.com/glt/data/article/21000/20324/20230830_022836_e75d9fe6_w1920.webp", // D2: 影城內魔法場景的圖片連結
    d2_img_sunshine_aqua: "https://sunshinecity.jp/file/aquarium/official/images/og_image.jpg", // D2: 池袋陽光水族館的圖片連結
    d2_img_sunshine_show: "https://rimage.gnst.jp/livejapan.com/public/img/spot/lj/00/00/lj0000615/lj0000615_5ef5912ed72ed_main.jpg?20230606090615&q=80&rw=684&rh=684", // D2: 水族館表演的圖片連結
    d2_img_sunshine_jellyfish: "https://haveagood.holiday/hagh/cms/original_images/000/000/554/486/original_image.jpg?1582218000", // D2: 水族館水母區的圖片連結
    d2_link_to_ikebukuro_route: "https://www.google.com/maps/dir/Warner+Bros.+Studio+Tour+Tokyo+%E2%80%93+The+Making+of+Harry+Potter,+1-ch%C5%8Dme-1-7+Kasugach%C5%8D,+Nerima+City,+Tokyo+179-0074,+Japan/Sunshine+City,+3-ch%C5%8Dme-1+Higashiikebukuro,+Toshima+City,+Tokyo+170-0013,+Japan/@35.7580668,139.6083168,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6018eb7a7164b383:0x36a5a22534573138!2m2!1d139.6131558!2d35.786517!1m5!1m1!1s0x60188d6e386d2a7d:0x33b4a22238421c67!2m2!1d139.7188182!2d35.7291136!3e3?entry=ttu", // D2: 前往池袋的路線規劃連結
    
    // --- DAY 3 ---
    d3_link_teamlab_map: "https://www.google.com/maps/place/teamLab+Planets+TOKYO+DMM/@35.6493245,139.7946927,17z/data=!3m2!4b1!5s0x6018897cba16c353:0xb185a864389945a6!4m6!3m5!1s0x6018897cbb650f9d:0x3b1ac04b59526f25!8m2!3d35.6493202!4d139.7972676!16s%2Fg%2F11f71587lg?entry=ttu", // D3: teamLab Planets的Google Maps位置連結
    d3_img_teamlab_1: "https://planets.teamlab.art/images/art/infinite_crystal_universe_01_planets.jpg", // D3: teamLab場景圖片1
    d3_img_teamlab_2: "https://planets.teamlab.art/images/art/floating-in-the-falling-universe-of-flowers_01_planets.jpg", // D3: teamLab場景圖片2
    d3_img_teamlab_3: "https://planets.teamlab.art/images/art/drawing-on-the-water-surface_01_planets.jpg", // D3: teamLab場景圖片3
    d3_link_lalaport_map: "https://www.google.com/maps/place/Mitsui+Shopping+Park+Urban+Dock+LaLaport+TOYOSU/@35.656209,139.7950794,17z/data=!3m1!4b1!4m6!3m5!1s0x6018897985489809:0x8385203333f07a51!8m2!3d35.6562047!4d139.7976543!16s%2Fg%2F121096hm?entry=ttu", // D3: 豐洲LaLaport的Google Maps位置連結
    d3_img_lalaport_1: "https://ke-community.jp/data/spot/7440/logo.jpg?1676615591", // D3: LaLaport商場圖片1
    d3_img_lalaport_2: "https://www.gotokyo.org/jp/spot/52/images/4569_1_1400x1119.jpg", // D3: LaLaport商場圖片2
    d3_link_skytree_map: "https://www.google.com/maps/place/Tokyo+Skytree/@35.7100348,139.8082489,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100305!4d139.8108238!16zL20vMGJyMmt0?entry=ttu", // D3: 東京晴空塔的Google Maps位置連結
    d3_img_skytree_1: "https://www.japan-guide.com/g18/3064_01.jpg", // D3: 晴空塔圖片1
    d3_img_skytree_2: "https://upload.wikimedia.org/wikipedia/commons/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg", // D3: 晴空塔圖片2
    d3_img_skytree_3: "https://www.tokyo-solamachi.jp/en/assets/images/common/img_ogp.jpg", // D3: 晴空塔圖片3 (Solamachi視角)
    d3_img_pokemon_skytree: "https://www.pokemon.co.jp/shop/pokecen/skytreetown/images/main_visual.jpg", // D3: 晴空塔寶可夢中心的圖片連結

    // --- DAY 4 ---
    d4_link_tokyo_locker_map: "https://www.google.com/maps/search/coin+lockers+at+tokyo+station/@35.6812405,139.7649361,17z/data=!3m1!4b1?entry=ttu", // D4: 東京車站置物櫃的Google Maps位置連結
    d4_link_odaiba_map: "https://www.google.com/maps/place/Odaiba/@35.6247073,139.7628892,14z/data=!3m1!4b1!4m6!3m5!1s0x601889f77ab4b49f:0x8052d43997b6a48!8m2!3d35.6304523!4d139.7766904!16zL20vMDF3eXJj?entry=ttu", // D4: 台場的Google Maps位置連結
    d4_img_gundam_1: "https://www.tokyo-odaiba.net/media/unicorn-gundam/main.jpg", // D4: 獨角獸鋼彈圖片1
    d4_img_gundam_2: "https://www.unicorn-gundam-statue.jp/wordpress/wp-content/themes/unicorn-gundam-statue/assets/images/img_slider_03.jpg", // D4: 獨角獸鋼彈圖片2
    d4_img_gundam_3: "https://www.unicorn-gundam-statue.jp/wordpress/wp-content/themes/unicorn-gundam-statue/assets/images/img_slider_06.jpg", // D4: 獨角獸鋼彈圖片3
    d4_link_rakuspa_map: "https://www.google.com/maps/place/RAKU+SPA+1010+Kanda/@35.6983796,139.7719629,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1c448d3753:0x1b1422b40ba7b296!8m2!3d35.6983753!4d139.7745378!16s%2Fg%2F11hc_4qwr9?entry=ttu", // D4: RAKU SPA 1010 神田的Google Maps位置連結
    d4_img_rakuspa_1: "https://www.rakuspa.com/kanda/img/top/main_img02.jpg", // D4: RAKU SPA圖片1
    d4_img_rakuspa_2: "https://www.rakuspa.com/kanda/img/floor/floor_4f.jpg", // D4: RAKU SPA圖片2
    d4_link_to_rakuspa_route: "https://www.google.com/maps/dir/Daiba+Station,+2-chome+Daiba,+Minato+City,+Tokyo,+Japan/RAKU+SPA+1010+Kanda,+Kanda+Awajicho,+Chiyoda+City,+Tokyo,+Japan/@35.6601458,139.728952,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x601889fa4e27149f:0x57f329583b3e213c!2m2!1d139.776774!2d35.6253459!1m5!1m1!1s0x60188c1c448d3753:0x1b1422b40ba7b296!2m2!1d139.7745378!2d35.6983753!3e3?entry=ttu", // D4: 從台場前往RAKU SPA的路線規劃連結
    d4_link_yaesu_bus_map: "https://www.google.com/maps/place/Bus+Terminal+Tokyo+Yaesu/@35.678942,139.7672233,17z/data=!3m2!4b1!5s0x60188bfd11451e7b:0x8797b5e43a9b9a67!4m6!3m5!1s0x60188bfd11451f01:0xd3e73b27b587d19!8m2!3d35.6789377!4d139.7697982!16s%2Fg%2F11nn9z7r_d?entry=ttu", // D4: 東京八重洲巴士總站的Google Maps位置連結
    d4_img_nightbus: "https://bus.willerexpress.co.jp/assets/img/bus/reborn/common/main_01_a.jpg", // D4: WILLER夜間巴士的圖片連結
    d4_img_yaesu_midtown: "https://www.tokyomidtown-yaesu.jp/en/assets/images/common/img_ogp.jpg", // D4: 東京中城八重洲的圖片連結

    // --- DAY 5 ---
    d5_link_to_usjhotel_route: "https://www.google.com/maps/dir/Osaka+Station,+3-ch%C5%8Dme-1-1+Umeda,+Kita+Ward,+Osaka,+530-0001,+Japan/The+Park+Front+Hotel+at+Universal+Studios+Japan,+6-ch%C5%8Dme-2-52+Shimaya,+Konohana+Ward,+Osaka,+554-0024,+Japan/@34.6828237,135.4286107,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e68d95e3a70b:0xf95372f2d11bdc4d!2m2!1d135.4959506!2d34.7024854!1m5!1m1!1s0x6000e840f0c030c7:0x10557452e847c21e!2m2!1d135.4402633!2d34.666014!3e3?entry=ttu", // D5: 從巴士站到The Park Front Hotel的路線連結
    d5_link_usj_map: "https://www.google.com/maps/place/Universal+Studios+Japan/@34.665392,135.4299879,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e8c255aaaaab:0x8684fca3678b868e!8m2!3d34.6653876!4d135.4325628!16zL20vMDFrMGQ?entry=ttu", // D5: 日本環球影城的Google Maps位置連結
    d5_img_usj_1: "https://www.usj.co.jp/web/ja/jp/assets/images/common/og_image.png", // D5: USJ圖片1
    d5_img_usj_2: "https://www.usj.co.jp/web/ja/jp/areas/super-nintendo-world/assets/images/common/og_image.png", // D5: USJ圖片2
    d5_img_usj_3: "https://www.usj.co.jp/web/ja/jp/areas/the-wizarding-world-of-harry-potter/assets/images/common/og_image.png", // D5: USJ圖片3
    d5_link_usjhotel_map: "https://www.google.com/maps/place/The+Park+Front+Hotel+at+Universal+Studios+Japan/@34.6660184,135.4376884,17z/data=!3m1!4b1!4m9!3m8!1s0x6000e840f0c030c7:0x10557452e847c21e!5m2!4m1!1i2!8m2!3d34.666014!4d135.4402633!16s%2Fg%2F11btbwpl92?entry=ttu", // D5: The Park Front Hotel的Google Maps位置連結
    d5_img_usjhotel_1: "https://www.parkfront-hotel.com/assets/images/about/og_image.jpg", // D5: 飯店圖片1
    d5_img_usjhotel_2: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/497673551.jpg?k=3f86e492212f4625b65f24d77764d88e0b48a032d88001150424534f593b4e72&o=", // D5: 飯店圖片2
    d5_img_usjhotel_3: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/220268571.jpg?k=9587424fb80ac7b3d3ab1078ce09f2910d540306141a0e14d10f2142e88a07c3&o=", // D5: 飯店圖片3

    // --- DAY 6 ---
    d6_link_captain_line_route: "https://www.google.com/maps/dir/Universal+City+Port,+2-chome+Sakurajima,+Konohana+Ward,+Osaka/Kaiyukan+West+Pier,+Chikko,+Minato+Ward,+Osaka/@34.6601435,135.4338988,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x6000e84013143c7b:0xe4a4087e8326e0bd!2m2!1d135.4404313!2d34.6645601!1m5!1m1!1s0x6000e80e92716075:0x5e2978f844f23e85!2m2!1d135.4300302!2d34.6559792?entry=ttu", // D6: 船長線的路線規劃連結
    d6_img_captain_line: "https://www.mmjp.or.jp/captain-line/img/top/img-sea-sp.jpg", // D6: 船長線渡輪的圖片連結
    d6_img_kaiyukan_1: "https://www.kaiyukan.com/img/ogp.jpg", // D6: 大阪海遊館圖片1
    d6_img_kaiyukan_2: "https://www.kaiyukan.com/connect/enjoy/images/img_point-learn_01.jpg", // D6: 大阪海遊館圖片2
    d6_img_kaiyukan_3: "https://www.kaiyukan.com/connect/enjoy/images/img_point-feel_02.jpg", // D6: 大阪海遊館圖片3
    d6_link_to_bonhostel_route: "https://www.google.com/maps/dir/Osaka+Aquarium+Kaiyukan,+1-ch%C5%8Dme-1-10+Kaikandori,+Minato+Ward,+Osaka,+552-0022,+Japan/BON+Hostel,+1-ch%C5%8Dme-4-13+Motomachi,+Naniwa+Ward,+Osaka,+556-0016,+Japan/@34.6616086,135.4475442,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e80efb3236e7:0x50f491c330561579!2m2!1d135.4289899!2d34.6548542!1m5!1m1!1s0x6000e768dd627c03:0x4d528b15d9a9301!2m2!1d135.5015942!2d34.665793!3e3?entry=ttu", // D6: 前往BON Hostel的路線規劃連結
    d6_img_bonhostel: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/171507978.jpg?k=acb9c3f0c3f0bb2e70e9d407ff58782d49574f260341e98d9d288d0115371cc2&o=", // D6: BON Hostel的圖片連結
    d6_img_denden_town: "https://osaka-info.jp/page/wp-content/uploads/2022/01/spot_main_den-den-town.jpg", // D6: 日本橋電電城的圖片連結
    d6_img_dotonbori: "https://osaka-info.jp/page/wp-content/uploads/2022/01/spot_main_dotonbori.jpg", // D6: 道頓堀的圖片連結
    d6_img_glico: "https://live.staticflickr.com/65535/53434605915_b3d58852e1_b.jpg", // D6: 固力果跑跑人的圖片連結

    // --- DAY 7 ---
    d7_link_to_kyoto_route: "https://www.google.com/maps/dir/Osaka-Namba+Station,+3-ch%C5%8Dme-4-36+Namba,+Chuo+Ward,+Osaka,+542-0076,+Japan/Kyoto+Station,+Higashishiokoji+Kamadonocho,+Shimogyo+Ward,+Kyoto,+Japan/@34.8361895,135.5390919,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e7691243306d:0x889419134a656a31!2m2!1d135.501162!2d34.666498!1m5!1m1!1s0x600108ae918b02ef:0xb61a446e72a22ae2!2m2!1d135.7584667!2d34.985849!3e3?entry=ttu", // D7: 從大阪前往京都車站的路線規劃連結
    d7_link_fushimiinari_map: "https://www.google.com/maps/place/Fushimi+Inari+Taisha/@34.9671401,135.770327,17z/data=!3m1!4b1!4m6!3m5!1s0x60010f153d2e054f:0x4b2c14050210d72a!8m2!3d34.9671357!4d135.7729019!16zL20vMDJqYzMy?entry=ttu", // D7: 伏見稻荷大社的Google Maps位置連結
    d7_img_fushimiinari_1: "https://inari.jp/wp/wp-content/themes/inari/img/about/img_intro01.jpg", // D7: 伏見稻荷大社圖片1
    d7_img_fushimiinari_2: "https://inari.jp/wp/wp-content/themes/inari/img/about/img_intro02.jpg", // D7: 伏見稻荷大社圖片2
    d7_img_fushimiinari_3: "https://inari.jp/wp/wp-content/themes/inari/img/about/img_intro03.jpg", // D7: 伏見稻荷大社圖片3
    d7_link_nara_map: "https://www.google.com/maps/place/Nara+Park/@34.6850865,135.8390861,17z/data=!3m1!4b1!4m6!3m5!1s0x6001397dc8182285:0x37667d790d908a73!8m2!3d34.6850821!4d135.841661!16zL20vMDJ2MmM1?entry=ttu", // D7: 奈良公園的Google Maps位置連結
    d7_img_nara_1: "https://narashikanko.or.jp/wp-content/uploads/2021/11/img_spot_narapark-01-2.jpg", // D7: 奈良鹿的圖片連結
    d7_img_nara_2: "https://www.todaiji.or.jp/information/images/img_daibutsuden01.jpg", // D7: 東大寺的圖片連結
    d7_img_nara_3: "https://www.todaiji.or.jp/information/images/img_daibutsu01.jpg", // D7: 東大寺大佛的圖片連結
    d7_link_kyotohotel_map: "https://www.google.com/maps/place/Loisir+Hotel+Kyoto+Toji/@34.9806456,135.7483669,17z/data=!3m1!4b1!4m9!3m8!1s0x6001062088f11b2b:0x51c4a00b67e3ed7b!5m2!4m1!1i2!8m2!3d34.9806412!4d135.7509418!16s%2Fg%2F11sbj936gl?entry=ttu", // D7: LOISIR HOTEL KYOTO TOJI的Google Maps位置連結
    d7_img_kyotohotel: "https://www.solarehotels.com/hotel/kinki/loisir-kyototoji/img/main.jpg", // D7: LOISIR HOTEL的圖片連結

    // --- DAY 8 ---
    d8_img_kiyomizu_1: "https://www.kiyomizudera.or.jp/wordpress/wp-content/uploads/2021/04/HERO_IMG_SP.jpg", // D8: 清水寺圖片1
    d8_img_kiyomizu_2: "https://media.cntraveler.com/photos/5b9183d2530182553b4d455d/16:9/w_2560,c_limit/Ninenzaka_GettyImages-643509936.jpg", // D8: 二年坂的圖片連結
    d8_img_kiyomizu_3: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sannenzaka_in_snow_20230125.jpg", // D8: 三年坂的圖片連結
    d8_link_kiyomizu_route: "https://www.google.com/maps/dir/Kiyomizu-dera+Temple,+1-ch%C5%8Dme-294+Kiyomizu,+Higashiyama+Ward,+Kyoto,+Japan/34.99616,135.77964/Yasaka+Koshindo,+390-1+Kinencho,+Higashiyama+Ward,+Kyoto,+Japan/@34.9972741,135.7758788,17z/data=!3m1!4b1!4m16!4m15!1m5!1m1!1s0x600108d387453307:0x39a99b54b2d1264a!2m2!1d135.7850463!2d34.994857!1m0!1m5!1m1!1s0x600108c14f79a957:0x5538cb4f552b0532!2m2!1d135.7818981!2d35.0000726!3e2?entry=ttu", // D8: 清水寺周邊的散步路線規劃連結
    d8_link_makotoyu_map: "https://www.google.com/maps/place/%E8%AA%A0%E3%81%AE%E6%B9%AF/@34.9892186,135.7570183,17z/data=!3m1!4b1!4m6!3m5!1s0x600108b38a4a5813:0x1b7029584b423f79!8m2!3d34.9892142!4d135.7595932!16s%2Fg%2F1tdr75n1?entry=ttu", // D8: 誠の湯的Google Maps位置連結
    d8_img_makotoyu_1: "https://1010.kyoto/wp-content/uploads/2016/10/IMG_3962.jpg", // D8: 誠の湯圖片1
    d8_img_makotoyu_2: "https://1010.kyoto/wp-content/uploads/2016/10/IMG_3979.jpg", // D8: 誠の湯圖片2
    d8_link_to_makotoyu_route: "https://www.google.com/maps/dir/Kiyomizu-dera,+1-ch%C5%8Dme-294+Kiyomizu,+Higashiyama+Ward,+Kyoto,+Japan/%E8%AA%A0%E3%81%AE%E6%B9%AF,+Moro-cho,+Shimogyo+Ward,+Kyoto,+Japan/@34.9919567,135.7554958,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x600108d387453307:0x39a99b54b2d1264a!2m2!1d135.7850463!2d34.994857!1m5!1m1!1s0x600108b38a4a5813:0x1b7029584b423f79!2m2!1d135.7595932!2d34.9892142!3e3?entry=ttu", // D8: 前往誠の湯的路線規劃連結
    d8_link_kyoto_bus_map: "https://www.google.com/maps/place/Kyoto+Station+Avanti+Mae+Bus+Stop/@34.9847141,135.7584167,18z/data=!3m1!4b1!4m6!3m5!1s0x600108add9a05b21:0x5e089201f9640989!8m2!3d34.9847128!4d135.759453!16s%2Fg%2F11cs58x16h?entry=ttu", // D8: 京都夜間巴士乘車點的Google Maps位置連結

        // --- DAY 9 ---
        d9_link_gridshotel_map: "https://www.google.com/maps/place/Grids+Tokyo+Ueno+Hotel%EF%BC%86Hostel/@35.707764,139.775218,17z/data=!4m12!1m2!2m1!1sGrids+Tokyo+Ueno+Hotel!3m8!1s0x60188e99479b1881:0x4d193d5c5897813b!5m2!4m1!1i2!8m2!3d35.7073335!4d139.7759868!16s%2Fg%2F11j14y9g_1?entry=ttu", // D9: Grids Tokyo Ueno Hotel的Google Maps位置連結
        d9_img_gridshotel_1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221261208.jpg", // D9: 飯店圖片1
        d9_img_gridshotel_2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/562679711.jpg", // D9: 飯店圖片2
        d9_img_gridshotel_3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325904139.jpg", // D9: 飯店圖片3
        d9_img_ameyoko_1: "https://static.gltjp.com/glt/data/article/21000/20604/20240127_171051_3ed959f4_w1920.webp", // D9: 阿美橫丁圖片1
        d9_img_ameyoko_2: "https://www.gotokyo.org/jp/spot/47/images/3034_1_1400x1119.jpg", // D9: 阿美橫丁圖片2
        d9_img_ueno_park_1: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ueno_Park_in_autumn_-_October_2018.jpg", // D9: 上野公園圖片1
        d9_img_ueno_park_2: "https://www.tokyo-park.or.jp/special/shinobazunoike/images/main_visual_pc.jpg", // D9: 不忍池的圖片連結

        // --- DAY 10 ---
        d10_link_to_hakone_route: "https://www.google.com/maps/dir/Keisei-Ueno+Station,+1+Uenokoen,+Taito+City,+Tokyo+110-0007,+Japan/Hakone-Yumoto+Station,+Yumoto,+Hakone,+Ashigarashimo+District,+Kanagawa,+Japan/@35.4740049,139.1171732,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x60188e9d1be25c87:0x228766522df1867c!2m2!1d139.7770119!2d35.7107739!1m5!1m1!1s0x6019a318858f691b:0x50f3b4a2432a210a!2m2!1d139.1027988!2d35.2330678!3e3?entry=ttu", // D10: 前往箱根的路線規劃連結
        d10_link_owakudani_map: "https://www.google.com/maps/place/%C5%8Cwakudani/@35.2427847,139.0185966,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a27c030d8991:0x5e8c743ac23354b2!8m2!3d35.2427803!4d139.0211715!16zL20vMDYxNjlx?entry=ttu", // D10: 大涌谷的Google Maps位置連結
        d10_img_owakudani_1: "https://www.kanagawa-kankou.or.jp/image/1004/1004_c1_2_1.jpg", // D10: 大涌谷圖片1
        d10_img_owakudani_2: "https://www.hakonenavi.jp/wp-content/uploads/2021/04/owakudani_main.jpg", // D10: 箱根纜車與大涌谷的圖片連結
        d10_img_owakudani_3: "https://www.hakoneropeway.co.jp/wp/wp-content/themes/ropeway/assets/images/owakudani/feature/bg_01.jpg", // D10: 大涌谷火山景觀的圖片連結
        d10_link_ashinoko_map: "https://www.google.com/maps/place/Lake+Ashi/@35.2078693,138.9912061,13z/data=!3m1!4b1!4m6!3m5!1s0x6019a16f272a8069:0x22f8721200057053!8m2!3d35.2001399!4d139.0270381!16zL20vMDF3anNs?entry=ttu", // D10: 蘆之湖的Google Maps位置連結
        d10_img_pirate_ship_1: "https://www.hakone-kankosen.co.jp/foreign/ch/img/home/main_img_01.jpg", // D10: 海賊船圖片1
        d10_img_pirate_ship_2: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/s6wfbzqw7y2i51xupqf5/HakoneSightseeingCruise.jpg", // D10: 海賊船圖片2
        d10_link_hakone_shrine_map: "https://www.google.com/maps/place/Hakone+Shrine/@35.2052565,139.0232491,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a168673a0e69:0x5b933a362ae7515!8m2!3d35.2052521!4d139.025824!16zL20vMDYxNjg3?entry=ttu", // D10: 箱根神社的Google Maps位置連結
        d10_img_hakone_shrine_1: "https://hakonejinja.or.jp/wp-content/themes/hakonejinja/assets/images/about/img_intro_01.jpg", // D10: 箱根神社圖片1
        d10_img_hakone_shrine_2: "https://hakonejinja.or.jp/wp-content/themes/hakonejinja/assets/images/about/img_intro_04.jpg", // D10: 平和鳥居的圖片連結

        // --- DAY 11 ---
        d11_link_ueno_locker_map: "https://www.google.com/maps/search/coin+lockers+in+ueno+station/@35.713915,139.7744383,17z/data=!3m1!4b1?entry=ttu", // D11: 上野車站置物櫃的Google Maps位置連結
        d11_img_ameyoko_1: "https://static.gltjp.com/glt/data/article/21000/20604/20240127_171051_3ed959f4_w1920.webp", // D11: 阿美橫丁購物圖片1
        d11_img_ameyoko_2: "https://bravel.com/wp-content/uploads/2018/08/20190508-%E9%98%BF%E7%BE%8E%E6%A9%AB%E4%B8%81.jpg", // D11: 阿美橫丁購物圖片2
        d11_link_to_rakuspa_route: "https://www.google.com/maps/dir/Ueno+Station,+7-ch%C5%8Dme-1-1+Ueno,+Taito+City,+Tokyo+110-0005,+Japan/RAKU+SPA+1010+Kanda,+1-ch%C5%8Dme-9-9+Kanda+Awajich%C5%8D,+Chiyoda+City,+Tokyo+101-0063,+Japan/@35.7058864,139.7686036,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x60188e9454ac82e5:0x1fc47432f4185d24!2m2!1d139.777038!2d35.713768!1m5!1m1!1s0x60188c1c448d3753:0x1b1422b40ba7b296!2m2!1d139.7745378!2d35.6983753!3e3?entry=ttu", // D11: 從上野前往RAKU SPA的路線規劃連結
        d11_img_rakuspa: "https://www.rakuspa.com/kanda/img/top/main_img02.jpg", // D11: RAKU SPA的圖片連結
        d11_link_to_airport_route: "https://www.google.com/maps/dir/Ueno+Station,+7-ch%C5%8Dme-1-1+Ueno,+Taito+City,+Tokyo+110-0005,+Japan/Narita+International+Airport,+1-1+Furugome,+Narita,+Chiba,+Japan/@35.7485302,139.7909248,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x60188e9454ac82e5:0x1fc47432f4185d24!2m2!1d139.777038!2d35.713768!1m5!1m1!1s0x6022f1354222e1d7:0x599e557f362c15ea!2m2!1d140.392834!2d35.772013!3e3?entry=ttu", // D11: 前往成田機場的路線規劃連結
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
