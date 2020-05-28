
function countWords(sentence) {
  const words = sentence.toLowerCase().replace(/[^A-Za-z0-9 ]/g, '').split(' ');

  const count = {}

  words.forEach(word => {
    if(count[word]) {
      count[word]++
    }
    else {
      count[word] = 1
    }
  })

  let result = ''
  Object.entries(count).forEach(pair => {
    result += `${pair[0]} = ${pair[1]}, `
  })

  console.log(result)

  return words
}


function main() {
  const sentence = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
  countWords(sentence)

  
}
main()