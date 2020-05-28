const yallist = require('yallist')

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

// polynomial complexity
function countPalindromes(sentence) {
  // linear time complexity
  function _isPalindrome(word) {
    let reversed = ''
    const letters = word.split('') 

    for(let i = letters.length - 1; i >= 0; i--) {
      reversed += letters[i]
    }

    return reversed === word && word.length > 1
  }

  const words = sentence.toLowerCase().split(' ');
  const palindromes = []

  words.forEach(word => {
    if(_isPalindrome(word)) {
      palindromes.push(word)
    }
  })

  return `${palindromes.join(', ')} ${palindromes.length} palindromes`

}

function compareLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;

  while(current1 !== null && current2 !== null) {
    if(current1.value !== current2.value) {
      return current1.value > current2.value ? 1 : -1
    }

    current1 = current1.next;
    current2 = current2.next;
  }

  return 0
}

function main() {
  const sentence = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
  countWords(sentence)

  const sortedList = [3, 4, 5, 6, 7, 7, 8, 9, 10, 10, 10, 11, 12, 13, 13, 13, 13, 13]
  console.log(removeDuplicates(sortedList))

  const palindromes = 'Dad gave mom a Tesla as a racecar'
  console.log(countPalindromes(palindromes))


  const list1 = yallist.create('Bilbo'.split(''))
  const list2 = yallist.create('Bilboa'.split(''))

  console.log(compareLists(list1, list2))
}
main()