# vue3-reactive-tel-input
International Telephone Input with Vue.

[![](https://img.shields.io/npm/dt/vue3-tel-input.svg)](https://www.npmjs.com/package/vue3-reactive-tel-input) [![](https://img.shields.io/github/stars/victorybiz/vue3-tel-input.svg)](https://github.com/VictorNico/vue3-reactive-tel-input)

<p align="center">
<img width="600px" alt="In-action GIF" src="https://thumbs.gfycat.com/EducatedPoliteBluefintuna-size_restricted.gif"/>
</p>

## Documentation and live demo

[Visit the website](https://codesandbox.io/s/interesting-elgamal-xnoqu9)


## Getting started
- Install the plugin:

  ```
  npm i vue3-reactive-tel-input
  ```

- Add the plugin into your app:

  ```javascript
  import { createApp } from 'vue'
  import App from './App.vue'
  import Vue3ReactiveTelInput from 'vue3-reactive-tel-input'

  const app = createApp(App);
  app.use(Vue3ReactiveTelInput);
  app.mount("#app");
  ```

- props
  ```javascript
  function getDefault(key) {
    const value = utils.options[key];
    if (typeof value === 'undefined') {
      return utils.options[key];
    }
    return value;

  }

  props: {
    /**
     * reactive value of the tel input
     */
    modelValue: {
      type: String,
      default: '',
    },
    /**
     * class assign to root when the input number is invalid belong to the country code
     */
    badClass: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * class assign to root when the input number is valid belong to the country code
     */
    goodClass: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * style assign to root when the input number is invalid belong to the country code
     */
    badStyle: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * style assign to root when the input number is valid belong to the country code
     */
    goodStyle: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * class assign when the input number is invalid belong to the country code
     */
    badInputClass: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * class assign when the input number is valid belong to the country code
     */
    goodInputClass: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * style assign when the input number is invalid belong to the country code
     */
    badInputStyle: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * style assign when the input number is valid belong to the country code
     */
    goodInputStyle: {
      type: [String, Array, Object],
      default: '',
    },
    /**
     * list of all contries
     */
    allCountries: {
      type: Array,
      default: () => getDefault('allCountries'),
    },
    /**
     * flag to know if the value will be automatically formatted
     */
    autoFormat: {
      type: Boolean,
      default: () => getDefault('autoFormat'),
    },
    /**
     * customized validation RegExp or flag 
     */
    customValidate: {
      type: [Boolean, RegExp],
      default: () => getDefault('customValidate'),
    },
    /**
     * a default country
     */
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: () => getDefault('defaultCountry'),
    },
    /**
     * flag defining whether the input must be disabled
     */
    disabled: {
      type: Boolean,
      default: () => getDefault('disabled'),
    },
    /**
     * flag definir if we'll automatically choose a default country
     */
    autoDefaultCountry: {
      type: Boolean,
      default: () => getDefault('autoDefaultCountry'),
    },
    /**
     * object of dropdown options
     */
    dropdownOptions: {
      type: Object,
      default: () => getDefault('dropdownOptions'),
    },
    /**
     * list of countries to ignore
     */
    ignoredCountries: {
      type: Array,
      default: () => getDefault('ignoredCountries'),
    },
    /**
     * object of input options
     */
    inputOptions: {
      type: Object,
      default: () => getDefault('inputOptions'),
    },
    /**
     * valid message to display
     */
    invalidMsg: {
      type: String,
      default: () => getDefault('invalidMsg'),
    },
    /**
     * the mode of the input
     */
    mode: {
      type: String,
      default: () => getDefault('mode'),
    },
    /**
     * limit the giving input to only manage your list of contry
     */
    onlyCountries: {
      type: Array,
      default: () => getDefault('onlyCountries'),
    },
    /**
     * the list of preferred countries
     */
    preferredCountries: {
      type: Array,
      default: () => getDefault('preferredCountries'),
    },
    /**
     * the flag defining if the input must only content valid characters
     */
    validCharactersOnly: {
      type: Boolean,
      default: () => getDefault('validCharactersOnly'),
    },
    /**
     * the root default class
     */
    rootClass: {
      type: [String, Array, Object],
      default: () => getDefault('styleClasses'),
    },
    /**
     * the input default class
     */
    inputClass: {
      type: [String, Array, Object],
      default: () => {return ''},
    },
    /**
     * the root default style
     */
    rootStyle: {
      type: [String, Array, Object],
      default: () => {return ''},
    },
    /**
     * the dropdown button style
     */
    dropdownStyle: {
      type: [String, Array, Object],
      default: () => {return ''},
    },
    /**
     * the dropdown list style
     */
    listStyle: {
      type: [String, Array, Object],
      default: () => {return ''},
    },
    /**
     * the input style
     */
    inputStyle: {
      type: [String, Array, Object],
      default: () => {return ''},
    },
    /**
     * the input id 
     */
    inputId: {
      type: [String, Array, Object],
      default: () => {return ''},
    },
    /**
     * the input placeholder
     */
    Placeholder: {
      type: String,
      default: () => {return ''},
    },
  }
  ```

  [More info on installation](#installation)

- Use the `vue3-reactive-tel-input` component:

  ```html
  <!-- component.vue -->
  <template>
    <h1 class="container mb-5 text-black font-bold">vue3-reactive-tel-input</h1>

    <div class="container mt-2">
      <h2 class="text-black font-bold">Using data prop</h2>
      <vue3-reactive-tel-input 
        v-model:value="dataphone" 
        :rootStyle="{backgroundColor: '#EEEEEE'}" 
        :inputStyle="{backgroundColor: '#EEEEEE'}" 
        :listStyle="{backgroundColor: '#0EEAEE'}" 
        :dropdownStyle="{backgroundColor: '#00EFEE'}" 
        />

      <span>data prop: {{ dataphone }}</span
      ><br />
      <span>vuex data prop: {{ vuexphone }}</span>
    </div>
    <div class="container mt-5">
      <h2 class="text-black font-bold">Using vuex data prop</h2>
      <vue3-reactive-tel-input 
        v-model:value="vuexphone" 
        :rootStyle="{backgroundColor: '#EEEEEE'}" 
        :inputStyle="{backgroundColor: '#EEEEEE'}" 
        :listStyle="{backgroundColor: '#0EEAEE'}" 
        :dropdownStyle="{backgroundColor: '#00EFEE'}" 
        />

      <span>data prop: {{ dataphone }}</span><br />
      <span>data prop: {{ fullDataPhoneFormated }}</span><br />
      <span>vuex data prop: {{ vuexphone }}</span><br />
      <span>data prop: {{ fullVuexPhoneFormated }}</span>
    </div>
  </template>
  <script>
    export default {
      name: "App",
      data() {
        return {
          dataphoneObj: null,
          data: '',
          vuexphoneObj: null
        };
      },
      computed: {
        fullDataPhoneFormated(){
          return this.dataphoneObj ?`(+${this.dataphoneObj.countryCallingCode}) ${this.dataphoneObj.formatted}`:""
        },
        fullVuexPhoneFormated(){
          return this.vuexphoneObj ?`(+${this.vuexphoneObj.countryCallingCode}) ${this.vuexphoneObj.formatted}`:""
        },
        vuexphone: {
          get() {
            return this.$store.getters.vuexphone;
          },
          set(value) {
            /** Value structure
             * {
               "countryCallingCode": "237",
                "nationalNumber": "6954490914",
                "number": "+2376954490914",
                "country": {
                    "name": "Cameroon (Cameroun)",
                    "iso2": "CM",
                    "dialCode": "237",
                    "priority": 0,
                    "areaCodes": null
                },
                "countryCode": "CM",
                "valid": false,
                "formatted": "6 95 44 90 914"
            }
          */
            this.vuexphoneObj = value;
            this.$store.dispatch("update_vuexphone", value.formatted);
          },
        },
        dataphone: {
          get() {
            return data;
          },
          set(value) {
            /** Value structure
             * {
               "countryCallingCode": "237",
                "nationalNumber": "6954490914",
                "number": "+2376954490914",
                "country": {
                    "name": "Cameroon (Cameroun)",
                    "iso2": "CM",
                    "dialCode": "237",
                    "priority": 0,
                    "areaCodes": null
                },
                "countryCode": "CM",
                "valid": false,
                "formatted": "6 95 44 90 914"
            }
          */
            this.dataphoneObj = value;
            data = value.formatted;
          },
        },
      },
    };
  </script>

  ```

  ```javascript
  // main.js
  import { createApp } from 'vue'
  import App from './App.vue'
  import Vue3ReactiveTelInput from 'vue3-reactive-tel-input'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap'
  import { createStore } from 'vuex' 

  const vuexModel = {
    state: () => ({
        vuexphone: '620836564',
    }),

    actions: {
        update_vuexphone( { commit },data ){
            commit( 'UPDATE_VUEXPHONE', data );
        }
    },

    mutations: {
        UPDATE_VUEXPHONE( state,payload ){
            state.vuexphone = payload;
        },
    },

    getters: {
        vuexphone( state ){
            return state.vuexphone;
        },
    }
  }

  const store = createStore({
    modules: {
      vuexModel,
    }
    
  })

  createApp(App).use(store).use(Vue3ReactiveTelInput).mount('#app')


  ```

## Installation
### npm
```bash
  npm install vue3-reactive-tel-input
```

Install the plugin into Vue:

```javascript
  import { createApp } from 'vue'
  import App from './App.vue'
  import Vue3ReactiveTelInput from 'vue3-reactive-tel-input'

  const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['NG', 'GH', "GB", "US", "CA"]
  }

  const app = createApp(App);
  app.use(Vue3ReactiveTelInput, VueTelInputOptions); // Define default global options here (optional)
  app.mount("#app");
```
> View all available options in [Props](https://educationlink.github.io/vue-tel-input/documentation/props.html).

Or use the component directly:

```html
  <!-- your-component.vue-->
  <template>
    <vue3-reactive-tel-input v-model:value="phone"></vue3-reactive-tel-input>
  </template>
  <script>
  import { ref } from 'vue'
  import {Vue3ReactiveTelInput} from 'vue3-reactive-tel-input'

  export default {
    components: {
      Vue3ReactiveTelInput,
    },
    data(){
      return {
        phone:'',
      }
    }
  };
  </script>
```

### Browser

```html
<script src="https://unpkg.com/vue3-reactive-tel-input"></script>
```

**If Vue is detected in the Page, the plugin is installed automatically.**

**Otherwise, manually install the plugin into Vue:**

```js
Vue.use(window['vue3-reactive-tel-input']);
```

### Use as a custom field of [vue-form-generator](https://github.com/vue-generators/vue-form-generator)

- Add a component using `vue-form-generator`'s `abstractField` mixin
  ```html
    <!-- tel-input.vue -->
    <template>
      <vue3-reactive-tel-input v-model:value="value"></vue3-reacti-tel-input>
    </template>

    <script>
    import { abstractField } from 'vue-form-generator';

    export default {
      name: 'TelephoneInput',
      mixins: [abstractField],
    };
    </script>
  ```

- Register the new field as a global component
  ```js
    import Vue from 'vue';
    import TelInput from '<path>/tel-input.vue';

    Vue.component('field-tel-input', TelInput);
  ```

- Now it can be used as `tel-input` in schema of `vue-form-generator`
  ```js
  var schema: {
    fields: [{
        type: "tel-input",
        label: "Awesome (tel input)",
        model: "telephone"
    }]
  };
  ```
Read more on `vue-form-generator`'s [instruction page](https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html)


## Changelog
[Go to Github Releases](https://github.com/VictorNico/vue3-reactive-tel-input/releases)

## License

Copyright &copy; 2022 [Viclegrand28](https://github.com/VictorNico).

Released under the [MIT License](https://github.com/VictorNico/vue3-reactive-tel-input/blob/main/LICENSE).

