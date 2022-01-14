<template>
 <v-container fluid class="bg-aqua bg-home vh-100 overflow-y-hidden"> 
   <!-- <audio ref="audio" controls autoplay class="hidden">
    <source src="@/assets/music/closetothesun.mp3" type="audio/mp3">
    Your browser does not support the audio element.
   </audio> -->
   <v-row align="center" justify="center" class="mt-8">
     <img src="@/assets/images/logo.png" alt="" class="img-logo">
     <img src="@/assets/images/landscape.png" alt="" class="img-landscape">
     <img src="@/assets/images/landscape-bottom-props1.png" alt="" class="img-landscape-props">
     <img src="@/assets/images/cloud1.png" alt="" class="cloud-1">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-2">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-3">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-4">
     <img src="@/assets/images/cloud2.png" alt="" class="cloud-5">
     <img src="@/assets/images/rectangle.png" alt="" class="img-rectangle">
     <img src="@/assets/images/circle.png" alt="" class="img-circle">
     <img src="@/assets/images/cone.png" alt="" class="img-cone">
     <img src="@/assets/images/cube.png" alt="" class="img-cube">
     <div class="playbtn-container">
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
     </div>
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
          <h4 class="mt-5 font-weight-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
            Sed id ducimus nulla quasi distinctio in consequuntur repellendus. Odit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
            Sed id ducimus nulla quasi distinctio in consequuntur repellendus. Odit.</h4>
          <p class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
            Sed id ducimus nulla quasi distinctio in consequuntur repellendus. Odit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
            Sed id ducimus nulla quasi distinctio in consequuntur repellendus. Odit.</p>
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
        <h3 class="color-title mt-4 font-flabby text-uppercase">Designed By</h3>
        <h4 class="mt-5 font-weight-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
          Sed id ducimus nulla quasi distinctio in consequuntur repellendus. Odit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">Special Thanks</h3>
        <h4 class="mt-5 font-weight-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
          Sed id ducimus nulla quasi distinctio in consequuntur repellendus. Odit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
        <h3 class="color-title mt-4 font-flabby text-uppercase">Question Reference</h3>
        <h4 class="mt-5 font-weight-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Quia quod placeat necessitatibus ipsa esse beatae eligendi eos assumenda iure vel. 
          Sed id ducimus nulla quasi distinctio in consequuntur repellendus.</h4>
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
