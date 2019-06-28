console.log('Hello this is a js file')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
   response.json().then((data) => {
       console.log(data)
   })
})