<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <!-- 表单验证 -->

    <van-form
      @submit="onSubmit"
      :show-erro="false"
      :show-error-message="false"
      ref="login-form"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="icon"
        left-icon="video"
        name="手机号"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.sms"
        center
        left-icon="smile-o"
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :rules="formRules.sms"
      >
        <template #button>
          <van-count-down
            ref="countDown"
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            size="mini"
            class="send-btn"
            round
            type="primary"
            :loading="isSendSmsLoading"
            @click.prevent="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" type="info" block native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '../../api/user.js'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        sms: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          {
            pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        sms: [{ required: true, message: '验证码不能为空' }]
      },
      isCountDownShow: false,
      isSendSmsLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onFailed (error) {
      console.log(error)
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    async onSendSms () {
      try {
        const validate = await this.$refs['login-form'].validate('手机号')
        console.log(validate, '发送验证码')
        this.isSendSmsLoading = true // 先loading
        // 发接口
        this.isCountDownShow = true
      } catch (error) {
        console.log('验证失败', error)
      }
      this.isSendSmsLoading = false
    },
    async onSubmit (values) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0 // 持续展示 toast
      })
      try {
        const res = await login(this.user)
        console.log(res, 'data')
        this.$toast.success('登录成功')
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    border: none;

    .van-button__text {
      color: #666666;
      font-size: 11px;
    }
  }

  .login-btn-wrap {
    padding: 26px 16px;

    .login-btn {
      background: #6db4fb;
      border: none;

      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
