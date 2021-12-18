


<template>
   
    <button to="" class="effect effect-5">{{text}}</button>
</template>

<script>

    export default{
        name: 'Button',
        props:{
            text:String,
        }
    }
</script>

<style scoped>


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
</style>