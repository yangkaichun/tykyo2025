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
    d1_img_scoot_plane: "https://cdn.flyscoot.com/prod/images/default-source/embraer-2024/embraer-e190-e2.jpg?sfvrsn=6e80a7e2_1/Embraer-E190-E2.jpg", // D1: 酷航客機的圖片連結
    d1_img_scoot_cabin: "https://www.vogue.com.tw/article/%E9%85%B7%E8%88%AA-scoot-787-%E8%B1%AA%E8%8F%AF%E7%B6%93%E6%BF%9F%E8%89%99", // D1: 酷航機艙內部的圖片連結
    d1_img_skyliner: "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/assets/images/skyliner/index/photo_skyliner.jpg", // D1: 京成Skyliner列車的圖片連結
    d1_link_skyliner_route: "https://www.google.com/maps/dir/Narita+Airport+Terminal+1%2C+Kinone%2C+Narita%2C+Chiba+286-0105%2C+Japan/Ueno+Station%2C+7+Chome+Ueno%2C+Taito+City%2C+Tokyo+110-0005%2C+Japan/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6022f30b656c4ea7:0xbc0cd6366869370d!2m2!1d140.3860877!2d35.7642236!1m5!1m1!1s0x60188e9e93d3060b:0x6c89b36d7b4f9244!2m2!1d139.7774091!2d35.7141672!3e6?hl=en", // D1: 從成田機場到上野的Skyliner路線規劃連結
    d1_link_hotel_map: "https://www.google.com/maps/place/Hotel+Crown+Hills+Ueno+Premier/@35.7091391,139.776906,17z/data=!3m1!4b1!4m15!1m6!3m5!1s0x60188e9f5cf9ea1b:0x3467963b0df998c0!2sHotel+Crown+Hills+Ueno+Premier!8m2!3d35.7091391!4d139.776906!3m7!1s0x60188e9f5cf9ea1b:0x3467963b0df998c0!5m2!4m1!1i2!8m2!3d35.7091391!4d139.776906", // D1: 上野皇冠山丘酒店的Google Maps位置連結
    d1_img_hotel_exterior: "https://blog.lhyeung.net/uploads/2023/11/hotelcrownhill_uenolifetree04.jpg", // D1: 飯店外觀的圖片連結
    d1_img_hotel_room: "https://blog.lhyeung.net/uploads/2023/11/hotelcrownhill_uenolifetree33.jpg", // D1: 飯店房間的圖片連結
    d1_img_hotel_view: "https://blog.lhyeung.net/uploads/2023/11/hotelcrownhill_uenolifetree34.jpg", // D1: 飯店窗景的圖片連結

    // --- DAY 2 ---
    d2_link_harrypotter_map: "https://www.google.com/maps/place/Warner+Bros.+Studio+Tour+Tokyo+%E2%80%93+The+Making+of+Harry+Potter/@35.7615472,139.6508083,17z/data=!3m1!4b1!4m6!3m5!1s0x6018edc87b4b9b67:0x86c8c5b15b826b35!8m2!3d35.7615472!4d139.6508083!16s%2Fg%2F11h9kd6k87", // D2: 哈利波特影城的Google Maps位置連結
    d2_link_to_harrypotter_route: "https://www.google.com/maps/dir/Ueno+Station,+Tokyo/Toshimaen+Station,+Tokyo/@35.7278676,139.6418013,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x60188e9e93d3060b:0x6c89b36d7b4f9244!2m2!1d139.7774091!4d35.7141672!1m5!1m1!1s0x6018ede4c0e4a751:0x3b1d8a8a8c8b8c8b!2m2!1d139.6508083!4d35.7615472!3e3", // D2: 前往哈利波特影城的路線規劃連結
    d2_img_oedo_line: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Toei_Oedo_Line_12-000_series.jpg/1200px-Toei_Oedo_Line_12-000_series.jpg", // D2: 都營大江戶線列車的圖片連結
    d2_img_hp_entrance: "https://www.wbstudiotour.jp/images/default-source/default-album/entrance.jpg", // D2: 哈利波特影城入口的圖片連結
    d2_img_hp_hall: "https://www.wbstudiotour.jp/images/default-source/experience/great-hall.jpg", // D2: 霍格華茲大廳的圖片連結
    d2_img_hp_scene: "https://www.wbstudiotour.jp/images/default-source/experience/diagon-alley.jpg", // D2: 影城內魔法場景的圖片連結
    d2_img_sunshine_aqua: "https://sunshinecity.jp/aquarium/images/common/og_image.jpg", // D2: 池袋陽光水族館的圖片連結
    d2_img_sunshine_show: "https://sunshinecity.jp/aquarium/images/animals/otter.jpg", // D2: 水族館表演的圖片連結
    d2_img_sunshine_jellyfish: "https://sunshinecity.jp/aquarium/images/animals/jellyfish.jpg", // D2: 水族館水母區的圖片連結
    d2_link_to_ikebukuro_route: "https://www.google.com/maps/dir/Toshimaen+Station,+Tokyo/Ikebukuro+Station,+Tokyo/@35.7410951,139.6858813,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6018ede4c0e4a751:0x3b1d8a8a8c8b8c8b!2m2!1d139.6508083!4d35.7615472!1m5!1m1!1s0x60188d2ac0be3f7d:0x2b6d53cb463f9040!2m2!1d139.7106090!4d35.7295900!3e3", // D2: 前往池袋的路線規劃連結
    
    // --- DAY 3 ---
    d3_link_teamlab_map: "https://www.google.com/maps/place/teamLab+Planets+TOKYO+DMM/@35.6491207,139.7897739,17z/data=!3m1!4b1!4m6!3m5!1s0x60188908e728e749:0x6de450c94bd3d622!8m2!3d35.6491207!4d139.7897739!16s%2Fg%2F11ghxr0p5m", // D3: teamLab Planets的Google Maps位置連結
    d3_img_teamlab_1: "https://www.teamlab.art/images/planets/koi.jpg", // D3: teamLab場景圖片1
    d3_img_teamlab_2: "https://www.teamlab.art/images/planets/infinity.jpg", // D3: teamLab場景圖片2
    d3_img_teamlab_3: "https://www.teamlab.art/images/planets/flower.jpg", // D3: teamLab場景圖片3
    d3_link_lalaport_map: "https://www.google.com/maps/place/LaLaport+TOYOSU/@35.6542503,139.7957583,17z/data=!3m1!4b1!4m6!3m5!1s0x601889b12d8b8b8b:0x8b8b8b8b8b8b8b8b!8m2!3d35.6542503!4d139.7957583!16s%2Fm%2F0h4k5q3", // D3: 豐洲LaLaport的Google Maps位置連結
    d3_img_lalaport_1: "https://lalaport-toyosu.com/images/og_image.jpg", // D3: LaLaport商場圖片1
    d3_img_lalaport_2: "https://lalaport-toyosu.com/images/shop/interior.jpg", // D3: LaLaport商場圖片2
    d3_link_skytree_map: "https://www.google.com/maps/place/Tokyo+Skytree/@35.7100627,139.81070040000003,17z/data=!3m1!4b1!4m6!3m5!1s0x601889b7f7d7d7d7:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.81070040000003!16s%2Fm%2F0h4k5q3", // D3: 東京晴空塔的Google Maps位置連結
    d3_img_skytree_1: "https://www.japan-guide.com/g18/3064_01a.jpg", // D3: 晴空塔圖片1
    d3_img_skytree_2: "https://upload.wikimedia.org/wikipedia/commons/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg", // D3: 晴空塔圖片2
    d3_img_skytree_3: "https://www.tokyo-skytree.jp/enjoy/discover/assets/img/sightseeing/detail/skytree_01.jpg", // D3: 晴空塔圖片3
    d3_img_pokemon_skytree: "https://www.tokyo-skytree.jp/shop/images/pokemon_center.jpg", // D3: 晴空塔寶可夢中心的圖片連結

    // --- DAY 4 ---
    d4_link_tokyo_locker_map: "https://www.google.com/maps/place/Tokyo+Station/@35.6812362,139.7645903,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bfbd89f700b:0x277c49ba34ed38!8m2!3d35.6812362!4d139.7645903!16s%2Fm%2F02_d5g", // D4: 東京車站置物櫃的Google Maps位置連結
    d4_link_odaiba_map: "https://www.google.com/maps/place/Odaiba/@35.6267442,139.7745447,14z/data=!3m1!4b1!4m6!3m5!1s0x601889b2f7d7d7d7:0x7d1d4fb31f43f72a!8m2!3d35.6267442!4d139.7745447!16s%2Fm%2F02_d5g", // D4: 台場的Google Maps位置連結
    d4_img_gundam_1: "https://digjapan.travel/files/topics/11773_ext_80_en_0.jpg", // D4: 獨角獸鋼彈圖片1
    d4_img_gundam_2: "https://www.unicorn-gundam-statue.jp/wordpress/wp-content/themes/unicorn-gundam-statue/assets/images/img_slider_03.jpg", // D4: 獨角獸鋼彈圖片2
    d4_img_gundam_3: "https://www.unicorn-gundam-statue.jp/wordpress/wp-content/themes/unicorn-gundam-statue/assets/images/img_slider_06.jpg", // D4: 獨角獸鋼彈圖片3
    d4_link_rakuspa_map: "https://www.google.com/maps/place/RAKU+SPA+1010+%E7%A5%9E%E7%94%B0/@35.6988888,139.7666666,17z/data=!3m1!4b1!4m6!3m5!1s0x601889b2f7d7d7d7:0x7d1d4fb31f43f72a!8m2!3d35.6988888!4d139.7666666!16s%2Fm%2F02_d5g", // D4: RAKU SPA 1010 神田的Google Maps位置連結
    d4_img_rakuspa_1: "https://rakuspa.com/kanda/images/exterior.jpg", // D4: RAKU SPA圖片1
    d4_img_rakuspa_2: "https://rakuspa.com/kanda/images/interior.jpg", // D4: RAKU SPA圖片2
    d4_link_to_rakuspa_route: "https://www.google.com/maps/dir/Odaiba,+Tokyo/RAKU+SPA+1010+%E7%A5%9E%E7%94%B0/@35.6627663,139.7206126,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x601889b2f7d7d7d7:0x7d1d4fb31f43f72a!2m2!1d139.7745447!4d35.6267442!1m5!1m1!1s0x601889b2f7d7d7d7:0x7d1d4fb31f43f72a!2m2!1d139.7666666!4d35.6988888!3e3", // D4: 從台場前往RAKU SPA的路線規劃連結
    d4_link_yaesu_bus_map: "https://www.google.com/maps/place/Yaesu+Bus+Terminal/@35.6791667,139.7677778,17z/data=!3m1!4b1!4m6!3m5!1s0x601889b2f7d7d7d7:0x7d1d4fb31f43f72a!8m2!3d35.6791667!4d139.7677778!16s%2Fm%2F02_d5g", // D4: 東京八重洲巴士總站的Google Maps位置連結
    d4_img_nightbus: "https://www.willerexpress.com/images/bus_exterior.jpg", // D4: WILLER夜間巴士的圖片連結
    d4_img_yaesu_midtown: "https://www.tokyomidtown-yaesu.jp/images/exterior.jpg", // D4: 東京中城八重洲的圖片連結

    // --- DAY 5 ---
    d5_link_to_usjhotel_route: "https://www.google.com/maps/dir/Osaka+Bus+Station/The+Park+Front+Hotel+at+Universal+Studios+Japan/@34.6664806,135.4180555,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.5000000!4d34.7000000!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.4319444!4d34.6672222!3e3", // D5: 從巴士站到The Park Front Hotel的路線連結
    d5_link_usj_map: "https://www.google.com/maps/place/Universal+Studios+Japan/@34.6661111,135.4319444,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.6661111!4d135.4319444!16s%2Fm%2F02_d5g", // D5: 日本環球影城的Google Maps位置連結
    d5_img_usj_1: "https://www.usj.co.jp/web/images/parks/main_gate.jpg", // D5: USJ圖片1
    d5_img_usj_2: "https://www.usj.co.jp/web/images/parks/nintendo_world.jpg", // D5: USJ圖片2
    d5_img_usj_3: "https://www.usj.co.jp/web/images/parks/harry_potter.jpg", // D5: USJ圖片3
    d5_link_usjhotel_map: "https://www.google.com/maps/place/The+Park+Front+Hotel+at+Universal+Studios+Japan/@34.6672222,135.4319444,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.6672222!4d135.4319444!16s%2Fm%2F02_d5g", // D5: The Park Front Hotel的Google Maps位置連結
    d5_img_usjhotel_1: "https://www.parkfronthotel.jp/images/exterior.jpg", // D5: 飯店圖片1
    d5_img_usjhotel_2: "https://www.parkfronthotel.jp/images/room.jpg", // D5: 飯店圖片2
    d5_img_usjhotel_3: "https://www.parkfronthotel.jp/images/view.jpg", // D5: 飯店圖片3

    // --- DAY 6 ---
    d6_link_captain_line_route: "https://www.google.com/maps/dir/Namba,+Osaka/Osaka+Aquarium+Kaiyukan/@34.6664806,135.4180555,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.5000000!4d34.6750000!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.4291667!4d34.6541667!3e4", // D6: 船長線的路線規劃連結
    d6_img_captain_line: "https://www.captain-line.co.jp/images/ferry.jpg", // D6: 船長線渡輪的圖片連結
    d6_img_kaiyukan_1: "https://www.kaiyukan.com/images/whale_shark.jpg", // D6: 大阪海遊館圖片1
    d6_img_kaiyukan_2: "https://www.kaiyukan.com/images/penguin.jpg", // D6: 大阪海遊館圖片2
    d6_img_kaiyukan_3: "https://www.kaiyukan.com/images/jellyfish.jpg", // D6: 大阪海遊館圖片3
    d6_link_to_bonhostel_route: "https://www.google.com/maps/dir/Osaka+Aquarium+Kaiyukan/BON+Hostel+Osaka/@34.6541667,135.4291667,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.4291667!4d34.6541667!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.5000000!4d34.6750000!3e3", // D6: 前往BON Hostel的路線規劃連結
    d6_img_bonhostel: "https://www.bonhostel.osaka.jp/images/exterior.jpg", // D6: BON Hostel的圖片連結
    d6_img_denden_town: "https://www.osaka-info.jp/images/denden_town.jpg", // D6: 日本橋電電城的圖片連結
    d6_img_dotonbori: "https://www.osaka-info.jp/images/dotonbori.jpg", // D6: 道頓堀的圖片連結
    d6_img_glico: "https://www.osaka-info.jp/images/glico_sign.jpg", // D6: 固力果跑跑人的圖片連結

    // --- DAY 7 ---
    d7_link_to_kyoto_route: "https://www.google.com/maps/dir/Osaka+Station/Kyoto+Station/@34.7333333,135.5000000,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6000e6553e7b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.4958333!4d34.7022222!1m5!1m1!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.7580556!4d34.9858333!3e3", // D7: 從大阪前往京都車站的路線規劃連結
    d7_link_fushimiinari_map: "https://www.google.com/maps/place/Fushimi+Inari+Taisha/@34.9675000,135.7725000,17z/data=!3m1!4b1!4m6!3m5!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.9675000!4d135.7725000!16s%2Fm%2F02_d5g", // D7: 伏見稻荷大社的Google Maps位置連結
    d7_img_fushimiinari_1: "https://inari.jp/images/senbon_torii.jpg", // D7: 伏見稻荷大社圖片1
    d7_img_fushimiinari_2: "https://inari.jp/images/main_hall.jpg", // D7: 伏見稻荷大社圖片2
    d7_img_fushimiinari_3: "https://inari.jp/images/fox_statue.jpg", // D7: 伏見稻荷大社圖片3
    d7_link_nara_map: "https://www.google.com/maps/place/Nara+Park/@34.6852778,135.8430556,17z/data=!3m1!4b1!4m6!3m5!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.6852778!4d135.8430556!16s%2Fm%2F02_d5g", // D7: 奈良公園的Google Maps位置連結
    d7_img_nara_1: "https://narapark.jp/images/deer.jpg", // D7: 奈良鹿的圖片連結
    d7_img_nara_2: "https://narapark.jp/images/todaiji.jpg", // D7: 東大寺的圖片連結
    d7_img_nara_3: "https://narapark.jp/images/buddha.jpg", // D7: 東大寺大佛的圖片連結
    d7_link_kyotohotel_map: "https://www.google.com/maps/place/LOISIR+HOTEL+KYOTO+TOJI/@34.9802778,135.7472222,17z/data=!3m1!4b1!4m6!3m5!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.9802778!4d135.7472222!16s%2Fm%2F02_d5g", // D7: LOISIR HOTEL KYOTO TOJI的Google Maps位置連結
    d7_img_kyotohotel: "https://www.loisir-hotel.com/kyoto-toji/images/exterior.jpg", // D7: LOISIR HOTEL的圖片連結

    // --- DAY 8 ---
    d8_img_kiyomizu_1: "https://www.kiyomizudera.or.jp/images/main_hall.jpg", // D8: 清水寺圖片1
    d8_img_kiyomizu_2: "https://www.kiyomizudera.or.jp/images/ninenzaka.jpg", // D8: 二年坂的圖片連結
    d8_img_kiyomizu_3: "https://www.kiyomizudera.or.jp/images/sannenzaka.jpg", // D8: 三年坂的圖片連結
    d8_link_kiyomizu_route: "https://www.google.com/maps/dir/Kyoto+Station/Kiyomizu-dera+Temple/@34.9944444,135.7850000,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.7580556!4d34.9858333!1m5!1m1!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.7850000!4d34.9944444!3e1", // D8: 清水寺周邊的散步路線規劃連結
    d8_link_makotoyu_map: "https://www.google.com/maps/place/%E8%AA%A0%E3%81%AE%E6%B9%AF/@34.9944444,135.7850000,17z/data=!3m1!4b1!4m6!3m5!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.9944444!4d135.7850000!16s%2Fm%2F02_d5g", // D8: 誠の湯的Google Maps位置連結
    d8_img_makotoyu_1: "https://makotoyu.jp/images/exterior.jpg", // D8: 誠の湯圖片1
    d8_img_makotoyu_2: "https://makotoyu.jp/images/bath.jpg", // D8: 誠の湯圖片2
    d8_link_to_makotoyu_route: "https://www.google.com/maps/dir/Kiyomizu-dera+Temple/%E8%AA%A0%E3%81%AE%E6%B9%AF/@34.9944444,135.7850000,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.7850000!4d34.9944444!1m5!1m1!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!2m2!1d135.7850000!4d34.9944444!3e1", // D8: 前往誠の湯的路線規劃連結
    d8_link_kyoto_bus_map: "https://www.google.com/maps/place/Kyoto+Bus+Terminal/@34.9858333,135.7580556,17z/data=!3m1!4b1!4m6!3m5!1s0x6001089f7b8b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d34.9858333!4d135.7580556!16s%2Fm%2F02_d5g", // D8: 京都夜間巴士乘車點的Google Maps位置連結

        // --- DAY 9 ---
        d9_link_gridshotel_map: "https://maps.app.goo.gl/qAJH72EtJo2oFYhr8", // D9: Grids Tokyo Ueno Hotel的Google Maps位置連結
        d9_img_gridshotel_1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221261208.jpg", // D9: 飯店圖片1
        d9_img_gridshotel_2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/562679711.jpg", // D9: 飯店圖片2
        d9_img_gridshotel_3: "https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/325904139.jpg", // D9: 飯店圖片3
        d9_img_ameyoko_1: "https://static.gltjp.com/glt/data/article/21000/20604/20240127_171051_3ed959f4_w1920.webp", // D9: 阿美橫丁圖片1
        d9_img_ameyoko_2: "https://en.pimg.jp/104/247/219/1/104247219.jpg", // D9: 阿美橫丁圖片2
        d9_img_ueno_park_1: "https://static.gltjp.com/glt/data/article/21000/20394/20230831_131736_902a620c_w1920.webp", // D9: 上野公園圖片1
        d9_img_ueno_park_2: "https://nightscape.tokyo/tw/wp-content/uploads/2024/04/ueno-park-15.jpg", // D9: 不忍池的圖片連結

        // --- DAY 10 ---
        d10_link_to_hakone_route: "https://maps.app.goo.gl/ihb9kGA7h1W73YJL9", // D10: 前往箱根的路線規劃連結
        d10_link_owakudani_map: "https://maps.app.goo.gl/LaemDNjCotvqK29G9", // D10: 大涌谷的Google Maps位置連結
        d10_img_owakudani_1: "https://www.e-japannavi.com/syuyu/kanagawa/hakone_images/hakone_owakudani_img700465_09.jpg", // D10: 大涌谷圖片1
        d10_img_owakudani_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlC760jSJIdbWYrrLGI628f_DdpavIr6K7ti_tt36iFYewCfs7hplxaW3KmUDYCQvM5PQ&usqp=CAU", // D10: 箱根纜車的圖片連結
        d10_img_owakudani_3: "https://thumb.photo-ac.com/65/6582d54d8ab4673e9c8b415371487667_t.jpeg", // D10: 大涌谷火山景觀的圖片連結
        d10_link_ashinoko_map: "https://maps.app.goo.gl/Z1br9Jgy9TT9uwMX8", // D10: 蘆之湖的Google Maps位置連結
        d10_img_pirate_ship_1: "https://www.cct-travel.com.tw/img/upload/Japan/KANTO/302-014.jpg", // D10: 海賊船圖片1
        d10_img_pirate_ship_2: "https://twoslowbyron.com/wp-content/uploads/2024/08/hakone.jpg", // D10: 海賊船圖片2
        d10_link_hakone_shrine_map: "https://maps.app.goo.gl/zcTjeQ2wL4LPH6Xd8", // D10: 箱根神社的Google Maps位置連結
        d10_img_hakone_shrine_1: "https://trip.pref.kanagawa.jp/img/spots/photos/hero/zUBDB1yl395KIrA8z2rxhsOfNal4m13WzomhD0JD-1920x1080.jpg", // D10: 箱根神社圖片1
        d10_img_hakone_shrine_2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVQM8oqpnw5DQ7T_lPmT9sI-6mBETeL4oyQ&s", // D10: 平和鳥居的圖片連結

        // --- DAY 11 ---
        d11_link_ueno_locker_map: "https://maps.app.goo.gl/oy21Xi5F9DXj9stT7", // D11: 上野車站置物櫃的Google Maps位置連結
        d11_img_ameyoko_1: "https://static.gltjp.com/glt/data/article/21000/20604/20240127_171051_3ed959f4_w1920.webp", // D11: 阿美橫丁購物圖片1
        d11_img_ameyoko_2: "https://bravel.com/wp-content/uploads/2018/08/20190508-%E9%98%BF%E7%BE%8E%E6%A9%AB%E4%B8%81.jpg", // D11: 阿美橫丁購物圖片2
        d11_link_to_rakuspa_route: "https://maps.app.goo.gl/5NtcFxhAP4j6uhna9", // D11: 從上野前往RAKU SPA的路線規劃連結
        d11_img_rakuspa: "YOUR_RAKUSPA_KANDA_EXTERIOR_IMAGE_URL_HERE", // D11: RAKU SPA的圖片連結
        d11_link_to_airport_route: "https://maps.app.goo.gl/gH9V7gLBa6QfKzA87", // D11: 前往成田機場的路線規劃連結
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
