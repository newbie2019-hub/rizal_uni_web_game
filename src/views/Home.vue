<template>
 <v-container fluid class="bg-aqua bg-home vh-100 overflow-y-hidden"> 
   <!-- <audio ref="audio" controls autoplay class="hidden">
    <source src="@/assets/music/closetothesun.mp3" type="audio/mp3">
    Your browser does not support the audio element.
   </audio> -->
   <v-row align="center" justify="center" class="mt-8">
     <img src="@/assets/images/logo.png" alt="" class="img-logo">
     <img src="@/assets/images/landscape.png" alt="" class="img-landscape">
     <picture>
        <source media="(max-width: 768px)" srcset="@/assets/images/landscape-props-md.png" class="img-landscape-props">
        <img src="@/assets/images/landscape-props.png" alt="Chris standing up holding his daughter Elva" class="img-landscape-props">
      </picture>
     <img src="@/assets/images/cloud1.png" alt="" class="cloud-1">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-2">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-3">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-4">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-5">
     <img src="@/assets/images/rectangle.png" alt="" class="img-rectangle">
     <img src="@/assets/images/circle.png" alt="" class="img-circle">
     <img src="@/assets/images/cone.png" alt="" class="img-cone">
     <img src="@/assets/images/cube.png" alt="" class="img-cube">
     <div class="btn-container">
       <a href="" @click.prevent="startGame">
         <img src="@/assets/images/playbtn.png" alt="" class="img-playbtn d-inline">
       </a>
      <v-layout>
        <a href="" @click.prevent="setAudioVolume" class="mt-n4">
         <img src="@/assets/images/audio.png" alt="" class="img-optionbtn">
        </a>
        <a href="" @click.prevent="dialogCredits = true" class="mt-4 ml-1 mr-1">
         <img src="@/assets/images/creditsbtn.png" alt="" class="img-optionbtn">
        </a>
        <a href="" @click.prevent="dialog = true" class="mt-n4">
         <img src="@/assets/images/aboutbtn.png" alt="" class="img-optionbtn">
        </a>
      </v-layout>
     </div>

     <!-- <div class="playbtn-container">
       <button @click.prevent="startGame" class="btn btn-game rounded-circle">
         <i class="fas fa-play fa-4x ml-2"></i>
       </button>
     </div>
     <div class="btn-container mt-5">
       <div class="mt-n8 ml-n5 mr-1">
        <button v-if="vol == 1" @click.prevent="setAudioVolume" class="btn btn-game pl-5 pr-5 rounded-circle">
          <i class="fas fa-volume-up fa-2x "></i>
        </button>
        <button v-else @click.prevent="setAudioVolume" class="btn btn-game pl-5 pr-5 rounded-circle">
          <i class="fas fa-volume-off fa-2x "></i>
        </button>
       </div>
       <div class="mt-4">
        <button @click.prevent="dialogCredits = true" class="btn btn-game rounded-circle">
          <i class="fas fa-list fa-2x"></i>
        </button>
       </div>
       <div class="mt-n8 mr-n5">
        <button  @click.prevent="dialog = true" class="btn btn-game pl-7 pr-7 rounded-circle">
          <i class="fas fa-question fa-2x "></i>
        </button>
       </div>
     </div> -->
   </v-row>

    <div v-show="dialogGame" class="modal-container">
      <div class="game-modal bg-home">
        <img src="@/assets/images/cube.png" alt="" class="img-cube-modal">
        <img src="@/assets/images/circle.png" alt="" class="img-circle-modal">
        <div class="game-modal--close">
          <button @click.prevent="dialogGame = false" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
        </div>
        <h2 class="color-title text-uppercase font-flabby mt-4">Select an Option</h2>
        <v-layout align-center justify-center column class="mt-8 mb-5">
          <button @click.prevent="pushRoute('geometry')" class="btn btn-game-option btn-game-option--geometry font-flabby rounded-md">Geometry</button>
          <button @click.prevent="pushRoute('algebra')" class="btn btn-game-option btn-game-option--algebra mt-4 font-flabby rounded-md">Algebra</button>
        </v-layout>
      </div>
    </div>

    <div v-show="dialog" class="modal-container">
      <div class="game-modal">
        <div class="game-modal--close">
          <button @click.prevent="dialog = false" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
        </div>
        <h2 class="color-title text-uppercase font-flabby">About</h2>
        <div class="game-modal--content">
          <h4 class="mt-5 font-weight-regular pl-4 pr-4">GEOBRA is derived from the words Geometry and Algebra which are branches of Mathematics. 
            This game aimed to develop high schoolers’ understanding and appreciation for Mathematics through tackling its two major types-Geometry and Algebra. 
            Mathematics can be a little intimidating sometimes especially when letters, different symbols, and functions are included in it. Problems also become much harder to solve. 
            But as you learn the basics, you’ll be more confident in solving difficult mathematical problems. <br/><br/>
            Teachers and parents can utilize this game as an assistive tool for the learning and instruction of their students. 
            In playing this game, earn points by answering the questions and problems with varying levels of difficulty such as easy and intermediate. <br/><br/>
            GEOBRA is a game-based learning platform that features Mathematical questions and problems, developed by a group of 4th year BTVTE-Visual Graphics Design students from Rizal Technological University-Mandaluyong City as compliance for their thesis. <br/><br/>
            Learn more and further elevate your basic knowledge and skills in the subject while having fun!  
          </h4>
        </div>
      </div>
    </div>

   <div v-show="dialogCredits" class="modal-container">
    <div class="game-modal">
      <div class="game-modal--close">
        <button @click.prevent="dialogCredits = false" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
      </div>
      <h2 class="color-title text-uppercase font-flabby">Credits</h2>
      <div class="game-modal--content">
        <h3 class="color-title mt-4 font-flabby text-uppercase">Game Designer</h3>
        <h4 class="mt-1 font-weight-regular">JESSIE REPOLLO</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">UI Designer</h3>
        <h4 class="mt-1 font-weight-regular">ROMEO BRYAN BOLONIA</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">Sound Designer</h3>
        <h4 class="mt-1 font-weight-regular">JESSE VIRAY JR.</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">UI Designer</h3>
        <h4 class="mt-1 font-weight-regular">ROMEO BRYAN BOLONIA</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">Artists</h3>
        <h4 class="mt-1 font-weight-regular">JHAN ESTEVINTH DIAZ <br/> CRIZZA ELAINE ILUSTRE <br/> MARIBEL TROPEL</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">SPECIAL THANKS</h3>
        <h4 class="mt-1 font-weight-regular">
          RODOLFO ALDEON JR. 
          <br/><span class="font-weight-bold"><small>PROFESSOR</small></span><br/> 
          KENNETH MARTINEZ
          <br/><span class="font-weight-bold"><small>THESIS ADVISER </small></span>
        </h4>
        <h5 class="mt-6 font-weight-regular pl-5 pr-5">A RESEARCH PROPOSAL PRESENTED TO THE FACULTY OF THE
          COLLEGE OF EDUCATION RIZAL TECHNOLOGICAL UNIVERSITY,
          BONI AVENUE, MANDALUYONG CITY <br/><br/>IN PARTIAL FULFILLMENT OF THE REQUIREMENTS FOR
          THE DEGREE OF BACHELOR OF TECHNICAL-VOCATIONAL TEACHERS EDUCATION MAJOR IN 
          VISUAL GRAPHICS DESIGN
          <br/><br/>
          S.Y. 2021-2022

        </h5>
      </div>
    </div>
   </div>

 </v-container>
</template>

<script>
 // @ is an alias to /src

 export default {
  name: 'Home',
  data(){
    return {
      vol: 1,
      dialog: false,
      dialogCredits: false,
      dialogGame: false
    }
  },
  mounted(){
    document.title = 'Welcome to Geometry - Algebra '
  },
  methods: {
    startGame(){
      // this.$refs.audio.play()
      // this.dialog = true
      this.dialogGame = true
      console.log('clicked')
    },
    setAudioVolume(){
      this.vol = this.$refs.audio.volume
      if(this.vol == 1){
        this.$refs.audio.volume = 0
        this.vol = 0
      }
      else {
        this.$refs.audio.volume = 1
        this.vol = 1
      }
    },
    pushRoute(data){
      this.dialogGame = false
      this.$router.push(`/${data}`)
    }
  },
  components: {},
 };
</script>
