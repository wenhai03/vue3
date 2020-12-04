<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h2>
        <slot>
          this is modal
        </slot>
      </h2>
      <button @click="onClick">close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    isOpen: Boolean
  },
  emits: {
    // 'close-modal': (payload: any) => {
    //    return payload.type === 'close'
    // }
    'close-modal': null
  },
  setup(props, context) {
    const onClick = () => {
      context.emit('close-modal')
    }

    return{
      onClick
    }
  }

})
</script>

<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
