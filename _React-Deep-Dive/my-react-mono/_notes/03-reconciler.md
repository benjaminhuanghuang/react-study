前端框架提供的运行时核心模块来管理页面状态和更新. 例如 React 中的 Reconciler 和 Vue 中的 Renderer，负责将开发者编写的代码翻译成对应的宿主环境 API 调用，以更新页面。

Reconciler 的中文名叫协调器，它负责处理 React 元素的更新并在内部构建虚拟 DOM，