<template>
  <div>
    <button @click="handleClick('info')">普通</button> <br>
    <button @click="handleClick('error')">错误</button> <br>
    <button @click="handleClick('warning')">警告</button> <br>
    <button @click="handleClick('success')">成功</button> <br>
    <hr>
    <button @click="handleClick('loading')">加载</button> <br>
    <button @click="handleClose()">关闭加载</button> <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {
  private loading: any = null;

  handleClick(type: string) {
    if (this.loading && type === 'loading') return;
    if (type === 'loading') {
      this.loading = this.msg(`这是一条${type}信息`, 'loading');
      return;
    }
    this.msg(`这是一条${type}信息`, type);
  }

  handleClose() {
    if (this.loading) {
      this.loading.close();
      this.loading = null;
    }
  }
}
</script>

<style lang="scss">
#app{
  width: 200px;
  height: 200px;
}
</style>
