<template>
<div id="todo">
  <div id="title">to do</div>
  <input class="content" v-model='newadd'><button class="but" v-on:click="addlist">add</button>
  <ul v-for ="(item,index) in todolist" :key='index' id="ul">
   <li><input class="inp" v-model="item.todo">
     <button v-on:click="delete1(index)">delete</button>
   </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      newadd: '',
      todolist: [
        { todo: '吃飯' }
      ]
    }
  },
  methods: {
    addlist: function () {
      this.todolist.push(
        {
          todo: this.newadd
        }
      )
      this.$emit('addlist', this.newadd)
      this.newadd = ''
      // this.$emit('addlist', this.todo)
    },
    delete1: function (index) {
      var iterator = this.todolist.slice(index)
      var now = iterator.values()
      // console.log(now.next().value.todo)
      this.$emit('delete1', now.next().value.todo)
      this.todolist.splice(index, 1)
    }
  }
}
</script>
<style scoped>
  #title{
    font-weight:bold;
    font-size:30px;
  }
  .content{
    width:100px;
  }
  .inp{
    border-style:none
  }
  #ul{
    display: flex;
    justify-content: center;
  }
</style>
