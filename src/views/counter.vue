<template>
  <div>
    <h1>This is a counter app</h1>
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
      counter: 0
    }
  },
  computed: {
    is_disabled () {
      return this.counter <= 0 || this.counter >= 10
    }
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
