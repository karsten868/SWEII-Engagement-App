<template>
    <body>
        <div class="poll_container">
            <div id="poll_title" class="inner-container1">
                <h4>Create Poll</h4>
                <input type="text" id="p_text" name="ptext" placeholder="POLL TEXT">
            </div>
            <div id="poptions" class="inner-container2">
                <input type="text" id="poll_option1" name="option1" placeholder="POLL OPTION"><br/>
                <input type="text" id="poll_option2" name="option2" placeholder="POLL OPTION"><br/>
                <div id="additionalOpt">
                </div>
                <button type='button' v-on:click="addInput()" class='btn-floating btn-small waves-effect grey darken-1 btn'><i class='material-icons'>add</i></button>
                
            </div>
        </div>
    </body>
</template>

<script>
    export default{
        name: "Poll",
        data(){
            return{
                pollArray: []
            };
        },
        methods: {
            addInput(){
                var pollSection = document.getElementById("additionalOpt");
                pollSection.innerHTML += `<input type='text' placeholder='POLL OPTION'/>`;
            },
        }
    }

    

</script>

<style scoped>
    .poll_container{
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