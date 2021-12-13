import axios from 'axios'


const quizBtn = document.getElementById('quizBtn')

var testId  = 0
var testName = 'karsten';
var testAge = 22;
var testSchool= 'UWI';

quizBtn.addEventListener('click', e =>{  
  e.preventDefault();

  axios({
    method: 'post',
    url: '/save',
    data: {
      testId,
      testName,
      testAge,
      testSchool
    }
  });

}); 