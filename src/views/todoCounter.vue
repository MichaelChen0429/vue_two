<template>
  <div class="about">
    <todo @addlist='addlist' @delete1='delete1' msg="Welcome to Your Vue.js App"/>
    <counter @plus='plus' @minus='minus' msg="Welcome to Your Vue.js App"/>
    {{message}}
  </div>
</template>

<script>
import todo from '@/components/todo.vue'
import counter from '@/components/counter.vue'
import Todo from './todo.vue'
import Counter from './counter.vue'

export default {
  name: 'todoCounter',
  components: {
    todo,
    counter
  },
  Counter,
  Todo,
  data () {
    return {
      message: ''
    }
  },
  methods: {
    plus (number) {
      if (number === 10) {
        this.message = '停'
      } else {
        this.message = '可增加'
      }
    },
    minus (number) {
      if (number === 0) {
        this.message = '停'
      } else {
        this.message = '可減少'
      }
    },
    addlist (text) {
      this.message = '已新增一則' + text + '待辦'
    },
    delete1 (text) {
      this.message = '已刪除一則' + text + '待辦'
    }
  }
}
</script>
