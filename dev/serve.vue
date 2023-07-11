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
      <vue3-reactive-tel-input 
            v-model="phone"  
            :rootClass="['field']" 
            :divInputClass="['p-float-label']" 
            :rootStyle="{
              border:'none'
            }" 
            :listStyle="{backgroundColor: 'var(--surface-200)'}" 
            :dropdownStyle="{
              borderBottomLeftRadius: '6px',
              borderTopLeftRadius: '6px',
              background: '#e9ecef',
              color: '#6c757d',
              borderLeft: '1px solid #ced4da',
              borderTop: '1px solid #ced4da',
              borderBottom: '1px solid #ced4da',
              paddingTop: '0.80rem',
              paddingRight: '0.00075rem',
              paddingBottom: '0.80rem',
              paddingLeft: '0.00075rem',
              }"
            :inputStyle="{
              backgroundColor: 'var(--surface-200)',
              border: '1px solid #ced4da',
              borderBottomRightRadius: '6px',
              borderTopRightRadius: '6px',
              height: '100%'
            }"
            :inputId="'phone'" 
            :badInputClass="'border border-danger'" 
            required 
            >
              <label for="phone" >ffdfd</label>
            </vue3-reactive-tel-input>
    <span v-text="phone"></span><br/>
    <span v-text="good"></span>
  </div>
</template>
<style scoped>
.p-inputgroup>.p-component, .p-inputgroup>.p-inputwrapper>.p-inputtext, .p-inputgroup>.p-float-label>.p-component {
    border-radius: 0;
    margin: 0;
}
.p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    -webkit-transition-property: all;
    -o-transition-property: all;
    -moz-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    -moz-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    line-height: 1;
}
</style>