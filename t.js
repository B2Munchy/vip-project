const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://dell:12345@localhost:5432/vip-dev');
const Pharma = require('./server/models').pharma;
const Product = require('./server/models').product;
const Question = require('./server/models').question;
const Doctor = require('./server/models').doctor;
const Answer = require('./server/models').answer;
const Reward = require('./server/models').reward;
const Quiz = require('./server/models').quiz;



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');    
     
        Product.findAll().then(products => {
          console.log(JSON.stringify(products)) // ... in order to get the array of user objects
         })  
         Answer.findAll().then(Answers => {
          console.log(JSON.stringify(Answers)) // ... in order to get the array of user objects
         })  
         Doctor.findAll().then(Doctors => {
          console.log(JSON.stringify(Doctors)) // ... in order to get the array of user objects
         })  
         Pharma.findAll().then(Pharmas => {
          console.log(JSON.stringify(Pharmas)) // ... in order to get the array of user objects
         })  
     
         Reward.findAll().then(Rewards => {
          console.log(JSON.stringify(Rewards)) // ... in order to get the array of user objects
         })   
         Quiz.findAll().then(Quizs => {
          console.log(JSON.stringify(Quizs)) // ... in order to get the array of user objects
         })  

  })
  
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

 

  // Answer
  //   .findAll().then(answers => {console.log("answers: " + JSON.stringify(answers))})
  //   .catch(err => {
  //     console.error('answers ERROR: ', err);
  //   });
  // Doctor
  //   .findAll().then(doctors => {console.log("doc: " + JSON.stringify(doctors))})
  //   .catch(err => {
  //     console.error('DOCTORS ERROR: ', err);
  //   });
  // Pharma
  //   .findAll().then(pharmas => {console.log("pharmas: " + JSON.stringify(pharmas))})
  //   .catch(err => {
  //     console.error('PHARMA ERROR: ', err);
  //   });
  // Product
  //   .findAll().then(products => {console.log("products: " + JSON.stringify(products))})
  //   .catch(err => {
  //     console.error('Product ERROR: ', err);
  //   });
  // Question
  //   .findAll().then(questions => {console.log("questions: " + JSON.stringify(questions))})
  //   .catch(err => {
  //     console.error('QUESTIONS ERROR: ', err);
  //   });

  // Quiz
  //   .findAll().then(quiz => {console.log("quiz: " + JSON.stringify(quiz))})
  //   .catch(err => {
  //     console.error('quiz ERROR: ', err);
  //   });

  
    
  // Reward
  //   .findAll().then(rewards => {console.log("rewards: " + JSON.stringify(rewards))})
  //   .catch(err => {
  //     console.error('reward ERROR: ', err);
  //   });


  // Product.bulkCreate([
  //   { name: 'product1', presentation: 'Product@presentation.com',pharmaId: 1},
  //   { name: 'product2', presentation: 'Product2@presentation.com',pharmaId: 2},
  //   { name: 'product3', presentation: 'Product3@presentation.com',pharmaId: 3}
  // ]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  //   return Product.findAll();
  // }).then(products => {
  //   console.log(products) // ... in order to get the array of user objects
  // })

  // Product.findAll({include :[{model: Pharma, where: {id : 1}}]}).then(products => {
  //   console.log(JSON.stringify(products)) // ... in order to get the array of user objects
  // })
  