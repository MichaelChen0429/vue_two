<template>
  <div>
    <h1>counter</h1>
  </div>
  <div id="center">
    <button v-on:click="minus()" class="whf1">-</button>
    <button v-bind:class='{disable: is_disabled}' class="whf2" >{{ counter }}</button>
    <button v-on:click="plus()" class="whf3">+</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      counter: null
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/counter')
      .then(response => (this.counter = response.data.counter[0].number_now))
    // axios.put('http://127.0.0.1:8000/api/counter/10', this.counter)
  },
  computed: {
    is_disabled () {
      return this.counter <= 0 || this.counter >= 10
    }
  },
  // created: function () {
  //   this.getData()
  // },
  methods: {
    minus: function () {
      if (this.counter > 0) {
        this.counter = this.counter - 1
      }
      axios({
        method: 'patch',
        url: 'http://127.0.0.1:8000/api/counter/10',
        data: {
          number_now: this.counter
        }
      })
    },
    plus: function () {
      if (this.counter < 10) {
        this.counter = this.counter + 1
      }
      axios({
        method: 'patch',
        url: 'http://127.0.0.1:8000/api/counter/10',
        data: {
          number_now: this.counter
        }
      })
    }
    // getData: function () {
    //   var apiURL = 'http://127.0.0.1:8000/api/counter'
    //   var xhr = new XMLHttpRequest()
    //   var self = this
    //   xhr.open('GET', apiURL)
    //   console.log(xhr.open('GET', apiURL))
    //   xhr.onload = function () {
    //     self.counter = xhr.responseText
    //   }
    //   xhr.send()
    // }
  }
}
</script>
<style scoped>
  #center {
    text-align: center;
}
.whf1 {
    width:40px;
    height:40px;
    font-size:20px;
}
.whf2 {
    width:80px;
    height:40px;
    font-size:20px;
}
.whf3 {
    width:40px;
    height:40px;
    font-size:20px;
}
.disable{
  background-color: #faa
}
</style>
