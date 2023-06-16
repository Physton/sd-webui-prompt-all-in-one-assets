# 使用ChatGPT生成提示詞

## 打開窗口

1. 滑鼠移動到 `使用ChatGPT生成Prompts按鈕` 上。

   ![](../assets/images/UsingChatgptToGeneratePrompts/chatgpt_btn.png)

2. 打開視窗。

   ![](../assets/images/UsingChatgptToGeneratePrompts/chatgpt.png)

## 配置ChatGPT

### API Base

1. 官方預設的接口地址是 `https://api.openai.com/v1`
2. 如果你沒有訪問官網的網路環境，可自行搜索或搭建代理伺服器。將代理伺服器的地址填入 `API Base`。請注意任何第三方代理伺服器都有可能導致你的API
   KEY洩露，或者導致你的隱私洩露。請謹慎使用。
3. 可能有用的一些代理伺服器：
   - `https://api.openai-proxy.com/v1`
   - `https://chatai.1rmb.tk/v1`
   - 歡迎補充...

### API KEY

1. 從 [OpenAI](https://platform.openai.com/docs/introduction) 獲取你的API KEY。
2. 你可以前往影片平台，比如Youtube，搜索獲取API KEY的影片教程。

### Model

1. 選擇你需要使用的模型。
2. 每個模型的計費方式不同。
3. 普通帳號無法使用 `gpt-4` 模型。

填寫完成後，點擊 `保存` 按鈕，下次打開視窗後無需再次填寫。

### 免費的API KEY

> [chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free) 此 Github 倉庫提供了免費的API接口。

1. 該專案提供的 API KEY 每小時限制最多請求120次。
2. 該專案可能隨時失效。
3. 該專案提供的 API KEY 無法使用官方的 API Base，請在 API Base 處填寫該專案提供的 URL 地址。
   - `https://api.chatanywhere.com.cn`
   - `https://api.chatanywhere.cn`
4. 該專案與本擴展無關，任何使用該專案產生的問題、損失與本作者無關。請自行斟酌！！！

### 免費帳號

- `https://free.openai.bond/`
- `https://djsfenxiang.com/`
- `https://fxmus.fxopenai.xyz/`
- 歡迎補充...

1. 進入這些網站，使用它們提供的帳號密碼到 [OpenAI](https://platform.openai.com/docs/introduction) 官網登錄。
2. 登錄後創建一個新的 KEY 並使用。
3. 這些帳號可能隨時失效。
4. 這些網站均為第三方網站，與本擴展無關，任何使用這些網站產生的問題、損失與本作者無關。請自行斟酌！！！

## 生成Prompts

1. 你可以使用任何語言輸入圖片描述資訊，例如：

   > 一個女孩，她潔若冰霜，莫可逼視，秀美大氣，傾國傾城，清韻典雅，淡雅宜人，風致天然，溫潤如玉，清澈如水，清雅不可方物，眉間如聚霜雪，冰雪出塵之姿，宛如仙女，出落得不食人間煙火，十足是個絕色的美人胚子。

2. 點擊 `生成` 按鈕。

3. 點擊 `使用` 按鈕。

   ![](../assets/images/demo.chatgpt.gif)