<template>
  <transition name="t-message-fade" mode="in-out">
    <div class="t-message-wrap" v-show="show"
      :class="wrapperClassName"
    >
      <TMessage
        :class="[type && 't-message-' + type, className ]"
        :title="title"
        :closable="closable"
        :closeHandler="close"
      >
        <template slot="icon">
          <img v-if="iconImg" :src="iconImg" class="t-message--icon"/>
          <TIcon v-else-if="type" :name="type" class="t-message--icon"/>
        </template>
      </TMessage>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TMessage from './message.vue';
import TIcon from './icon';

@Component({
  components: {
    TMessage,
    TIcon,
  },
})
export default class MessageTemp extends Vue {
  private show: boolean = false;

  private className: string = '';

  private wrapperClassName: string = '';

  private type: string = 'info';

  private title: string = '欢迎使用TMessage !';

  private closable: boolean = false;

  private iconImg: string = '';

  private duration: number = 2800;

  private timer: any = null;

  private onClose?: Function;

  // 关闭之后的回调
  close() {
    this.show = false;
    if (this.onClose) this.onClose(this);
    this.$el.addEventListener('animationend', () => this.$destroy());
  }

  // 开始计数器
  startTimer() {
    if (this.duration > 0 && this.type !== 'loading') {
      this.timer = setTimeout(() => {
        if (this.show) this.close();
      }, this.duration);
    }
  }

  mounted() {
    if (this.type !== 'loading') this.startTimer();
  }

  // 删除dom元素
  destroyed() {
    if (this.timer) clearTimeout(this.timer);
    const pdom: any = this.$el.parentNode;
    pdom.removeChild(this.$el);
  }
}
</script>

<style lang="scss" scoped>
.t-message-wrap {
  display: inline-block;
  max-width: 500px;
  &+& {
    margin-top: 15px;
  }
  &::before, &::after{
    content: '';
    clear: both;
    display: table;
  }
}
.t-message-fade-enter-active {
  animation: t-message-fade-in-down 0.3s;
}
.t-message-fade-leave-active {
  animation: t-message-fade-out 0.3s;
}
@keyframes t-message-fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes t-message-fade-out {
  0% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: -45px;
  }
}
</style>
