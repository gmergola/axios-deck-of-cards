// async function favNum (){
//   return await axios.get('http://numbersapi.com/33/trivia?json')
// }

// axios.get('http://numbersapi.com/33/trivia?json')
// .then( (data) => {
//   console.log("second!")
//   console.log(data);
// })

// console.log("genna")

// async function mulNum (){
//   setOfNums = await axios.get('http://numbersapi.com/1..3,10')

//   for(let num in setOfNums.data){
//     console.log(setOfNums.data[num])
//   }
// }

// axios.get('http://numbersapi.com/1..3,10')
// .then((response) => {
//   for(let num in response.data){
//     console.log(response.data[num])
//   }
// })

async function get4Facts(){
  let facts = await Promise.all([
    axios.get('http://numbersapi.com/33/trivia'),
    axios.get('http://numbersapi.com/33/trivia'),
    axios.get('http://numbersapi.com/33/trivia'),
    axios.get('http://numbersapi.com/33/trivia')
  ])

  console.log(`The first fact is ${facts[1].data}`)
  console.log(`The second fact is ${facts[1].data}`)
  console.log(`The third fact is ${facts[2].data}`)
  console.log(`The fourth fact is ${facts[3].data}`)
}



