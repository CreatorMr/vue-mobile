<template>
  <div class="layout-container">
    <!-- 子路由  二级路由-->
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style>
</style>
