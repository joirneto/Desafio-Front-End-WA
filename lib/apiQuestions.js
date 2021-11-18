const axios = require('axios');
import {decoderHTMLEntilies} from '../lib/decoderHTMLEntilies'

const getUrl = data => `https://opentdb.com/api.php?amount=${data}`

const getQuestionsApi = url => axios.get(url)

const extractQuestions = res => res.data.results

const shuffleArray = arr => {
  // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
  const j = Math.floor(Math.random() * (i + 1));
  // Reposicionando elemento
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}


const questionsConvert = questions =>{
  const questionsConverted = [];
  const questionsCorrects = {};
  questions.map((question) => {
    
    
    console.log('p=',decoderHTMLEntilies(question.correct_answer))
    let answersAll = []
    
    answersAll.push(decoderHTMLEntilies(question.correct_answer))
    
    for(let i=0; i<question.incorrect_answers.length;++i){
      answersAll.push(decoderHTMLEntilies(question.incorrect_answers[i]))
    }
  

    const aux1 = {
      question: decoderHTMLEntilies(question.question),
      answers: answersAll
    }

    shuffleArray(answersAll)
    questionsConverted.push(aux1)
    questionsCorrects[decoderHTMLEntilies(question.question)] = decoderHTMLEntilies(question.correct_answer)
  });

  return {questionsConverted, questionsCorrects }
}


    
const getQuestions = ({ getUrl, getQuestionsApi, extractQuestions, questionsConvert}) => async (data) =>{

  try {
    const url = getUrl(data);
    const res = await getQuestionsApi(url)
    const questions = extractQuestions(res)

    const {questionsConverted, questionsCorrects } = questionsConvert(questions)
       
    return {questionsConverted, questionsCorrects }
  } catch (error) {
    return ''
  }
  
}

module.exports = {
  getUrl,
  extractQuestions,
  questionsConvert,
  getQuestions: getQuestions({getUrl, getQuestionsApi, extractQuestions, questionsConvert}),
  getQuestionsApi,
  pure:{
    getQuestions
  }
}



