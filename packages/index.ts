import Msg from './msg';
import { IMsgOpts } from '../types/index.d';
import './index.scss';

export default {
  install(instance: any) {
    /* eslint-disable no-param-reassign */
    instance.prototype.msg = (msg: string,
      type: string, options?: IMsgOpts) => new Msg(instance).install(msg, type, options);
  },
};

export const Message = {
  success: (msg: string, options?: IMsgOpts) => new Msg('Component').install(msg, 'success', options),
  error: (msg: string, options?: IMsgOpts) => new Msg('Component').install(msg, 'error', options),
  warning: (msg: string, options?: IMsgOpts) => new Msg('Component').install(msg, 'warning', options),
};
