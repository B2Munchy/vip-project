const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://dell:12345@localhost:5432/vip-dev');
const Doctor = require('./server/models').Doctor;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Doctor.create({name: 'wade',email: "wade@email.com"})	
	.catch(err => {
		console.log('-------------------')
		console.log('error: ', err)
		console.log('-------------------')
	})
	.then(() => Doctor.findAll()
		.then(doctors => {console.log(JSON.stringify(doctors))}));


// const Doctor = sequelize.define('doctor', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   email: {type : Sequelize.STRING,
//   	unique : true 	
//   },
//   points :  { type: Sequelize.INTEGER, required: false, defaultValue: 0},
//   cv : Sequelize.TEXT,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });

// Doctor
// 	.create({name: 'wade',email: "wade@email.com"})	
// 	.catch(err => {
// 		console.log('-------------------')
// 		console.log('error: ', err)
// 		console.log('-------------------')
// 	})
// 	.then(() => Doctor.findAll()
// 		.then(doctors => {console.log(JSON.stringify(doctors))}));
	
// Doctor.sync({ulter : true});

// Doctor.sync({force: false})

	// .then(() => {
	//   // Table created
	//   console.log('======================');
	//   return Doctor.create({
	//     name: 'wilson3',
	//     job: 'mercenary3',
	//     email: 'test3@email.com'
	//   })

	// })
	// .catch(err => {
	// 	console.log('error:', err);

	// }).then(() => {Doctor.findAll().then(doctors => {
	//   console.log(doctors)
	//   console.log('^^^^^^^^^^^^^^^^^^^^^^^^');
	// });}); 

//Doctor.drop();

// Doctor.findAll()
// 	.catch(err => {
// 		console.log('~~~~~~~~~~~~~~~~~')
// 		console.log(err)
// 		console.log('~~~~~~~~~~~~~~~~~')
// 	})

