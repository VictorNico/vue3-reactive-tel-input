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
      dataphone: undefined
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
      return (this.dataphone !== undefined?this.dataphone.valid:false) ?`(+${this.dataphone.countryCallingCode}) ${this.dataphone.formatted}`:""
    }
  }
});
</script>

<template>
  <div id="app" v-cloak>
    <vue3-reactive-tel-input v-model="phone" />
    <span v-text="phone"></span><br/>
    <span v-text="good"></span>
  </div>
</template>
