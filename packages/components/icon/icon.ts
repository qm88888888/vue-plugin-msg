import {
  Vue,
  Component,
  Prop,
} from 'vue-property-decorator';

@Component
export default class TIcon extends Vue {
  private static icons: any = {};

  @Prop({
    required: true,
    type: String,
    default: '',
  }) name!: string;

  @Prop({
    type: String,
    default: '',
  }) color?: string;

  /* eslint-disable no-underscore-dangle */
  get _svg() {
    return TIcon.icons[this.name];
  }

  public static addIcon(name: string, options: any = {}) {
    TIcon.icons[name] = options;
  }

  public static hasIcon(name: string) {
    return !!TIcon.icons[name];
  }

  render(h: any) {
    /* eslint-disable no-underscore-dangle */
    const svg = this._svg;
    if (!svg) {
      /* eslint-disable no-console */
      console.warn(`The name of '${this.name}' could not be found.`);
      return '';
    }
    /* eslint-disable no-nested-ternary */
    const style = {
      color: this.color ? this.color : (svg.fill ? svg.fill : null),
    };
    return h('span', {
      class: `t-svg-icon t-svg-icon--${this.name}`,
    }, [
      h('svg', {
        attrs: {
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: svg.viewBox,
        },
        style,
        class: svg.class || '',
      }, [
        h('defs', {
          domProps: {
            innerHTML: svg.defs,
          },
        }),
        h('path', {
          attrs: {
            fill: 'currentColor',
            d: svg.path,
          },
        }),
        h('g', {
          domProps: {
            innerHTML: svg.defs + svg.html,
          },
        }),
      ]),
    ]);
  }
}
