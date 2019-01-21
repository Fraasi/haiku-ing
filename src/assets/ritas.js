/* global RiTa:false */
import dictionary from './dictionary.json'
import random from 'futility/lib/random'

console.log(dictionary)

export function getRanSentence(limit = 5, sentence = []) {
  const word = RiTa.randomWord()
  const syllCount = RiTa.getSyllables(word).split('/').length

  if (limit <= 0) return sentence
  if (limit === 1) {
    sentence.push(RiTa.randomWord(1))
    return sentence
  }
  if (syllCount > limit) return getRanSentence(limit, sentence)
  if (syllCount === limit) {
    sentence.push(word)
    return sentence
  }
  if (syllCount < limit) {
    sentence.push(word)
    return getRanSentence(limit - syllCount, sentence)
  }
}

export function getDictSentence(limit = 5, sentence = []) {
  const syllCount = Math.ceil(random(0, limit))
  const word = random(dictionary[syllCount])
  
  if (limit <= 0) return sentence
  if (limit === 1) {
    sentence.push(random(dictionary[1])[0])
    return sentence
  }
  if (syllCount > limit) return getDictSentence(limit, sentence)
  if (syllCount === limit) {
    sentence.push(word[0])
    return sentence
  }
  if (syllCount < limit) {
    sentence.push(word[0])
    return getDictSentence(limit - syllCount, sentence)
  }

}
