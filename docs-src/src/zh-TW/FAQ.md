# :star: 常見問題

### Q: 無需api key的翻譯接口和需要api key的翻譯接口有什麼區別？

> 無需api key的翻譯接口，是通過爬蟲獲取的，不需要用戶自己申請api key，但是可能會存在翻譯失敗的情況，穩定性差，速度慢，不支持並發。需要api key的翻譯接口，是通過調用第三方翻譯服務的api接口，需要用戶自己申請api key，但是翻譯成功率較高，某些接口支持高並發，翻譯速度快。
> 
> 詳情請見：[翻譯接口說明](/zh-TW/TranslationApiConfiguration.md#翻譯接口說明)

### Q: 無法使用翻譯服務，點擊“測試”，提示“No module named 'xxx'”？

> 這是由於webui啟動時，沒有正確的安裝依賴導致的，可以通過以下方式解決：
> 1. 切換到webui所使用的python/bin目錄。
> 2. 執行命令：
     >    ```
     > ./python -m pip install chardet
     > ./python -m pip install translators
     > ./python -m pip install openai
     > ./python -m pip install boto3
     > ./python -m pip install aliyun-python-sdk-core
     > ./python -m pip install aliyun-python-sdk-alimt
     >    ```
> 3. 等待安裝完成後，重啟webui。
> 
> 詳情請見：[安裝套件](/zh-TW/InstallationPackages.md)

### Q: 顯示錯誤消息："連接到後臺接口服務失敗，請手動再刷新一次網頁。如果還是不行，請重啟WebUI"。

> - 你可能需要刷新網頁或者重啟WebUI。
> - 這是由於WebUI啟動時，沒有正確的安裝依賴，參考上方安裝模塊的方法。
> - 進入`extensions\sd-webui-prompt-all-in-one\storage`目錄，將`history.*.json`和`favorite.*.json` 文件編碼改為UTF-8編碼，或者刪除它們（記得先備份）。

### Q: 為什麼擴展安裝成功了，控制台也沒有錯誤輸出，但網頁中就是沒有擴展的面板？

> 你需要確保你的WebUI版本是 [3715ece（2023年第7周）](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commit/3715ece) 及更高。如果你的WebUI版本低於此版本，你需要更新WebUI。
> ![](../assets/images/minimum_version_webui.png)
> 
> 詳情請見：[注意事項](/zh-TW/Installation.md#注意事項)

### Q: 不需要翻譯服務，只想在離線環境中使用？

> 1. 擴展在初始化的時候會安裝一些翻譯接口的SDK包，如`translators`、`openai`、`boto3`、`aliyun-python-sdk-core`、`aliyun-python-sdk-alimt`等等，如果你不需要翻譯服務，也不想安裝它們，請手動打開`install.py`、`scripts\physton_prompt\packages.py`，根據代碼中的注釋，刪除代碼，這並不會影響擴展的使用。然後取消勾選擴展設置中的自動翻譯按鈕。
> 2. 你也可以直接在擴展中將本地語言改為英文`en_US`，這樣所有翻譯相關的按鈕都將被隱藏。雖然擴展在初始化時還會安裝這些翻譯接口的SDK包，但它們在代碼中都是按需導入的，沒有使用翻譯服務，它們也不會被加載。

### Q: 為什麼在WebUI裡粘貼了Prompt，但是沒有自動翻譯到本地語言，或者只翻譯了一部分？

> 在WebUI中粘貼了Prompt，一般都是很多關鍵詞，如果自動翻譯會消耗很多網絡請求，所以擴展暫時不開啟這裡自動翻譯的功能。如果需要，請手動點擊一下批量翻譯按鈕。
>
> 如果有一部分被翻譯了，是因為你在翻譯設置中啟用了tagcomplete翻譯增強功能，因為這個功能不需要網絡請求，所以會把能匹配到的關鍵詞翻譯好。

### Q: 為什麼翻譯結果有些是“0”？

> 是因為你在翻譯設置中啟用了tagcomplete翻譯增強功能，但是你沒有選擇正確的CSV文件，一個正確的CSV文件格式應該是，第一列A為索引數字，第二列B為英文單詞，第三列C為你的本地語言翻譯。如果你的CSV文件格式不對，那麼就會出現翻譯結果為0的情況。
>
> 你可以前往[Physton/sd-webui-prompt-all-in-one-assets/tags](https://github.com/Physton/sd-webui-prompt-all-in-one-assets/tree/main/tags)，這裡我提供了一份簡體中文的CSV文件。
>
> 在選擇了不同的CSV文件後，請點擊下方的測試按鈕，檢查它是否翻譯正確。
> 
> 詳情請見：[TagComplate 翻譯增強](/zh-TW/TranslationApiConfiguration.md#tagcomplate-翻譯增強)

### Q: 為什麼生成按鈕下面有兩個描述一樣的按鈕？

> ![](../assets/images/paste.png)
>
> 第一個按鈕是WebUI自帶的，你可以在WebUI原生的輸入框中粘貼來自其他地方的Prompt，或者把圖片拖動進輸入框中。點擊這個按鈕，就可以自動為WebUI界面中的輸入框填寫參數。
>
> 第二個按鈕是本插件添加的。你在隱藏了WebUI原生的輸入框時，導致無法粘貼內容進去。那麼就可以點擊第二個按鈕，然後在彈出框中粘貼內容，點擊Submit後，就可以自動為WebUI界面中的輸入框填寫參數。（但是目前還不支持拖動圖片進去）

> ### Q: 為什麼有些Lora和LyCORIS會不停的閃爍？

> 這是因為你的Lora模型或者LyCORIS模型不存在。擴展會用閃爍的方式提醒你。

### Q: 為什麼之前有兩個翻譯按鈕，現在還有一個了？

> 現在某些語言下，例如中文、日文、韓文等等，支持了自動識別你輸入的是英文還是本地語言。所以把之前的翻譯到英文、翻譯到本地語言兩個按鈕合併成了一個。不管你輸入的是英文還是本地語言，都會自動翻譯識別翻譯。

### Q: 為什麼此擴展沒有版本號和更新描述？

> 這是因為作者太懶了。此擴展並沒有上線多久，每天都在開發新功能和修復BUG。大量的更新日誌太過繁瑣。所以請你保持常更新，自己探索新功能吧！