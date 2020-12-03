<template>
  <div id="nav">
    {{count}}
    <br>
    {{double}}
    <br>
    {{greetings}}

    <br>
    {{x}}
    {{y}}

    <br>
    <button @click="increase()">按钮</button>
    <button @click="updateGreeting()">按更新title</button>
  </div>
</template>


<script lang="ts">
import {reactive, computed, ref, watch, toRefs, onMounted, onUpdated, onRenderTriggered, onUnmounted} from 'vue'
import useMousePosition from '@/hooks/useMousePosition'

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers?: number[];
  person?: { name?: string };
}

export default {
  setup() {
    const greetings = ref('1111')

    const updateGreeting = () => {
      console.log('监听 -> ')
      greetings.value += 'hello'
    }

    const {x, y} = useMousePosition()

    console.log('x,y -> ', x,y)


    // 更新时候调用，比如按钮点击了事件
    onUpdated(() => {
      console.log('onUpdated -> ')
    })

    onRenderTriggered((event) => {
      console.log('event -> ', event)
    })


    const state: DataProps = reactive({
      count: 0,
      x,
      y,
      increase: () => state.count++,
      double: computed(() => state.count * 2),
      updateGreeting
    })

    watch([greetings, () => state.count], (newValue, oldValue) => {
      console.log('newValue, oldValue -> ', newValue, oldValue)
      document.title = 'updated' + greetings.value
    })
    return {
      ...toRefs(state),
      greetings
    }

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
