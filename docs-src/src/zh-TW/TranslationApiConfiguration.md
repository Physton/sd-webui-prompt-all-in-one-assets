# :star: 翻譯API配置

> 在英文語言環境下，這個按鈕將被隱藏。

## 打開翻譯API配置視窗

1. 滑鼠移動到 `設置按鈕圖標` 上。

    ![](../assets/images/TranslationApiConfiguration/api_btn.png)

2. 點擊 `翻譯API配置圖標`。

    ![](../assets/images/TranslationApiConfiguration/api.png)

## 翻譯接口說明

請參閱：[翻譯接口說明](/zh-TW/TranslationAPIDescription.md)

## 翻譯接口對比

請參閱：[翻譯接口對比](/zh-TW/TranslationAPIDescription.md#翻譯接口對比)

## 翻譯接口免費額度

請參閱：[翻譯接口免費額度](/zh-TW/TranslationAPIDescription.md#所有翻譯接口)

## API KEY申請

請參閱：[API KEY申請](/zh-TW/TranslationAPIDescription.md#所有翻譯接口)

## 離線翻譯

請參閱：[離線翻譯](/zh-TW/OfflineTranslation.md)

## 接口測試

![](../assets/images/TranslationApiConfiguration/test.png)

1. 選擇一個接口，點擊 `測試` 按鈕。

2. 翻譯成功，則會顯示翻譯結果。

3. 翻譯失敗，則會顯示錯誤信息。

## TagComplate 翻譯增強

> 是否啟用 [a1111-sd-webui-tagcomplete](https://github.com/DominikDoom/a1111-sd-webui-tagcomplete) 中的 CSV 文件以增強翻譯功能。
>
> 啟動此功能後，會減少網絡請求，翻譯結果更精準。
>
> 此功能的原理是，針對每個單詞，將自動從 CSV 文件中查找翻譯結果，如果找到，則不會再請求網絡翻譯接口，如果沒有找到，則會請求網絡翻譯接口。
>
> 所以，如果你的 CSV 文件中沒有你要翻譯的單詞，那麼此功能將不會生效。

1. 此功能不需要你安裝 [a1111-sd-webui-tagcomplete](https://github.com/DominikDoom/a1111-sd-webui-tagcomplete) 擴展。你可以直接把翻譯過的 CSV 文件，放到 `extensions\sd-webui-prompt-all-in-one\tags` 目錄下。如果沒有此目錄，請自己創建。

    ![](../assets/images/TranslationApiConfiguration/tags_dir.png)

2. 你需要選擇正確的 CSV 文件，否則將導致部分單詞翻譯失敗、翻譯結果為0、翻譯的語言不正確等等。

3. 你可以使用 Excel 打開 CSV 文件，查看內容格式是否正確，正確的格式如下：

    | 序號 | 英文 | 你的語言（這裡以中文示例） |
    | :---: | :---: | :---: |
    | 1 | 1girl | 1女孩 |
    | 2 | 1boy | 1男孩 |
    | ... | ... | ... |

    ![](../assets/images/TranslationApiConfiguration/csv.png)

4. 點擊 `刷新` 按鈕，選擇正確的 CSV 文件。

    ![](../assets/images/TranslationApiConfiguration/select_csv.png)

5. 點擊 `測試` 按鈕。檢查翻譯結果是否正確。測試結果中，每一行的前面為英文單詞，後面為你的語言翻譯結果。如果後面的翻譯結果不正確，請檢查你的 CSV 文件是否正確，否則不要啟動此功能。

    ![](../assets/images/TranslationApiConfiguration/csv_test.png)

6. 如果你只想在自動翻譯時，只使用CSV進行翻譯，不使用網絡翻譯接口，那麼請勾選以下選項。勾選後，只有你手動點擊翻譯按鈕，才會使用網絡翻譯接口。

    ![](../assets/images/TranslationApiConfiguration/csv_only.png)