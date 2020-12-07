<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>

    <form class="validate-form-container">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>

        <validate-input
            type="text"
            class="hello"
            :rules="emailRules"
            v-model="emailVal"
            placeholder="请输入邮箱"
        ></validate-input>

      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
            type="password"
            :rules="passwordRules"
            v-model="passwordVal"
            placeholder="请输入密码"
        ></validate-input>
      </div>
    </form>

  </div>
</template>

<script lang="ts">
import {reactive, ref} from 'vue'
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue'
import ValidateInput, {RulesProp} from '@/components/ValidateInput.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const currentUser: UserProps = {
  isLogin: true,
  nickName: '你好'
}
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default {
  components: {
    GlobalHeader,
    ValidateInput
  },
  inheritAttrs: true,
  setup( ) {
    const emailVal = ref(null)
    const emailRules = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱格式'}
    ]

    const passwordRules = [
      {type: 'required', message: '密码不能为空'}
    ]


    const passwordVal = ref('')

    return {
      currentUser,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
    }
  }
}
</script>
<style>

</style>
