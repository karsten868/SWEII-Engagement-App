
<template>
    <body>
        <div class="quiz_container">
            <div id="quiz_title" class="inner-container1">
                <h4>Create Quiz</h4>
                <input type="text" id="q_title" name="title" placeholder="QUIZ TITLE">
            </div>
            <div id="question" class="inner-container2">
                <h4>Question</h4>
                <button class="waves-effect grey darken-1 btn" type="Button" v-on:click="saveQuestion">Save for Later</button>
                <button class="waves-effect grey darken-1 btn">Present Now</button>
                <button class="waves-effect grey darken-1 btn">Add Question</button>
                <button class="waves-effect grey darken-1 btn">Next</button>
                <button class="waves-effect grey darken-1 btn">Back</button>
                <br/>

                <input type="text" id="question_text" name="question" placeholder="QUESTION TEXT"><br/>
                
                <label for="question_type">Question Type: </label>

                <div class="input-field">
                    <select name="q_type" @change="choiceSelect($event)"  id="question_type" required="required" class="browser-default" >
                        <option value="" disabled selected>Choose a question type</option>
                        <option value="multiple choice">Multiple Choice</option>
                        <option value="short answer">Short Answer</option>
                    </select>
                </div>
                <div id="answer">
                    <div v-if="type === 'multiple choice'">
                        <input id="correct" type="text" placeholder="Correct Answer"/> 
                        <input id="incorrect" type="text" placeholder="Incorrect Answer"/> 
                        <div id="extra_choices"></div>
                        <button type='button' @click="addInput" class='btn-floating btn-small waves-effect grey darken-1 btn'><i class='material-icons'>add</i></button>`
                    </div>
                    <div v-if="type === 'short answer'">
                        <input id='short_answer' type='text' placeholder='Answer'/>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    export default{
        name: "Quiz",
        data(){
            return{
                questionArray: [],
                type: ""
            };
        },
        methods: {
            addMcqChoice: function(){
                var answerSection = document.getElementById("answer");
                answerSection.innerHTML="<input type='text'/>";
            },

            addInput: function(){
                var answerSection1 = document.getElementById("extra_choices");
                answerSection1.innerHTML += `<input type='text'placeholder='Incorrect Answer'/>`;
            },

            choiceSelect(event){
                var val = event.target.value;
                this.type = val;
                console.log(val);
            },
            
            saveQuestion: function(){
                var sel = document.getElementById('question_type');
                var val = sel.options[sel.selectedIndex].text;
                console.log(val);
                var qTitle = document.getElementById('q_title').value;
                var quest = document.getElementById('question_text').value;
                console.log(qTitle);
                console.log(quest);
                var obj = {
                    "title": qTitle,
                    "question": quest,
                    "q_type": val
                };
                this.questionArray.push(obj);
                
                alert('Question saved for later!')
            }
        }
    }

    

</script>

<style scoped>
    .quiz_container{
        border-style: solid;
        margin-top: 20px;
        margin: auto;
        padding: 20px;
        height: auto;
        width: 60%;
        background-color: darkgrey;

    }

    .inner-container1{
        border-style: solid;
        margin: 20px;
        padding: 20px;
        height: auto;
        background-color: white;
    }

    .inner-container2{
        border-style: solid;
        margin: 20px;
        padding: 20px;
        height: auto;
        background-color: white;
    }

    .waves-effect grey darken-1 btn{
        margin: 20px;
    }
    
</style>