<template>
  <div id="nav">
    <Suspense>
      <template #default>
        <div>
          <async-show />
          <dog-show />
        </div>
      </template>
      <template #fallback>
        loading loading
      </template>
    </Suspense>
    <br>
    {{ count }}
    <br>
    {{ double }}
    <br>
    {{ greetings }}
    <br>

<!--    <Modal :isOpen="modalIsOpen" @close-modal="onModalClose"> My Modal</Modal>-->
    <my-modal :isOpen="modalIsOpen" @close-modal="onModalClose"></my-modal>
    <br>
    <h1 v-if="loading">Loading!...</h1>
    <img width="200" v-if="loaded" :src="result[0].url" />

    <br>
    {{ x }}
    {{ y }}

    <br>
    <button @click="onModalOpen">open modal</button>
    <button @click="increase()">按钮</button>
    <button @click="updateGreeting()">按更新title</button>
  </div>
</template>


<script lang="ts">
import {reactive, computed, ref, watch, toRefs, onUpdated, onRenderTriggered} from 'vue'
import useMousePosition from '@/hooks/useMousePosition'
import {useURLLoader} from '@/hooks/useURLLoader'
import MyModal from './components/Modal.vue'
import AsyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers?: number[];
  person?: { name?: string };
}

interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default {
  components: {
    MyModal,
    DogShow,
    AsyncShow
  },
  setup() {
    const greetings = ref('1111')

    const updateGreeting = () => {
      console.log('监听 -> ')
      greetings.value += 'hello'
    }

    const {x, y} = useMousePosition()
    console.log('useURLLoader -> ', )
    // const r = useURLLoader('https://dog.ceo/api/breeds/image/random')
    // const {result, loaded, loading} = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    const {result, loaded, loading} = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')

    watch(result, () => {
       if (result.value) {
         console.log('value -> ', result.value[0].url)
       }
    })

    const modalIsOpen = ref(false)

    const onModalClose = () => {
      modalIsOpen.value = false
    }

    const onModalOpen = () => {
      modalIsOpen.value = true
    }

    // 更新时候调用，比如按钮点击了事件
    onUpdated(() => {
      // console.log('onUpdated -> ')
    })

    onRenderTriggered((event) => {
      // console.log('event -> ', event)
    })

    const state: DataProps = reactive({
      count: 0,
      x,
      y,
      increase: () => state.count++,
      double: computed(() => state.count * 2),
      updateGreeting,
      result,
      loaded,
      loading,
      modalIsOpen,
      onModalOpen,
      onModalClose,
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
