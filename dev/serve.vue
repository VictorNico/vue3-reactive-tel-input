<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue3ReactiveTelInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  Vue3ReactiveTelInputSample,
  // }
  data(){
    return {
    }
  },
  computed:{
    phone:{
      get(){
        return this.$store.getters.phone;
      },
      set(value){
        this.$store.dispatch('update_phone',value)
      }
    }
  }
});
</script>

<template>
  <div id="app" v-cloak>
    <vue3-reactive-tel-input v-model:value="phone" />
    <span v-text="phone"></span>
  </div>
</template>
