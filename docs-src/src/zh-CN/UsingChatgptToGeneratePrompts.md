# 使用ChatGPT生成提示词

## 打开窗口

1. 鼠标移动到 `使用ChatGPT生成Prompts按钮` 上。

   ![](../assets/images/UsingChatgptToGeneratePrompts/chatgpt_btn.png)

2. 打开窗口。

   ![](../assets/images/UsingChatgptToGeneratePrompts/chatgpt.png)

## 配置ChatGPT

### API Base

1. 官方默认的接口地址是 `https://api.openai.com/v1`
2. 如果你没有访问官网的网络环境，可自行搜索或搭建代理服务器。将代理服务器的地址填入 `API Base`。请注意任何第三方代理服务器都有可能导致你的API
   KEY泄露，或者导致你的隐私泄露。请谨慎使用。
3. 可能有用的一些代理服务器：
   - `https://api.openai-proxy.com/v1`
   - `https://chatai.1rmb.tk/v1`
   - 欢迎补充...

### API KEY

1. 从 [OpenAI](https://platform.openai.com/docs/introduction) 获取你的API KEY。
2. 你可以前往视频平台，比如Youtube，搜索获取API KEY的视频教程。

### Model

1. 选择你需要使用的模型。
2. 每个模型的计费方式不同。
3. 普通账号无法使用 `gpt-4` 模型。

填写完成后，点击 `保存` 按钮，下次打开窗口后无需再次填写。

### 免费的API KEY

> [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) 此 Github 仓库提供了免费的API接口。

1. 该项目提供的 API KEY 每小时限制最多请求120次。
2. 该项目可能随时失效。
3. 该项目提供的 API KEY 无法使用官方的 API Base，请在 API Base 处填写该项目提供的 URL 地址。
   - `https://api.chatanywhere.com.cn`
   - `https://api.chatanywhere.cn`
4. 该项目与本扩展无关，任何使用该项目产生的问题、损失与本作者无关。请自行斟酌！！！

### 免费的账号

- `https://free.openai.bond/`
- `https://djsfenxiang.com/`
- `https://fxmus.fxopenai.xyz/`
- 欢迎补充...

1. 进入这些网站，使用它们提供的账号密码到 [OpenAI](https://platform.openai.com/docs/introduction) 官网登录。
2. 登录后创建一个新的 KEY 并使用。
3. 这些账号可能随时失效。
4. 这些网站均为第三方网站，与本扩展无关，任何使用这些网站产生的问题、损失与本作者无关。请自行斟酌！！！

## 生成Prompts

1. 你可以使用任何语言输入图片描述信息，例如：

   > 一个女孩，她洁若冰霜，莫可逼视，秀美大气，倾国倾城，清韵典雅，淡雅宜人，风致天然，温润如玉，清澈如水，清雅不可方物，眉间如聚霜雪，冰雪出尘之姿，宛如仙女，出落得不食人间烟火，十足是个绝色的美人胚子。

2. 点击 `生成` 按钮。

3. 点击 `使用` 按钮。

   ![](../assets/images/demo.chatgpt.gif)