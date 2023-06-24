# :star: Translation API Configuration

> In the English language environment, this button will be hidden.

## Open the Translation API Configuration Window

1. Hover your mouse over the "Settings" button icon.

    ![](./assets/images/TranslationApiConfiguration/api_btn.png)

2. Click on the "Translation API Configuration" icon.

    ![](./assets/images/TranslationApiConfiguration/api.png)

## Translation API Description

View: [Translation API Description](/TranslationAPIDescription.md)

## Translation API Comparison

View: [Translation API Comparison](/TranslationAPIDescription.md#translation-api-comparison)

## Translation API Free Quotas

View: [Translation API Free Quotas](/TranslationAPIDescription.md#all-translation-apis)

## API Key Application

View: [API Key Application](/TranslationAPIDescription.md#all-translation-apis)

## Offline Translation

View: [Offline Translation](/OfflineTranslation.md)

## API Testing

![](./assets/images/TranslationApiConfiguration/test.png)

1. Select an API and click the "Test" button.

2. If the translation is successful, the translation result will be displayed.

3. If the translation fails, an error message will be displayed.

## TagComplete Translation enhancement

> Enable the CSV file in [a1111-sd-webui-tagcomplete](https://github.com/DominikDoom/a1111-sd-webui-tagcomplete) to enhance the translation function.
>
> After enabling this function, the number of network requests will be reduced and the translation result will be more accurate.
>
> The principle of this function is that for each word, the translation result will be automatically searched from the CSV file. If found, the network translation API will not be requested again. If not found, the network translation API will be requested.
>
> Therefore, if the word you want to translate is not in your CSV file, this function will not work.

1. This function does not require you to install the [a1111-sd-webui-tagcomplete](https://github.com/DominikDoom/a1111-sd-webui-tagcomplete) extension. You can directly put the translated CSV file into the `extensions\sd-webui-prompt-all-in-one\tags` directory. If there is no such directory, please create one yourself.

    ![](./assets/images/TranslationApiConfiguration/tags_dir.png)

2. You need to select the correct CSV file, otherwise it will cause partial word translation failure, translation result of 0, incorrect translation language, etc.

3. You can use Excel to open the CSV file and check whether the content format is correct. The correct format is as follows:

    | Number | English | Your Language (here is Chinese as an example) |
    | :---: | :---: | :---: |
    | 1 | 1girl | 1女孩 |
    | 2 | 1boy | 1男孩 |
    | ... | ... | ... |

    ![](./assets/images/TranslationApiConfiguration/csv.png)

4. Click the "Refresh" button and select the correct CSV file.

    ![](./assets/images/TranslationApiConfiguration/select_csv.png)

5. Click the "Test" button. Check whether the translation result is correct. In the test result, the English word is in front, and the translation result in your language is at the back. If the translation result at the back is not correct, please check whether your CSV file is correct, otherwise do not enable this function.

    ![](./assets/images/TranslationApiConfiguration/csv_test.png)

6. If you only want to use CSV for translation during automatic translation and not use the network translation API, then select the following option. After selecting, only when you manually click the translation button will the network translation API be used.

    ![](./assets/images/TranslationApiConfiguration/csv_only.png)