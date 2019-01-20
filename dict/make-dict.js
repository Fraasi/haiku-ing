/* eslint no-useless-escape: 0 */
const fs = require('fs')
const path = require('path')
const rita = require('rita')

fs.readFile(path.join(__dirname, 'raw_text.txt'), {
  encoding: 'utf-8'
}, (err, data) => {
  // clean data, spaces
  const arr = data.split(' ')
  // new lines and quotes
    .map( el => el.replace(/\r\n|\"/g, ''))
  // empty strings & dashes
    .filter(el => {
      if (el === '')  return false
      if (el === '-') return false
      return true
    })
  console.log(arr.length, 'words total')
  fs.writeFileSync(path.join(__dirname, 'words.txt'), arr.join('\n'))

  const wordCount = arr.reduce( (obj, el) => {
    el = el.toLowerCase()
    if (obj[el] === undefined) {
      obj[el] = 1
      return obj
    }
    else {
      obj[el]++
      return obj
    }
  }, {})
  fs.writeFileSync(path.join(__dirname, 'wordCount.json'), JSON.stringify(wordCount, null, 2))

  const dict = Object.entries(wordCount).reduce( (obj, [key, value], i) => {
    // console.log(obj, key, value, i)

    const sylls = rita.getSyllables(key.replace(/[-']/g, '')).split('/').length
    if (obj[sylls] === undefined) {
      obj[sylls] = [ [key, value] ]
    } else {
      obj[sylls].push([key, value])
    }
    return obj
  }, {})

  // sort everything
  Object.keys(dict).forEach(syll => {
    console.log(dict[syll].length, 'words in', syll)
    dict[syll].sort((a, b) => {
      return b[1] - a[1]
    })
     
  });
 
  fs.writeFileSync(path.join(__dirname, 'dictionary.json'), JSON.stringify(dict, null, 2))
})
