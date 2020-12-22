<template>
<div class="login-container">
  <van-nav-bar class="app-nav-bar" title="登录" left-arrow @click-left="$router.back()" />
  <van-cell-group>
    <van-field v-model="phone" icon-prefix="icon" left-icon="video" placeholder="请输入手机号" />
    <van-field v-model="sms" center left-icon="smile-o" clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="mini" class="send-btn" round type="primary">发送验证码</van-button>
      </template>
    </van-field>
  </van-cell-group>
  <div class="login-btn-wrap">
    <van-button class="login-btn" type="info" block>登录</van-button>
  </div>

</div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      phone: '',
      sms: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.login-container {
  .send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
    border: none;
   .van-button__text{
      color: #666666;
    font-size: 11px;
   }
  }
  .login-btn-wrap {
    padding: 26px 16px;

    .login-btn {
      background: #6db4fb;
      border: none;
      .van-button__text{
        font-size: 15px;
      }
    }
  }
}
</style>
