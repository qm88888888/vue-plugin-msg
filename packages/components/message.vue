<template>
  <div class="t-message">
    <div class="t-message-icons" v-if="iconImg || $slots.icon">
      <img :src="iconImg" v-if="iconImg" class="t-message--icon">
      <slot name="icon" v-else></slot>
    </div>
    <div class="t-message-content">
      <div class="t-message--title" v-if="title || $slot.title">
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <div class="t-message-handle">
      <slot name="handle"></slot>
      <button
        v-if="closable"
        @click="closeHandler"
        class="t-message--button t-message--close">
          <svg viewBox="0 0 35 35" width="20" height="20" version="1.1" fill="currentColor">
            <!-- eslint-disable  max-len-->
            <path d="M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z"></path>
          </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Prop,
  Component,
} from 'vue-property-decorator';

@Component
export default class TMessage extends Vue {
  private visable: boolean = true

  @Prop({
    type: String,
    default: '',
  }) title?: string;

  @Prop({
    type: String,
    default: '',
  }) iconImg?: string;

  @Prop({
    type: Boolean,
    default: false,
  }) closable?: boolean;

  @Prop() closeHandler!: Function;
}
</script>

<style lang="scss" scoped>
.t-message {
  position: relative;
  display: flex;
  height: 45px;
  line-height: 37px;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
  overflow: hidden;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, .15);
  color: rgba(0, 0, 0, .65);
  background: rgba(255,255,255,0.95);
  pointer-events: all;
  user-select: none;
  border: 1px solid #ececec;
  &-icons {
    margin-left: 12px;
    float: left;
    box-sizing: border-box;
  }
  &--icon {
    width: 20px;
    height: 20px;
    line-height: 1.4;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
  }
  &--title {
    margin-left: 4px;
    line-height: 1.6;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #777;
    font-weight: normal;
  }
  &-handle {
    position: relative;
    height: 100%;
    align-self: flex-start;
    white-space: nowrap;
    margin-right: -5px;
    margin-left: 10px;
  }
  &--button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: 15px;
    color: #646464;
    font-weight: 600;
    padding: 0px;
    &:hover {
      color: rgb(69, 136, 254);;
    }
  }
}
</style>
