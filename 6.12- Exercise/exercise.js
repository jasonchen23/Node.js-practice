const { rejects } = require("assert");
const { resolve } = require("path/posix");

// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function test(){
  try{
    const customer = await getCustomert(2);
    console.log('Customer: ', customer);
    if (customer.isGold === true) {
      // const movies = await getTopMovies();
      // console.log('Top movies: ', movies);
      // const commits = await sendEmail(customer[3],movies);

      const pMovies = getTopMovies();
      console.log( pMovies);
      const pEmail = sendEmail(customer.email,pMovies);
      console.log( pEmail);
      const results = await Promise.all([pMovies, pEmail]);
      console.log(results);
    }
  }
  catch (err) {
    console.log('Error', err.message);
  }
}

test();
console.log(getCustomert(1));
function getCustomert(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
      // rejects(new Error("getCustomert failed"));
    }, 4000); 
  });
}

function getTopMovies() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
      // rejects("getTopMovies failed");
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve();
      // rejects("sendEmail failed");
    }, 4000);
  })
}