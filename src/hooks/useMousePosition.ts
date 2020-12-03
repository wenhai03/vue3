import {ref, onMounted, onUnmounted} from 'vue'

function useMousePosition () {
    const x = ref(0)
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
        console.log('e -> ', e)
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        document.addEventListener('click', updateMouse)
        console.log('mounted -> ')
    })
    onUnmounted(() => {
        console.log('onUnmounted -> ')
        document.removeEventListener('click', updateMouse)
    })
    return {x, y}
}

export default useMousePosition
