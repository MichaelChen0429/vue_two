<template>
<div id="todo">
  <div id="title">to do</div>
  <input class="content" v-model='newadd'><button class="but" v-on:click="addlist">add</button>
  <ul v-for ="(item,index) in todolist" :key='index' id="ul">
   <li>
     <input class="inp" v-model= item.name>
     <div>{{ item }}</div>
     <button v-on:click="delete1(index)">delete</button>
     <button v-on:click="store(index)">ok</button>
   </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newadd: '',
      todolist: []
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/todo')
      .then(response => (this.todolist = response.data.todo))
  },
  methods: {
    addlist: function () {
      let iterator = this.todolist.length
      if (iterator === 0) {
        iterator = 1
      } else {
        iterator = this.todolist[this.todolist.length - 1]
      }
      console.log(iterator)
      var newid = iterator.id + 1
      this.todolist.push(
        {
          name: this.newadd,
          id: newid
        }
      )
      var self = this
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/todo',
        data: {
          name: self.newadd
        }
      })
      this.newadd = ''
    },
    delete1: function (index) {
      var iterator = this.todolist.slice(index)
      var now = iterator.values()
      var nowdelete = now.next().value.id
      console.log(nowdelete)
      axios({
        method: 'delete',
        url: 'http://127.0.0.1:8000/api/todo' + '/' + nowdelete
      })
      this.todolist.splice(index, 1)
    },
    store: function (index) {
      var iterator = this.todolist.slice(index)
      var now = iterator.values()
      var editid = now.next().value.id
      var iterator1 = this.todolist.slice(index)
      var now1 = iterator1.values()
      var edit = now1.next().value.name
      axios({
        method: 'patch',
        url: 'http://127.0.0.1:8000/api/todo' + '/' + editid,
        data: {
          name: edit
        }
      })
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
