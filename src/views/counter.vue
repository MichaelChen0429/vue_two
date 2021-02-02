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
export default {
  data () {
    return {
      counter: []
    }
  },
  computed: {
    is_disabled () {
      return this.counter <= 0 || this.counter >= 10
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    minus: function () {
      if (this.counter > 0) {
        this.counter = this.counter - 1
      }
    },
    plus: function () {
      if (this.counter < 10) {
        this.counter = this.counter + 1
      }
    },
    getData: function () {
      var apiURL = '127.0.0.1:8000/api/counter'
      var xhr = new XMLHttpRequest()
      // var self = this
      xhr.open('GET', apiURL)
      console.log(xhr.open('GET', apiURL))
      // xhr.onload = function () {
      //   self.counter = xhr.responseText
      // }
      xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            // self.counter = this.responseText
            console.log(this.responseText)
          } else {
            console.log(this.status, this.statusText)
          }
        }
      }
      xhr.send()
    }
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
