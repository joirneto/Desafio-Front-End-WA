const axios = require('axios');

const getUrl = data => `https://opentdb.com/api.php?amount=${data}`

const getQuestionsApi = url => axios.get(url)

const extractQuestions = res => res.data.results
    
const getQuestions = ({ getUrl, getQuestionsApi, extractQuestions}) => async (data) =>{
  try {
    const url = getUrl(data);
    const res = await getQuestionsApi(url)
    const questions = extractQuestions(res)
    return questions
  } catch (error) {
    return ''
  }
  
}

module.exports = {
  getUrl,
  extractQuestions,
  getQuestions: getQuestions({getUrl, getQuestionsApi, extractQuestions}),
  getQuestionsApi,
  pure:{
    getQuestions
  }
}



