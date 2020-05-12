import Vue from 'vue';

export interface IMsgOpts {
  position?: string,
  zIndex?: number,
  closable?: boolean,
  duration?: number,
  onClose?: Function,
}

export interface IDirective {
  show: Function,
  hide: Function,
  remove: Function,
}

declare function install(vue: typeof Vue, options?: IMsgOpts): void

declare const _default: {
  install: typeof install
}
