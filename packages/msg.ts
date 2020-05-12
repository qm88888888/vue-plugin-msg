/* eslint-disable no-useless */
import Plugin from './components/template.vue';
import { IMsgOpts } from '../types/index.d';

export default class Msg {
  static instances: Array<Plugin> = [];

  static count: number = 1;

  static containers: any = {};

  static types: Array<string> = ['info', 'success', 'error', 'warning', 'loading'];

  constructor(instance: any) {
    /* eslint-disable no-console */
    if (!instance) console.error('Vue instance is not defined');
  }

  /* eslint-disable class-methods-use-this */
  public install(msg: string, type: string, options: IMsgOpts = {}) {
    /* eslint-disable no-param-reassign */
    if (!Msg.types.includes(type)) {
      console.error(`${type} is not defined, Plase use 'info', 'success', 'error', 'warning', 'loading'`);
      return '';
    }
    const position: string = options.position || 'top-center';
    const containerKey: string = position;
    let contianerEl = Msg.containers[containerKey];

    if (!contianerEl) {
      /* eslint-disable no-multi-assign */
      contianerEl = Msg.containers[containerKey] = document.createElement('div');
      contianerEl.className = [
        't-message-container',
        `is-${position}`,
      ].filter((em: string) => !!em).join(' ');
      document.body.appendChild(contianerEl);
    }

    if (options.zIndex) {
      contianerEl.style.zIndex = options.zIndex;
    }
    /* eslint-disable no-plusplus */
    const id = Msg.count++;
    const instance: any = new Plugin({
      el: document.createElement('div'),
      data: {
        title: msg,
        type,
        ...options,
      },
    });
    instance.id = id;
    instance.containerKey = containerKey;
    if (position.indexOf('bottom') === 0 && contianerEl.firstChild) {
      contianerEl.insertBefore(instance.$el, contianerEl.firstChild);
    } else contianerEl.appendChild(instance.$el);
    instance.show = true;
    Msg.instances.push(instance);
    return instance;
  }
}
