
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

function removeDuplicates(nums) {
  return nums.map((num, i) => num === nums[i - 1] ? undefined : num).filter(num => num !== undefined)
}


function main() {
  const sentence = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
  countWords(sentence)

  const sortedList = [3, 4, 5, 6, 7, 7, 8, 9, 10, 10, 10, 11, 12, 13, 13, 13, 13, 13]
  console.log(removeDuplicates(sortedList))

}
main()