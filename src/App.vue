<template>
<body>
 <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
 <div class="headContainer">
   <h1>Menu</h1>
  </div> 
   <div class= "container2">
    <div class="wrapper">
     <!--  <span class="create_quiz_btn"><Button id= "quizBtn" class="effect effect-5" text="Create Quizz" /></span> -->
      <span class="create_quiz_btn"><button to="/signup" >button</button></span>
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
  
   <!-- div>
     <script  type="application/javascript" src="https://unpkg.com/axios/dist/axios.min.js"></script> 
    <script type="application/javascript" defer src="./EventListener.js"></script>   
    <form id="form">
      <label for="userId">User ID</label><br>
      <input type="text" name="testId" id="testId">
      <input type="text" nane="testName" id="testName"><br>
      <label for="age">Age</label><br>
      <input type="number" name="testAge" id="testAge"><br>
       <script  type="application/javascript" src="https://unpkg.com/axios/dist/axios.min.js"></script> 
      <button v-on:click="testDb" id="addbtn" >Add</button>
    </form> 
  </div>  -->
</body>
</template>

<script  >
 
//import axios from 'axios' // eslint-disable-line no-unused-vars
//import Vue from 'vue' 

import Button from './components/Button.vue'
//import SignUp from './components/SignUp.vue'// eslint-disable-line no-unused-vars 


    /*   var addbtn;

      var testId;
      var testName;
      var testAge;
      var testSchool;

var example2 = new Vue({ // eslint-disable-line no-unused-vars
  el: 'form',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
   methods: {
    testDb: function (event) { // eslint-disable-line no-unused-vars
      
      addbtn = document.getElementById('addbtn')

      testId = document.getElementById('testId')
      testName = document.getElementById('testName')
      testAge = document.getElementById('testAge')
      testSchool = document.getElementById('testSchool')

      addbtn.addEventListener('click', e =>{  
        e.preventDefault();

        axios({
          method: 'post',
          url: '/save/',
          data: {
            testId: testId.value,
            testName: testName.value,
            testAge: testAge.value,
            testSchool: testSchool.value,


          }
        });

      })
 */
      /* addbtn.addEventListener('click', e =>{  
        e.preventDefault();

         this.$axios
        .post("/save/", {
          testId: testId.value,
          testName: testName.value,
          testAge: testAge.value,
          testSchool: testSchool.value,
        })

    }) */

 /*    }
  } 
}) */    
export default {
  name: 'App',
  components: {
   Button,
  // SignUp
 
  },
    mounted() {
      if (document.getElementById('my-datatable')) return; // was already loaded
      var scriptTag = document.createElement("script");
      scriptTag.src = "./EventListener.js";
      scriptTag.id = "my-datatable";
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
 
}
//import axios from 'axios'


/* 
<link rel="stylesheet" href="./style.css">
<script src="https://unpkg.com/axios/dist/axios.min.js
</head>
<body>
10
11
12
13 <main>
 <form>
<label for="userId">User ID</label><br>
<input type="text" name="userId" id="userId">c
        <label for="firstName">First Name</label><br>
        <innut tvne="text" name"firstName" id="first

<input type="text nane="firstName 10=firstNane"><br>
<label for-"lastName">Last Name</label><br>
<input type="text" name="lastName" id="lastName"><br>
<label for="age">Age</label><br>
<input type-"number" name-"age" id-"age"><br>
<button id="addntn" class-"btn waves-effect waves-light">Add</button>
<button id="updat eBtn" class="btn waves-effect waves light">Update</button>
<bullon id-"removeBtn" class-"btn waves-effect red darkin-1">Remove</button>



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

});  */

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


.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  background-color:rgb(5,68,94, 0.9);
  font-family: 'Roboto', sans-serif;
  /* put your font-family */
  font-size: 18px;
  padding: 20px 0px;
  width: 150px;
  border-radius: 6px;
  overflow: hidden;
}

.effect.effect-5 {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}

.effect.effect-5:before {
  content: "\f054";
  font-family: FontAwesome;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 30px;
  background-color:rgb(5,68,94, 0.7);
  border-radius: 0 50% 50% 0;
  -webkit-transform: scale(0, 1);
          transform: scale(0, 1);
  -webkit-transform-origin: left center;
          transform-origin: left center;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}

.effect.effect-5:hover {
  text-indent: 30px;
}

.effect.effect-5:hover:before {
  -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
  text-indent: 0;
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
   padding-bottom: 475px;
   
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
