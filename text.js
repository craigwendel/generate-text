const loremIpsum = require('lorem-ipsum')
const express = require('express')
const app = express()

app.get('/lorem', function (req, res) {
  let output = loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'HTML',
    suffix: '<br/>',
  })
  res.send(output)
})
app.get('/lorem/:count', function (req, res) {
  let newOutput = parseInt(req.params.count)
  let output = loremIpsum({
    count: newOutput,
    units: 'paragraphs',
    format: 'HTML',
    suffix: '<br/>',
  })
  res.send(output)
})
app.listen(3000, function (){
  console.log('You started the text app!')
})
