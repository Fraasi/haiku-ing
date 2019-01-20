/* global RiTa:false */

export function getSentence(limit = 5, sentence = []) {
  
  const word = RiTa.randomWord()
  const syllCount = RiTa.getSyllables(word).split('/').length

  if (limit <= 0) return sentence
  if (limit === 1) {
    sentence.push(RiTa.randomWord(1))
    return sentence
  }
  if (syllCount > limit) return getSentence(limit, sentence)
  if (syllCount === limit) {
    sentence.push(word)
    return sentence
  }
  if (syllCount < limit) {
    sentence.push(word)
    return getSentence(limit - syllCount, sentence)
  }
}