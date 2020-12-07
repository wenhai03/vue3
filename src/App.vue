<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>

    <validate-form @form-submit="onFormSubmit" class="validate-form-container">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>

        <validate-input
            type="text"
            class="hello"
            :rules="emailRules"
            v-model="emailVal"
            placeholder="请输入邮箱"
            ref="inputRef"
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

<!--      <template v-slot:submit>-->
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>

  </div>
</template>

<script lang="ts">
import {reactive, ref} from 'vue'
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue'
import ValidateInput, {RulesProp} from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const currentUser: UserProps = {
  isLogin: true,
  nickName: '你好'
}
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default {
  components: {
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  inheritAttrs: true,
  setup( ) {
    const emailVal = ref(null)
    const inputRef = ref<any>('123')
    const emailRules = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱格式'}
    ]

    const passwordRules = [
      {type: 'required', message: '密码不能为空'}
    ]


    const passwordVal = ref(null)

    const onFormSubmit =(result: boolean) => {
        console.log('result', inputRef.value.validateInput())
    }

    return {
      currentUser,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onFormSubmit,
      inputRef
    }
  }
}
</script>
<style>

</style>
