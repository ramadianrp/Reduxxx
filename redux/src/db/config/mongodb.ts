const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ramadianrp:ganjarpranowo03@gc01.5aeqvgj.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// async function main() {
//   try {
//     await client.connect();
//     console.log("connected to MongoDB");

//     const database = client.db("GC02");
//     const collection = database.collection("Product");

//     const docs = [
//         {
//             "name": "Durex Love Condoms",
//             "slug": "Durex-Love-Condoms",
//             "description": "Kondom Durex Love kami lebih mudah dipakai, menawarkan kenyamanan dan kenikmatan. Memberikan semua perlindungan yang Anda andalkan dari Durex, kondom ini telah dilumasi dengan pelumas untuk pengalaman yang lebih mulus.",
//             "price": 15000,
//             "tags": [
//                 "condom",
//                 "cheap"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/84cc5218e5a21457e32fd264cc4852e3/07549/rb_durex_lovejeans_3pk_rbl2003291_front_v1-1-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/84cc5218e5a21457e32fd264cc4852e3/07549/rb_durex_lovejeans_3pk_rbl2003291_front_v1-1-jpg.webp",
//                 "https://www.durex.co.id/static/8d170fa2e1778c9e88a9a99da57a8a74/07549/rb_durex_love-jeans_12pk_rbl2005118_angle_rightangle_v1-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Fetherlite Condoms",
//             "slug": "Durex-Fetherlite-Condoms",
//             "description": "Kondom Durex Fetherlite lebih tipis untuk meningkatkan sensitivitas, nikmati kedekatan dengan pasangan Anda tanpa mengorbankan keamanan. Membuat pengalaman seksual lebih baik.",
//             "price": 40000,
//             "tags": [
//                 "condom",
//                 "recommended"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/a416f98a83fb8344d0ead70758f2c410/07549/rb_durex_fetherlite_3pk_rbl2002543_fop_v1-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/a416f98a83fb8344d0ead70758f2c410/07549/rb_durex_fetherlite_3pk_rbl2002543_fop_v1-jpg.webp",
//                 "https://www.durex.co.id/static/e1634c420c0331ff76950088509fb79e/07549/rb_durex_fetherlite_3pk_rbl2002543_left_v1-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Pleasuremax Condoms",
//             "slug": "Durex-Pleasuremax-Condoms",
//             "description": "Kondom Durex PleasureMax memiliki tekstur bergerigi dan bergaris, menjamin stimulasi antara Anda dan pasangan.",
//             "price": 40000,
//             "tags": [
//                 "condom",
//                 "must-try"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/f6fa77dbced059e2633fb0a21fc3cad9/07549/rb_durex_pleasuremax_3pk_rbl2005120_front_v2-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/f6fa77dbced059e2633fb0a21fc3cad9/07549/rb_durex_pleasuremax_3pk_rbl2005120_front_v2-jpg.webp",
//                 "https://www.durex.co.id/static/9d0930b0a499f731aa22e21338b98813/07549/rb_durex_pleasuremax_3pk_rbl2005120_angle_v2-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Together Condoms",
//             "slug": "Durex-Together-Condoms",
//             "description": "Kondom ini diberi pelumas ekstra untuk meningkatkan keintiman, meningkatkan sensitifitas dan menambah pengalaman menyenangkan bagi Anda dan pasangan saat berhubungan seks.",
//             "price": 90000,
//             "tags": [
//                 "condom",
//                 "premium"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/79a030dcc1819f117c698e3b48685103/e7405/durex-together-12s.webp",
//             "images": [
//                 "https://www.durex.co.id/static/79a030dcc1819f117c698e3b48685103/e7405/durex-together-12s.webp",
//                 "https://www.durex.co.id/static/fb0597464dacacbde017f6dc8d4356f9/c8563/together.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Performance Condoms",
//             "slug": "Durex-Performance-Condoms",
//             "description": "Kondom DUREX Performa mengandung Benzocaine 5%, pelumas khusus yang dapat membuat performa pria tahan lama. Memberikan kenyamanan lebih karena tidak berbau lateks.",
//             "price": 31000,
//             "tags": [
//                 "condom",
//                 "best-seller"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/c55b07ed82919b332b30d5db66dfedc6/e7405/rb_durex_performa_3pk_rbl2014446_fop_v1.webp",
//             "images": [
//                 "https://www.durex.co.id/static/c55b07ed82919b332b30d5db66dfedc6/e7405/rb_durex_performa_3pk_rbl2014446_fop_v1.webp",
//                 "https://www.durex.co.id/static/dbe3a1d1aefeb0dd05b3ee0940bc04bf/e7405/rb_durex_performa_6pk_rbl2014447_fop_v1.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Close Fit Condoms",
//             "slug": "Durex-Close-Fit-Condoms",
//             "description": "Kondom Durex Close Fit dirancang lebih ramping agar memberikan sensasi lebih ketat saat dipakai. Durex Close Fit juga berpelumas untuk pengalaman lebih nyaman, sekaligus memberikan rasa aman yang Anda harapkan dari kondom Durex.",
//             "price": 32000,
//             "tags": [
//                 "condom",
//                 "must-try"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/abc0dea4d685d882f2840c4844e1d1a3/483a3/rb_durex_extrasafe_3pk_rbl2002545_front_v1-jpg-1.webp",
//             "images": [
//                 "https://www.durex.co.id/static/abc0dea4d685d882f2840c4844e1d1a3/483a3/rb_durex_extrasafe_3pk_rbl2002545_front_v1-jpg-1.webp",
//                 "https://www.durex.co.id/static/103cb2b2096600d8f440264d7cc89273/c8563/close-fit.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Extra Safe Condoms",
//             "slug": "Durex-Extra-Safe-Condoms",
//             "description": "Kondom Durex Extra Safe dirancang untuk memberikan proteksi lebih disaat berhubungan seksual. Dibuat sedikit lebih tebal dengan pelumas ekstra yang akan memberikan Anda rasa aman tanpa mengurangi kenikmatan.",
//             "price": 32000,
//             "tags": [
//                 "condom",
//                 "recommended"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/a235ac6bb9a5d2aec28b4074163d60a7/07549/rb_durex_extrasafe_3pk_rbl2002545_front_v1-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/a235ac6bb9a5d2aec28b4074163d60a7/07549/rb_durex_extrasafe_3pk_rbl2002545_front_v1-jpg.webp",
//                 "https://www.durex.co.id/static/ffe792c7f271190367327ff628478179/07549/rb_durex_extrasafe_12pk_rbl2002544_angle_v1-1-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Invisible Condoms",
//             "slug": "Durex-Invisible-Condoms",
//             "description": "Kondom Durex Invisible hadir dengan desain baru yang lebih tipis untuk sensasi maksimal namun tetap memberikan rasa aman dan tingkat perlindungan yang tinggi.",
//             "price": 45000,
//             "tags": [
//                 "condom",
//                 "recommended"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/e2cc1d8e4399b411114b03786d3a96a0/07549/rb_durex_invisible_2pk_rbl2003132_front_v1-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/e2cc1d8e4399b411114b03786d3a96a0/07549/rb_durex_invisible_2pk_rbl2003132_front_v1-jpg.webp",
//                 "https://www.durex.co.id/static/4044df2bce3e1b4bcd75c720c152351f/07549/rb_durex_invisible_2pk_rbl2003132_angle_v1-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Mutual Pleasure Condoms",
//             "slug": "Durex-Mutual-Pleasure-Condoms",
//             "description": "Durex Kondom Mutual Pleasure merupakan kondom yang mengutamakan kenikmatan kedua pasangan. Bagian luarnya memiliki tekstur gerigi dan garis yang menstimulasi orgasme wanita, dan bagian dalamnya memiliki pelumas khusus untuk membantu menunda klimaks agar Anda dan pasangan dapat merasakan pengalaman bercinta yang lebih lama, dan happy ending bareng.",
//             "price": 150000,
//             "tags": [
//                 "condom",
//                 "premium"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/738e57019eb2f4ea9766961021b6ac13/07549/rb_durex_mutualpleasure_12pk_rbl2006025_fop_v1-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/738e57019eb2f4ea9766961021b6ac13/07549/rb_durex_mutualpleasure_12pk_rbl2006025_fop_v1-jpg.webp",
//                 "https://www.durex.co.id/static/75e9033a088512b53123d1a84d239cc7/07549/rb_durex_mutualpleasure_12pk_rbl2006025_angle_v1-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Play Massage 2in1 Aloe Vera",
//             "slug": "Durex-Play-Massage-2in1-Aloe-Vera",
//             "description": "Pelumas sempurna saat Anda ingin memulai dengan pijatan sensual yang dilakukan di setiap bagian tubuh, dengan lembut melemaskan semua otot yang lelah bekerja. Formula pelumas berbahan dasar air ini juga bisa digunakan mengatasi kekeringan organ intim wanita dan aman digunakan bersama kondom.",
//             "price": 150000,
//             "tags": [
//                 "solo",
//                 "lube"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/d08ae838591aa3579083f899470ddbc1/e7405/durex_play-massage-2in1_200ml_rbl2012887_front_nordic-2400px_v1.webp",
//             "images": [
//                 "https://www.durex.co.id/static/d08ae838591aa3579083f899470ddbc1/e7405/durex_play-massage-2in1_200ml_rbl2012887_front_nordic-2400px_v1.webp",
//                 "https://www.durex.co.id/static/ecca6077cf0d41e3401fe0eab1ff752a/c8563/aloe-vera.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Play Vibration Ring",
//             "slug": "Durex-Play-Vibration-Ring",
//             "description": "The Durex Play Vibrations Ring is designed to keep you harder for longer. This cock ring is made with soft, stretchy material to fit comfortably for most men.",
//             "price": 120000,
//             "tags": [
//                 "ring",
//                 "toys"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/2a146120ee73a527703ac475518e783d/e7405/rb_durex_sex-toys_vibe-ring_pouch_-rbm2000472_front_v1.webp",
//             "images": [
//                 "https://www.durex.co.id/static/2a146120ee73a527703ac475518e783d/e7405/rb_durex_sex-toys_vibe-ring_pouch_-rbm2000472_front_v1.webp",
//                 "https://www.durex.co.id/static/30e77ca9b60b6519457461b2452d8383/c8563/vibe-ring.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex Play Feel Lubricants",
//             "slug": "Durex-Play-Feel-Lubricants",
//             "description": "Our classic lube makes sex super smooth. Keep Durex Play Feel lube in reach, so you’re always ready when the mood takes you.",
//             "price": 64000,
//             "tags": [
//                 "lube",
//                 "best-seller"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/47d44ff2edccd044ae47151c36593122/07549/rb_durex_feel_100ml_rbl2009560_right_v1_best-jpg.webp",
//             "images": [
//                 "https://www.durex.co.id/static/47d44ff2edccd044ae47151c36593122/07549/rb_durex_feel_100ml_rbl2009560_right_v1_best-jpg.webp",
//                 "https://www.durex.co.id/static/80f4e3a034a266543baf0cf35dcafa2d/07549/rb_durex_feel_50ml_rbl2009559_fop-1-_best-jpg.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         },
//         {
//             "name": "Durex KY Jelly Personal Lubricants",
//             "slug": "Durex-KY-Jelly-Personal-Lubricants",
//             "description": "K-Y Jelly Personal Lubricant menambah kenyamanan dan keintiman di saat kegiatan seksual, membantu mengatasi masalah kekeringan pada daerah intim Anda dan aman digunakan dengan kondom.",
//             "price": 93000,
//             "tags": [
//                 "lube",
//                 "premium"
//             ],
//             "excerpt": "",
//             "thumbnail": "https://www.durex.co.id/static/dd6f3bc035e4a208406d15dd47a3e928/e7405/durex-ky-lube-50g.webp",
//             "images": [
//                 "https://www.durex.co.id/static/dd6f3bc035e4a208406d15dd47a3e928/e7405/durex-ky-lube-50g.webp",
//                 "https://www.durex.co.id/static/6af90c8290abf433ecb25b313ab7c2d0/e7405/durex-ky-lube-100g.webp"
//             ],
//             "createdAt": new Date().toISOString(),
//             "updatedAt": new Date().toISOString()
//         }
//     ]

//     const result = await collection.insertMany(docs);
//     console.log(`${result.insertedCount} documents were inserted`);
//   } catch {
//     console.error("Failed connection to MongoDB")
//   } finally {
//     await client.close();
//     console.log("connection closed from MongoDB");
//   }
// }
// main()

export const database = client.db('GC02')