
Product.bulkCreate([
  { name: 'product1', presentation: 'Product@presentation.com',pharmaId: 1},
  { name: 'product2', presentation: 'Product2@presentation.com',pharmaId: 2},
  { name: 'product3', presentation: 'Product3@presentation.com',pharmaId: 3}
]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  return Product.findAll();
}).then(products => {
  console.log(products) // ... in order to get the array of user objects
})

Product.findAll({include :[{model: Pharma, where: {id : 1}}]}).then(products => {
  console.log(JSON.stringify(products)) // ... in order to get the array of user objects
})


Doctor.bulkCreate([
  { name: 'the doctah 1', passhash: '1234',job:'', points: 25},
  { name: 'the doctah 2', passhash: '2234',job:'', points: 50},
  { name: 'the doctah 3', passhash: '3234',job:'', points: 70}
])

Pharma.bulkCreate([
  { name: 'the Pharmah 1', passhash: '1234',email:'Pharha@email.com', description: 'pharma dexc'},
  { name: 'the Pharmah 2', passhash: '2234',email:'Pharha@email.com', description: 'looong pharama desc'},
  { name: 'the Pharmah 3', passhash: '3234',email:'Pharha@email.com', description: "loooooooooooonger pharma desc"}
])

Question.bulkCreate([
	{ name: 'what is the best type of bears?', quizId:1},
	{ name: 'what is the best type of bearss?', quizId:1},
	{ name: 'what is the best type of bearssss?', quizId:1},
	{ name: 'what is the best type of bearssssssss?', quizId:1}
])

Quiz.bulkCreate([
  { name: 'Big Quiz 1', points: 20,takes:50, total_time: 25, av_time: 50, av_score: 10},
	{ name: 'Big Quiz 2', points: 20,takes:50, total_time: 25, av_time: 50, av_score: 10},
	{ name: 'Big Quiz 3', points: 20,takes:50, total_time: 25, av_time: 50, av_score: 10}
])

Quiz.bulkCreate([
  { name: 'Big Reward 1', redeems: 20,points_required:50},
	{ name: 'Big Reward 2', redeems: 20,points_required:50},
	{ name: 'Big Reward 3', redeems: 20,points_required:50}
])
