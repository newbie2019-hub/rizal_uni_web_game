<template>
 <v-container fluid class="bg-geometry bg-home vh-100 h-100"> 
    <!-- class="bg-geometry bg-home vh-100" -->
  <!-- <v-row align="center" justify="center" class="mt-8">
   <h1 class="font-flabby letter-spacing-2x">Geometry</h1>
  </v-row> -->
  <v-row v-if="difficulty" class="text-center vh-100" justify="center" align="center">
    <v-layout column align-center>
      <v-col md="10" sm="10" lg="7" xl="5" >
        <v-layout justify-space-between>
          <p class="white--text text-h5">{{`Score: ${points}`}}</p>
          <p class="white--text text-h5">{{`${questionIndex + 1} / ${data.length}`}}</p>
        </v-layout>
        <v-progress-linear class="border-white rounded-xl" :value="time" height="17" color="yellow lighten-1" rounded></v-progress-linear>
        <img v-if="data.length > 0" class="mt-5 img-geometry" :src="require(`../assets/images/questions/geometry/${data[questionIndex].img}` )" alt="">
        <!-- <div class="rectangle-shadow"></div> -->
        <h2 v-if="data.length > 0" class="white--text font-flabby font-weight-regular mt-3">{{data[questionIndex].question}}</h2>
        <v-layout v-if="data.length > 0" d-flex align-center justify-center class="mt-4">
          <button @click.prevent="checkAnswer('a')" class="btn btn-game-choice rounded-xl font-flabby pt-2 pb-2 mr-4">
            <v-icon v-show="isCorrect == 'a'" color="light-green darken-1" class="mr-2">mdi-check-all</v-icon>
            {{data[questionIndex].choices.a}}
          </button>
          <button @click.prevent="checkAnswer('b')" class="btn btn-game-choice rounded-xl font-flabby pt-2 pb-2">
            <v-icon v-show="isCorrect == 'b'" color="light-green darken-1" class="mr-2">mdi-check-all</v-icon>
            {{data[questionIndex].choices.b}}
          </button>
        </v-layout>
        <v-layout  v-if="data.length > 0" d-flex align-center justify-space-between class="mt-2">
          <button @click.prevent="checkAnswer('c')" class="btn btn-game-choice rounded-xl font-flabby pt-2 pb-2 mr-4">
            <v-icon v-show="isCorrect == 'c'" color="light-green darken-1" class="mr-2">mdi-check-all</v-icon>
            {{data[questionIndex].choices.c}}
          </button>
          <button @click.prevent="checkAnswer('d')" :class="{'mr-4' : difficulty == 'intermediate'}" class="btn btn-game-choice rounded-xl font-flabby pt-2 pb-2">
            <v-icon v-show="isCorrect == 'd'" color="light-green darken-1" class="mr-2">mdi-check-all</v-icon>
            {{data[questionIndex].choices.d}}
          </button>
          <button v-if="difficulty == 'intermediate'" @click.prevent="checkAnswer('e')" class="btn btn-game-choice rounded-xl font-flabby pt-2 pb-2">
            <v-icon v-show="isCorrect == 'e'" color="light-green darken-1" class="mr-2">mdi-check-all</v-icon>
            {{data[questionIndex].choices.e}}
          </button>
        </v-layout>
      </v-col>
    </v-layout>
  </v-row>

  
  <div v-show="dialogGameDifficulty" class="modal-container">
    <div class="game-modal bg-home">
      <img src="@/assets/images/cube.png" alt="" class="img-cube-modal">
      <img src="@/assets/images/circle.png" alt="" class="img-circle-modal">
      <div class="game-modal--close">
        <button @click.prevent="returnHome" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
      </div>
      <h2 class="color-title text-uppercase font-flabby mt-4">Geometry</h2>
      <h3 class="color-title text-uppercase font-flabby mt-8">Choose Difficulty</h3>
      <v-layout align-center justify-center class="mt-4 mb-2">
        <v-col lg="10">
          <button @click.prevent="setGame('easy')" class="btn btn-game-option btn-game-option--geometry font-flabby rounded-md w-100">Easy</button>
          <button @click.prevent="setGame('intermediate')" class="btn btn-game-option btn-game-option--algebra mt-4 font-flabby rounded-md w-100">Intermediate</button>
        </v-col>
      </v-layout>
    </div>
  </div>

  <div v-show="dialogScore" class="modal-container-score">
    <div class="gamescore-modal">
      <div class="gamescore-modal--close">
        <button @click.prevent="returnHome" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
      </div>
      <div class="gamescore-modal--content font-flabby">
        <h2 class="text-uppercase font-flabby mt-9 brown--text text--darken-2">Score</h2>
        <h1 class="text-uppercase font-flabby mt-3 font-score brown--text text--darken-1">{{points}}!</h1>
        <h2 class="mt-5 font-weight-regular brown--text text--darken-2">That's Great</h2>
        <hr class="hr-divider mt-5">
        <h3 class="mt-4 brown--text text--darken-2">Questions you got right</h3>
        <h1 class="mt-3 brown--text text--darken-2">{{`${score} of ${data.length}`}}</h1>
      </div>
    </div>
    <div class="align-center mt-5 d-flex ">
      <button @click.prevent="resetGame" class="btn rounded-circle btn-game me-2 pa-4">
        <i class="fas fa-list fa-2x"></i>
      </button>
      <button @click.prevent="returnHome" class="btn rounded-circle btn-game me-2 pa-4">
        <i class="fas fa-home fa-2x"></i>
      </button>
      <button @click.prevent="restartGame" class="btn rounded-circle btn-game pa-4">
        <i class="fas fa-redo-alt fa-2x invert-icon"></i>
      </button>
    </div>
  </div>

  <div v-show="dialogEasy" class="modal-container">
    <div class="gamemode-modal">
      <!-- <div class="gamemode-modal--close">
        <button @click.prevent="dialog = false" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
      </div> -->
      <h2 class="color-title text-uppercase font-flabby">Name That Shape</h2>
      <div class="gamemode-modal--content">
        <h4 class="mt-5 font-weight-regular">You'll have 10 seconds to <br/> answer each question. <br/><br/> Name what type of Geometric <br/> shape is shown. <br/><br/> Choose your answer among <br/>the choices.</h4>
      </div>
      <div class="gamemode-modal--btn">
        <button @click.prevent="startGame" class="btn btn-game rounded-xl pt-2 pb-2 font-flabby text-uppercase">Start</button>
      </div>
    </div>
  </div>

  <div v-show="dialogIntermediate" class="modal-container">
    <div class="gamemode-modal">
      <!-- <div class="gamemode-modal--close">
        <button @click.prevent="dialog = false" class="btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle">X</button>
      </div> -->
      <h2 class="color-title text-uppercase font-flabby">Finding the Area</h2>
      <div class="gamemode-modal--content">
        <h4 class="mt-5 font-weight-regular">You'll have 25 seconds to <br/> answer each question. <br/><br/> Find the area of the given <br/>shape and dimension <br/><br/> Choose your answer among <br/>the choices.</h4>
      </div>
      <div class="gamemode-modal--btn">
        <button @click.prevent="startGame" class="btn btn-game rounded-xl pt-2 pb-2 font-flabby text-uppercase">Start</button>
      </div>
    </div>
  </div>
 </v-container>
</template>
<script>
import geoInterData from '../assets/js/geometry-inter.json'
import geoEasyData from '../assets/js/geometry-easy.json'

export default {
 data() {
  return {
   dialogScore: false,
   dialogGameDifficulty: true,
   dialogEasy: false,
   dialogIntermediate: false,
   difficulty: null,
   score: 0,
   points: 0,
   questionIndex: 0,
   total: 10,
   questionId: 1,
   data: [],
   jsonData: [],
   time: 100,
   timer: null,
   isRunTime: true,
   difficultyTimer: null,
   isCorrect: null,
  }
 },
 mounted(){
   document.title = "Geometry - Web App"
 },
 methods: {
   setGame(data){
    this.difficulty = data
    this.jsonData = this.difficulty == 'easy' ? geoEasyData : geoInterData
    this.difficultyTimer = this.difficulty == 'easy' ? 95 : 240
    
    const array = Array(10).fill().map(() => Math.floor(Math.random() * 49) + 1); 
    this.jsonData.map(data => {
      array.forEach(val => {
        if(data.questionId == val){
        this.data.push(data)
        }
      })
    })

    this.dialogGameDifficulty = false
    this.difficulty == 'easy' ? this.dialogEasy = true : this.dialogIntermediate = true
  },
  startGame(){
    this.dialogEasy = false
    this.dialogIntermediate = false
    setTimeout(() => {
      this.runTimer()
    }, 1500)
  },
  resetGame(){
    this.dialogScore = false
    this.time = 100
    this.points = 0
    this.score = 0
    this.questionIndex = 0
    this.dialogGameDifficulty = true
    this.data = []
  },
  restartGame(){
    this.data = []
    this.setGame(this.difficulty)
    this.dialogScore = false
    this.time = 100
    this.points = 0
    this.score = 0
    this.questionIndex = 0
    this.startGame()
  },
  returnHome(){
    this.$router.push('/')
  },
  runTimer(){
    //Divide time in s by 100 percent
    this.timer = setInterval(() => {
      if(this.isRunTime){
        if(this.time != 0){
          if(this.questionIndex == 10){
            console.log('Ended')
            this.dialogScore = true
            clearInterval(this.timer)
          }
          else {
            this.time--
          }
        }
        else {
          let index = this.questionIndex
          if((index + 1) == 10){
            this.dialogScore = true
            console.log('Ended')
            clearInterval(this.timer)
          }
          else {
            this.time = 100
            this.isRunTime = false
            this.questionIndex++
            setTimeout(() => {
              this.isRunTime = true
            }, 800)
          }
        }
      }
    }, this.difficultyTimer)
  },
  checkAnswer(data){
    if(this.data[this.questionIndex].correctAnswer == data){
      this.score++
      this.isCorrect = data
      this.points = this.points + parseInt(this.data[this.questionIndex].points)
      // console.log('Correct Answer')
    }

    setTimeout(() => {
      this.isCorrect = null
      let index = this.questionIndex
      if((index + 1) != 10){
        this.questionIndex++
        this.isRunTime = false
        this.time = 100
      }
      else {
        this.dialogScore = true
        clearInterval(this.timer)
      }
    }, 700)
    
    setTimeout(() => {
      this.isRunTime = true
    }, 1000)
  },
  // async storeQuestion(){
  //   this.inputs.questionId = this.questionId
  //   const res = await firebase.firestore().collection('questions-intermediate').add(this.inputs)
  //   console.log(res)
  //   this.$refs.questionForm.reset()
  //   this.inputs.question = 'Calculate the area of the square by plugging in the value of the side length (a) in the formula Area = a2'
  //   this.questionId++
  // }
 }
}
</script>