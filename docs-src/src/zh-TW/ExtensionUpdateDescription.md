# 擴展更新說明

1. 你的所有數據：API KEY、歷史記錄、收藏數據等，都保存在擴展的 `storage` 目錄下。

2. 使用WebUI自帶的更新器，或者使用git更新，都不會導致你的數據丟失。

3. 使用壓縮包等方式覆蓋安裝，或者刪除擴展後重新安裝，都會導致你的數據丟失。

4. 如果你想備份你的數據，可以將 `storage` 目錄複製到其他地方，然後在需要的時候將其複製回來。

## 更新方式

### 方式一（使用git更新）：

> 此方法需要您的電腦上安裝了 git，如果沒有安裝，可參考 [git 官方文檔](https://git-scm.com/book/zh-tw/v2/開始-Git-安裝教學)
進行安裝。

1. 開啟終端機，進入到你的擴展目錄下。

    ```shell
    cd 你的WebUI文件夾路徑\extensions\sd-webui-prompt-all-in-one
    ```

2. 使用 git 更新。

    ```shell
    git pull
    ```

   ![](../assets/images/Update/update_git.png)

3. 重新啟動 Stable Diffusion WebUI。

### 方式二（在WebUI中更新）：

1. 打开 WebUI 網頁。

2. 點擊 `擴展` - `已安裝` - `檢查更新`。

3. 點擊 `保存並重啟UI`。

   ![](../assets/images/Update/update_webui.png)

### 方式三（在秋葉啟動器中更新）：

> 如果你使用了秋葉啟動器，你可以在秋葉啟動器中更新擴展。

1. 打開 `秋葉啟動器`。

2. 點擊 `版本管理` - `擴展` - `刷新列表`。

3. 點擊 `sd-webui-prompt-all-in-one` 後面的 `更新` 按鈕。

   ![](../assets/images/Update/update_qiuye.png)

4. 重新啟動 Stable Diffusion WebUI。