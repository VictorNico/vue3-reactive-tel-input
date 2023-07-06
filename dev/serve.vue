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
      dataphone: null
    }
  },
  computed:{
    phone:{
      get(){
        return this.$store.getters.phone;
      },
      set(value){
        console.log(value)
        this.dataphone = value
        this.$store.dispatch('update_phone',value.formatted)
      }
    },
    good(){
      return this.dataphone ?`(+${this.dataphone.countryCallingCode}) ${this.dataphone.formatted}`:""
    }
  }
});
</script>

<template>
  <div id="app" v-cloak>
    <vue3-reactive-tel-input v-model:value="phone" />
    <span v-text="phone"></span><br/>
    <span v-text="good"></span>
  </div>
</template>
