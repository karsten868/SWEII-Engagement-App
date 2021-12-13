<template>
  <header>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="headContainer">
    <h1>Menu</h1>
  </div>
  <div class= "container2">
    <div class="wrapper">
      <span class="create_quiz_btn"><Button id= "quizBtn" class="effect effect-5" text="Create Quizz" /></span>
      <span class="conference_btn"><Button class="effect effect-5" text="Join/Host Conference" /></span>
    </div>
    <div class="wrapper">
      <span class="create_poll_btn"><Button class="effect effect-5" text="Create Poll" /></span>
      <span class="report_data_btn"><Button class="effect effect-5" text="Load Summary Report Data" /></span>
    </div>
    <div class="wrapper">
      <span class="logout_btn" ><Button class="effect effect-5" text="Logout" /></span>
    </div>
  </div>
  </header>
</template>
<!--   -->
<script>

import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
   Button,
  }
}
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

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.headContainer{
  max-width: 75px;
  margin:20px auto;
  overflow: auto;
  min-height: 50px;
  padding:10px;
  background-color: #189AB4;
}



.wrapper {
  
  text-align: center; 
  /* position: absolute;  */
}

.container2{
  /*  border: 3px solid green; */
   padding-bottom: 500px;
   
   margin-right: 540px;
  
}

.create_quiz_btn{
  
  margin:auto;
  /* border: 3px solid green; */
  /* padding: 10px; */
  position: absolute; 
  /* max-width: 75px;
  margin:20px auto;
  overflow: auto;
  min-height: 50px;
  padding:10px;
  border: 3px solid green; */
  
}



.conference_btn{
  margin: auto;
  margin-left:  370px;
 /*  border: 3px solid green; */
  position: absolute; 
  /* margin-left: 150px;
  border: 3px solid green;
   */

}



.create_poll_btn{
  margin-top: 150px;
  
 /*  border: 3px solid green; */
  position: absolute; 
  
}

.report_data_btn{
  margin-top: 150px;
  margin-left: 370px;
 /*  border: 3px solid green; */
  position: absolute;   
  
}



.logout_btn{
   margin-top: 250px;
  margin-left: 190px;
 /*  border: 3px solid green; */
  position: absolute;   
}




</style>
