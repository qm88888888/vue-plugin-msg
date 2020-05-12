# 基础使用

类型包括 loading info warning error question success

非loading的使用规则
this.msg(标题，类型，配置选项)

## 配置选项包括

position   出现位置
zIndex     设置z-index
closeable  是否可关闭
duration   持续多长时间
onClose    关闭时的回调

## loading的使用

let loading = this.msg(标题，loading，配置选项)

注意：出 position zIndex onClose之外不建议做任何配置
关闭请使用 loading.close();