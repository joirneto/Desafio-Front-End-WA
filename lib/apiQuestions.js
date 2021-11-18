const axios = require('axios');



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

const amor = (palavra) =>{
  const all_entities = [{ 
    encoded: `&nbsp;`,
    decoded: ` `
  }, {
    encoded: `&lt;`,
    decoded: `<`
  }, {
    encoded: `&gt;`,
    decoded: `>`
  }, {
    encoded: `&amp;`,
    decoded: `&`
  }, {
    encoded: /&quot;/g,
    decoded: `"`
  }, {
    encoded: `&apos;`,
    decoded: `'`
  }, {
    encoded: `&cent;`,
    decoded: `¢`
  }, {
    encoded: `&pound;`,
    decoded: `£`
  }, {
    encoded: `&yen;`,
    decoded: `yen`
  }, {
    encoded: `&euro;`,
    decoded: `€`
  }, {
    encoded: `&copy;`,
    decoded: `©`
  }, {
    encoded: `&reg;`,
    decoded: `®`
  },
  {
    encoded: `&deg;`,
    decoded: `°`
  },
  {
    encoded: /&#039;/g,
    decoded: `'`
  },
  {
    encoded: `&rdquo;`,
    decoded: `"`
  },
  {
    encoded: `&eacute;`,
    decoded: `é`
  },
  {
    encoded: `&rsquo;s`,
    decoded: `'`
  }]
  
  

  

  for(let i=0; i<all_entities.length;++i){
    palavra = palavra.replace(all_entities[i].encoded,all_entities[i].decoded)
   
  }

  return palavra
}

const html = encoded_text =>{ 

  let decoded_text = encoded_text;

  const all_entities = [{ 
    encoded: `&nbsp;`,
    decoded: ` `
  }, {
    encoded: `&lt;`,
    decoded: `<`
  }, {
    encoded: `&gt;`,
    decoded: `>`
  }, {
    encoded: `&amp;`,
    decoded: `&`
  }, {
    encoded: /&quot;/g,
    decoded: `"`
  }, {
    encoded: `&apos;`,
    decoded: `'`
  }, {
    encoded: `&cent;`,
    decoded: `¢`
  }, {
    encoded: `&pound;`,
    decoded: `£`
  }, {
    encoded: `&yen;`,
    decoded: `yen`
  }, {
    encoded: `&euro;`,
    decoded: `€`
  }, {
    encoded: `&copy;`,
    decoded: `©`
  }, {
    encoded: `&reg;`,
    decoded: `®`
  },
  {
    encoded: `&deg;`,
    decoded: `°`
  },
  {
    encoded: /&#039;/,
    decoded: `'`
  }]


  
for (i = 0; i < all_entities.length; i++) {
  var decoded_text = decoded_text.replace(new RegExp(all_entities[i].encoded, 'g'), all_entities[i].decoded)
}

//console.log('nos=', decoded_text)

return decoded_text;

}




const questionsConvert = questions =>{
  const questionsConverted = [];
  const questionsCorrects = {};
  questions.map((question) => {

    const teste = amor(question.correct_answer)
    console.log('p=',teste)
    let answersAll = []
    
    answersAll.push(amor(question.correct_answer))
    
    for(let i=0; i<question.incorrect_answers.length;++i){
      answersAll.push(amor(question.incorrect_answers[i]))
    }
  

    const aux1 = {
      question: question.question.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&'),
      answers: answersAll
    }

   // shuffleArray(answersAll)
    questionsConverted.push(aux1)
    questionsCorrects[question.question.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&')] = question.correct_answer.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&')
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



