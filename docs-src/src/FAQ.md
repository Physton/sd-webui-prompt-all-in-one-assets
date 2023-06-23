# :star: FAQ

### Q: What is the difference between translation interfaces that do not require API keys and those that require API keys?

> The translation interface that does not require an API key is obtained through crawling and does not require the user to apply for an API key. However, there may be translation failures, instability, slow speed, and lack of support for concurrency. The translation interface that requires an API key calls the API interface of a third-party translation service and requires the user to apply for an API key. However, the translation success rate is relatively high, some interfaces support high concurrency, and the translation speed is fast.
> 
> Please refer to the details in [Translation API Description](/TranslationApiConfiguration.md#translation-api-description).

### Q: Unable to use translation service, clicking "Test!" results in "No module named 'xxx'" error message?

> This is because the dependencies required by webui are not installed properly at startup. You can solve this issue by following these steps:
> 1. Switch to the python/bin directory used by sd-webui.
> 2. Run the following commands:
>    ```
>    ./python -m pip install chardet
>    ./python -m pip install translators
>    ./python -m pip install openai
>    ./python -m pip install boto3
>    ./python -m pip install aliyun-python-sdk-core
>    ./python -m pip install aliyun-python-sdk-alimt
>    ```
> 3. After the installation is complete, restart webui.
> 
> Please refer to the details in [Installation Packages](/InstallationPackages.md).

### Q: Display error message: "Connection to backend API service failed. Please manually refresh the webpage. If it still doesn't work, please restart the WebUI."

> - You may need to refresh the web page or restart the WebUI.
> - This is because the dependencies required by webui are not installed properly at startup. Please refer to the above installation method for installing modules.
> - Go to the `extensions\sd-webui-prompt-all-in-one\storage` directory, change the encoding of the `history.*.json` and `favorite.*.json` files to UTF-8 encoding, or delete them (remember to backup first).

### Q: Why did the extension install successfully and there were no error outputs in the console, but there is still no extension panel on the webpage?

> You need to make sure that your WebUI version is [3715ece](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commit/3715ece) or higher. If your WebUI version is lower than this, you need to update WebUI.
> ![](./assets/images/minimum_version_webui.png)
> 
> Please refer to the details in [Notes](/Installation.md#notes).

### Q: Don't need translation services, just want to use it in an offline environment?

> 1. During initialization, the extension will install some translation interface SDK packages, such as `translators`、`openai`、`boto3`、`aliyun-python-sdk-core`、`aliyun-python-sdk-alimt`, etc. If you don't need translation services and don't want to install them, please manually open `install.py` `scripts\physton_prompt\packages.py`, delete the code according to the comments in the code. This will not affect the use of the extension. Then uncheck the automatic translation button in the extension settings.
> 2. You can also directly change the local language to English en_US in the extension, which will hide all translation-related buttons. Although the extension will still install these translation interface SDK packages during initialization, they are imported on-demand in the code without using translation services, so they will not be loaded.

### Q: Why isn't the Prompt automatically translated into the local language when pasted in the WebUI, or only partially translated?

> When pasting a Prompt in the WebUI, there are usually many keywords. If automatic translation is enabled, it will consume a lot of network requests. Therefore, the extension temporarily does not enable automatic translation of this feature. If needed, please manually click the "Bulk Translate" button.
>
> If only part of the Prompt is translated, it may be because you have enabled the "tagcomplete" translation enhancement feature in the translation settings. Because this feature does not require network requests, it will translate any matching keywords it can find.

### Q: Why are some translation results "0"?

> It may be because you have enabled the "tagcomplete" translation enhancement feature in the translation settings, but you have not selected the correct CSV file. A correct CSV file should have the index number in the first column A, the English words in the second column B, and the translation of your local language in the third column C. If your CSV file format is incorrect, it will result in a translation result of "0".
>
> You can visit [Physton/sd-webui-prompt-all-in-one-assets/tags](https://github.com/Physton/sd-webui-prompt-all-in-one-assets/tree/main/tags) where I have provided a Simplified Chinese CSV file.
>
> After selecting a different CSV file, please click the test button below to check if the translation is correct.
> 
> Please refer to the details in [TagComplete Translation enhancement](/TranslationApiConfiguration.md#tagcomplete-translation-enhancement).

### Q: Why are there two identical buttons under the generate button?

> ![](./assets/images/paste.png)
>
> The first button is built into the WebUI. You can paste the Prompt from other sources into the native input box of WebUI or drag and drop an image into it. Clicking this button will automatically fill in the parameters for the input box in the WebUI interface.
>
> The second button is added by this extension. When you hide the native input box of the WebUI, you cannot paste content into it. In this case, you can click the second button and then paste the content into the popup box. After clicking Submit, it will automatically fill in the parameters for the input box in the WebUI interface. (However, currently, it does not support dragging and dropping images into it.)

### Q: Why do some Lora and LyCORIS keep flashing repeatedly?

> This is because your Lora model or LyCORIS model does not exist. The extension will use flashing to remind you.

### Q: Why were there two translation buttons before and now there is only one?

> Now in some languages such as Chinese, Japanese, Korean, etc., the system supports automatic recognition of whether you are inputting English or your local language. Therefore, the previous "Translate to English" and "Translate to Local Language" buttons have been merged into one. Whether you input in English or your local language, it will be automatically recognized and translated accordingly.

### Q: Why does this extension not have a version number and update description?

> This is because the author is too lazy. This extension has not been online for long, and new features are being developed and bugs are being fixed every day. A large number of update logs are too cumbersome. So please keep updating and explore new features by yourself!