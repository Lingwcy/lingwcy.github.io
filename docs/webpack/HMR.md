## 在 HMR (Hot Module Replacement) 中，compiler、runtime 和 manifest 之间的协调关系
- compiler:在开发模式下，webpack 会启动 开发服务器（如 webpack-dev-server），并启用 HMR 功能。Compiler 负责监听源代码的变化（例如，文件修改），然后触发构建过程的部分或全量更新。
- runtime:负责处理模块的替换和更新, 当 compiler 检测到某个模块发生变化时，runtime 会通过调用 HMR API 动态地替换掉原有的模块，而不重新加载页面。
- manifest:当 HMR 更新发生时，runtime 会使用 manifest 来查找和更新已修改的模块，确保替换和依赖关系正确。

**具体流程**:

- 代码修改：当你修改代码时，webpack 的 compiler 会检测到文件变化。

- 生成新的模块：compiler 会重新编译修改的模块并生成新的 runtime 代码和新的打包文件。这些新的文件会通过 Webpack 的开发服务器（如 webpack-dev-server）推送到浏览器。

- 运行时加载更新：Runtime 会监听来自服务器的更新消息。当有新的模块或更新的代码到达时，runtime 会使用 manifest 中的模块信息来定位需要替换的模块。runtime 通过 HMR API 更新这些模块，而不是重新加载整个页面。它会使用 Webpack 提供的 module.hot.accept 和 module.hot.dispose 等方法来接管更新操作。

- 模块替换：一旦 runtime 找到需要替换的模块，它就会加载新的版本并进行替换。例如，假设你修改了 moduleA，runtime 会动态地加载新的 moduleA 并替换掉旧的版本，同时保留其他模块的状态。
