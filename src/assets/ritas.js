/* global RiTa:false, RiString:false */



export function getSentence(limit = 5, sentence = []) {
  
  // console.log('componentDidMount:', RiTa)
  // var rs = RiString("The elephant took a bite!");
  // console.log(rs.features());
  
  const word = RiTa.randomWord()
  const syllCount = RiTa.getSyllables(word).split('/').length
  // console.log('word:', word)
  // console.log('syllCount', syllCount)
  // console.log('limit:', limit)

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