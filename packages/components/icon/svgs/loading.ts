export default {
  name: 'loading',
  viewBox: '0 0 50 50',
  class: 't-loading-icon t-loading-wipe',
  defs: `<style>
    .t-loading-icon {
      stroke: #343640;
      stroke-width: 3.5;
      stroke-linecap: round;
      background: none;
      vertical-align: middle;
    }
    .t-loading-icon .t-loading-icon-bg-path{
      fill: none;
      stroke: #F2F2F2;
    }
    .t-loading-icon .t-loading-icon-active-path{
      fill: none;
      stroke: #20a0ff;
      transform-origin: 50% 50%;
    }
    .t-loading-wipe .t-loading-icon-active-path{
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      animation: loading-wipe 1.5s ease-in-out infinite, loading-rotate 2s linear infinite;
    }
   .t-loading-default .t-loading-icon-active-path{
      stroke-dasharray: 60, 150;
      animation: loading-rotate 0.8s linear infinite;
    }

    @keyframes loading-rotate{
      to{transform:rotate(1turn)}
    }
    @keyframes loading-wipe{
      0%{
        stroke-dasharray:1,200;
        stroke-dashoffset:0;
      }
      50%{
        stroke-dasharray:90,150;
        stroke-dashoffset:-40px;
      }
      to{
        stroke-dasharray:90,150;
        stroke-dashoffset:-120px;
      }
    }
  </style>`,
  html: '<circle cx="25" cy="25" r="20" class="t-loading-icon-bg-path"></circle><circle cx="25" cy="25" r="20" class="t-loading-icon-active-path"></circle>',
};
