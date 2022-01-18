<template>
  <v-app>
    <transition name="scale" mode="out-in">
      <router-view/>
    </transition>
  </v-app>
</template>
<script>

export default{
  mounted(){
    
  }
}
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: .7;
  transform: scale(0.9);
}
</style>
