const loremIpsum = require('lorem-ipsum')
let output = loremIpsum({
  count: 3,
  units: 'paragraphs',
  format: 'HTML',
  suffix: '<br/>'
})
const express = require('express')
const app = express()

app.get('/lorem', function (req, res) {
  res.send(output)
  console.log('This is a paragraph with lorem-ipsum')
})
app.listen(3000, function (){
  console.log('You started the text app!')
})
