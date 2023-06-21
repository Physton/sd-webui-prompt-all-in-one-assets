# 關鍵詞列表

![](../assets/images/demo.quick_adjust.gif)

## 關鍵詞操作

![](../assets/images/ListOfKeywords/btns.png)

1. 鼠標移動到每個關鍵詞上，你可以針對每個關鍵詞進行單獨的調整。
2. 如果你想要調整按鈕的位置顯示在關鍵詞右側，你可以前往 [主題風格](/zh-TW/ThemeStyle.md#主題風格) 中開啟此功能。

## 拖動排序

你可以通過鼠標左鍵按住關鍵詞，拖動到你想要的位置。

> 如果你拖動關鍵詞後，WebUI的輸入框中出現了重影，可能是因為你的瀏覽器安裝了DeepL或者其它的翻譯插件。

## 權重調整

![](../assets/images/ListOfKeywords/weight.png)

1. 你可以在權重數輸入框中輸入數字，也可以直接點擊左右的加減按鈕進行調整。
2. 權重數最高支持6位小數，默認按照0.1递增和递减。
3. 你可以點擊 `括號` 按鈕，對關鍵詞進行增減不同的括號包裹。

## 插入換行符

![](../assets/images/ListOfKeywords/wrap.png)

點擊 `換行` 按鈕，可以在當前關鍵詞的後面插入一個換行符號。

## 翻譯到英文

> 在英文語言環境下，這個按鈕將被隱藏。

![](../assets/images/ListOfKeywords/english.png)

如果當前關鍵詞不是英文的，你可以點擊 `翻譯到英文` 按鈕，將當前關鍵詞翻譯成英文。

## 複製關鍵詞

![](../assets/images/ListOfKeywords/copy.png)

點擊 `複製` 按鈕，可以將當前關鍵詞複製到剪貼板。

## 收藏/取消收藏

![](../assets/images/ListOfKeywords/favorite.png)

1. 點擊 `收藏` 按鈕，可以將當前關鍵詞收藏到收藏夾中。
2. 如果當前關鍵詞已經收藏，點擊 `收藏` 按鈕，可以將當前關鍵詞從收藏夾中移除。

## 禁用關鍵詞

![](../assets/images/ListOfKeywords/disable.png)

1. 點擊 `禁用` 按鈕，可以將當前關鍵詞禁用。
2. 如果當前關鍵詞已經禁用，點擊 `禁用` 按鈕，可以將當前關鍵詞啟用。
3. 禁用的關鍵不會加入到WebUI的輸入框中，在你需要的時候可以再啟用。
4. 雙擊關鍵詞也可以實現禁用/啟用關鍵詞。

## 翻譯到本地語言

> 在英文語言環境下，這個按鈕將被隱藏。

![](../assets/images/ListOfKeywords/local_language.png)

點擊 `翻譯到本地語言` 按鈕，可以將當前關鍵詞翻譯成本地語言顯示。

## 高亮關鍵詞

![](../assets/images/ListOfKeywords/highlight.png)

![](../assets/images/demo.keyword_detection.gif)

1. Lora、LyCORIS、Textual Inversion 關鍵詞會被高亮顯示。
2. Lora、LyCORIS 如果不存在於你的模型列表中，會高亮閃爍提醒你。
3. Lora、LyCORIS、Textual Inversion 關鍵詞，翻譯並不會從網絡翻譯。而是從 `Civitai助手` 的本地nfo文件中讀取原始名稱。

## 在WebUI輸入框中高亮關鍵詞

![](../assets/images/ListOfKeywords/highlight_input.png)

鼠標移動到關鍵詞上，會在WebUI輸入框中高亮顯示該關鍵詞。