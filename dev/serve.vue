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
  <div id="app" class="m-auto " v-cloak>
    <vue3-reactive-tel-input 
      v-model="phone" 
      :rootClass="[]"
      :rootStyle="{border: 'none',boxSizing: 'border-box'}" 
      :dropdownStyle="{backgroundColor: '#EEEEEE', borderLeft: '1px solid #ced4da',borderTop: '1px solid #ced4da',borderBottom: '1px solid #ced4da'}" 
      :inputStyle="{backgroundColor: '#EEEEEE', border: '1px solid #ced4da'}" 
      :goodInputClass="''" 
      :badInputStyle="'border: 1px solid #025896'" 
      />
      <div class="view overlay">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(3).webp" class="img-fluid " alt="">
          <div class="mask flex-center rgba-red-strong">
              <p class="white-text">Strong overlay</p>
          </div>
      </div>
      <!-- <vue3-reactive-tel-input 
      v-model="phone" 
      :rootClass="[]"
      :rootStyle="{backgroundColor: '#EEEEEE'}" 
      :inputStyle="{backgroundColor: '#EEFFEE'}" 
      :listStyle="{backgroundColor: '#0EEAEE'}" 
      :dropdownStyle="{backgroundColor: '#00EFEE'}" 
      :goodInputClass="''" 
      :badInputClass="''" 
      /> -->
    <span v-text="phone"></span><br/>
    <span v-text="good"></span>
  </div>
</template>
<style scoped>
.vue3-reactive-tel-input:focus-within input.vti__input:focus, input.vti__input:active {
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  border-color: #66afe9; */
    border:none;
    box-shadow: none;
  
}

.vue3-reactive-tel-input input.vti__input:hover {
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  border-color: #66afe9; */
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(24, 52, 98, 1); */
  border: 1px solid #183462;
  
}
</style>