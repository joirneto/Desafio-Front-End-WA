import axios from 'axios';
import {decoderHTMLEntilies} from '../lib/decoderHTMLEntilies';
import {shuffleArray} from '../lib/shuffleArray';

const getUrl = data => `https://opentdb.com/api.php?amount=${data}`
const getQuestionsApi = url => axios.get(url)
const extractQuestions = res => res.data.results
const questionsConvert = questions =>{
  const questionsConverted = [];
  const questionsCorrects = {};
  questions.map((question) => {
    let answersAll = []
    answersAll.push(decoderHTMLEntilies(question.correct_answer))
    for(let i=0; i<question.incorrect_answers.length;++i){
      answersAll.push(decoderHTMLEntilies(question.incorrect_answers[i]))
    }
  
    const questionsComplets = {
      question: decoderHTMLEntilies(question.question),
      answers: answersAll
    }

    shuffleArray(answersAll)
    questionsConverted.push(questionsComplets)
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



