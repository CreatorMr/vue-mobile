<template>
  <div class="my-container">
    <van-cell-group>
      <van-cell title="单元格" value="内容" center>
        <van-image
          slot="icon"
          round
          width="50"
          height="50"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <vant-button size="small" round>编辑资料</vant-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style></style>
