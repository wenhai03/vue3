const Mock = require('mockjs')
let id = Mock.mock('@id')

console.log(id)

let obj = Mock.mock({
  id: '@id', // 随机字符串id
  username: '@cname', // 随机中文名字
  date: '@date', // 日期 年-月-日
  avatar: "@image('200x200','red','#fff','avatar')", // 生成图片
  description: "@paragraph()", // 描述
  ip: "@ip()",// IP地址
  email: "@email()" // email
})
console.log(obj)
