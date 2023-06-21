# 安裝

## 安裝需求

- Stable Diffusion WebUI 版本：[3715ece（2023年第7週）](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commit/3715ece) 及以上版本
- Python 版本：`≈ 3.10.11`（`3.9`或者`3.11`可能會導致Python套件無法安裝）
- 操作系統：`Windows`、`Linux`、`MacOS` 等等
- 瀏覽器：請勿啟用Deepl等翻譯插件

## 安裝方式

### 方式一（使用git克隆）：

> 此方法需要您的電腦上安裝了 git，如果沒有安裝，可參考 [git 官方文檔](https://git-scm.com/book/zh-tw/v2/開始-Git-安裝教學) 進行安裝。

1. 開啟終端機，進入到你的 `stable-diffusion-webui` 目錄下。

   ![](../assets/images/Installation/cd.png)

2. 使用 git 克隆 `sd-webui-prompt-all-in-one` 到 `stable-diffusion-webui\extensions` 目錄下。

    ```shell
    git clone "https://github.com/Physton/sd-webui-prompt-all-in-one.git" extensions/sd-webui-prompt-all-in-one
    ```

   > 如果您的終端機沒有訪問Github的網路環境，可使用以下中國鏡像網站的地址：
   > ```shell
    > git clone "https://gitee.com/physton/sd-webui-prompt-all-in-one.git" extensions/sd-webui-prompt-all-in-one
    > ```

   ![](../assets/images/Installation/clone.png)

3. 重新啟動 Stable Diffusion WebUI。

### 方式二（從網址安裝）：

1. 開啟 WebUI 網頁。

2. 點擊 `擴展` - `從網址安裝`。

   ![](../assets/images/Installation/from_url.png)

3. 填寫 `https://github.com/Physton/sd-webui-prompt-all-in-one.git`。

   > 如果您沒有訪問Github的網路環境，可使用以下中國鏡像網站的地址：
   > `https://gitee.com/physton/sd-webui-prompt-all-in-one.git`

4. 點擊 `安裝`，等待安裝完成。此過程可能需要幾分鐘或更久的時間。安裝完成後會有成功提示。

   ![](../assets/images/Installation/from_url_success.png)

5. 點擊 `已安裝` - `保存並重啟UI`。

   ![](../assets/images/Installation/restart.png)

### 方式三（從官方擴展庫安裝）：

1. 開啟 WebUI 網頁。

2. 點擊 `擴展` - `可用`  - `加載自`。

   ![](../assets/images/Installation/load_from.png)

3. 找到 `sd-webui-prompt-all-in-one`，點擊 `安裝`。

   ![](../assets/images/Installation/load_from_install.png)

4. 等待安裝完成。此過程可能需要幾分鐘或更久的時間。安裝完成後會有成功提示。

   ![](../assets/images/Installation/load_from_success.png)

5. 點擊 `已安裝` - `保存並重啟UI`。

   ![](../assets/images/Installation/restart.png)

### 方式四（下載源碼安裝）：

> 此方法安裝無法一鍵更新，不推薦！！！

1. 下載 `sd-webui-prompt-all-in-one` 的源碼壓縮包。

   ![](../assets/images/Installation/download.png)

2. 解壓到 `stable-diffusion-webui\extensions` 目錄下。

   ![](../assets/images/Installation/drop.png)

3. 重新啟動 Stable Diffusion WebUI。

## 注意事項

1. 任何方式安裝，在安裝完成後，都需要重新啟動 Stable Diffusion WebUI。

2. 任何方式，在安裝過程中，如果出現錯誤。都需要手動刪除 `stable-diffusion-webui\extensions\sd-webui-prompt-all-in-one`
   目錄，然後重啟 Stable Diffusion WebUI，再重新安裝。

3. 安裝過程可能需要幾分鐘或更久的時間，請耐心等待。

4. 您需要確保您的WebUI版本是 [3715ece（2023年第7周）](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commit/3715ece)
及更高。如果您的WebUI版本低於此版本，您需要更新WebUI。
![](../assets/images/minimum_version_webui.png)

5. 在啟動了 `--data-dir` 參數後，WebUI需要增加參數 `--gradio-allowed-path="擴展文件夾路徑"`。

   如果不添加 `--gradio-allowed-path` 參數，大部分第三方擴展都不能夠使用，不只是本擴展。

   `--gradio-allowed-path="擴展文件夾路徑"`

   或者

   `--gradio-allowed-path="您的Data文件夾路徑\extensions\"`