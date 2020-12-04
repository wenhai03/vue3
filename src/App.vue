<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>

    <column-list :list="list"></column-list>

  </div>
</template>

<script lang="ts">
import ColumnList, {ColumnProps} from '@/components/ColumnList.vue'
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import {reactive, computed, ref, watch, toRefs, onUpdated, onRenderTriggered} from 'vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
  }
]
const currentUser: UserProps = {
  isLogin: true,
  nickName: '你好'
}


export default {
  components: {
    ColumnList,
    GlobalHeader
  },
  setup( ) {
    return {
      list: testData,
      currentUser
    }
  }
}
</script>
<style>

</style>
