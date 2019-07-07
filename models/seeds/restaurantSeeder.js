const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurant = require('../../restaurant.json').results

mongoose.connect('mongodb://127.0.0.1/restaurant', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')

  restaurant.forEach(item => {
    Restaurant.create({
      name: item.name,
      name_en: item.name_en,
      category: item.category,
      image: item.image,
      location: item.location,
      phone: item.phone,
      google_map: item.google_map,
      rating: item.rating,
      description: item.description,
    })
  })
  console.log('done')
})

// db.once('open', () => {
//   console.log('db connected')
//   for (let item of restaurant) {
//     Restaurant.create({
//       name: item.name,
//       name_en: item.name_en,
//       category: item.category,
//       image: item.image,
//       location: item.location,
//       phone: item.phone,
//       google_map: item.google_map,
//       rating: item.rating,
//       description: item.description,
//     })
//   }
//   console.log('done')
// })