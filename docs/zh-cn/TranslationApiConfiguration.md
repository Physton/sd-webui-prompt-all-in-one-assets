# 翻译API配置

## 打开翻译API配置窗口

1. 鼠标移动到 `设置按钮图标` 上。

    ![](../assets/images/TranslationApiConfiguration/api_btn.png)

2. 点击 `翻译API配置图标`。

    ![](../assets/images/TranslationApiConfiguration/api.png)

## 翻译接口说明

1. 本扩展集成了众多翻译接口，你可以根据自己的需求，选择合适的翻译接口。

    ![](../assets/images/demo.translate_setting.gif)

2. 目前分为 `不需要API KEY` 和 `需要API KEY` 两类。

    ![](../assets/images/TranslationApiConfiguration/api_list.png)

    |  | 不需要API KEY | 需要API KEY |
    | :---: | :---: | :---: |
    | 收费 | 免费 | 大部分免费<br/>可能每个月有翻译字符数的限制，但基本上免费的额度完全足够我们使用。 |
    | 稳定 | 非常不稳定<br/>根据每个人的电脑环境和网络环境不同，其中部分可能无法使用。<br/>非常不稳定，可能随时失效。<br/>在测试时可能翻译成功，但是在实际使用时可能翻译失败。 | 非常稳定<br/>基本不会失效。<br/>翻译基本不会失败。 |
    | 速度 | 非常慢 | 非常快 |

    | 翻译接口 | 免费额度 |
    | :---: | :---: |
    | 不需要API KEY的接口 | 无限
    | Google | 每月免费50万字符 |
    | OpenAI / ChatGPT | 首次开通赠送5美元体验金 |
    | Microsoft | 每月200万字符（仅限注册 Azure 后的前 12 个月） |
    | Amazon | 每月200万字符（仅限注册 AWS 后的前 12 个月） |
    | DeepL | 免费版每月50万字符 |
    | Yandex | 未知 |
    | Baidu / 百度翻译 | 每月5万字符 |
    | Alibaba / 阿里翻译 | 每月免费100万字符 |
    | Youdao / 有道翻译 | 新用户注册赠送50元体验金 |
    | Tencent / 腾讯翻译 | 每月免费500万字符 |

3. `需要API KEY` 的接口，选择后，会有申请教程文档，根据教程文档，自己申请。

4. `不需要API KEY` 的接口，如果翻译失败，请尝试切换其他接口，不要提交issue。

5. 请自己根据每个接口的翻译速度和质量，选择合适的接口。

## 接口测试

![](../assets/images/TranslationApiConfiguration/test.png)

1. 选择一个接口，点击 `测试` 按钮。

2. 翻译成功，则会显示翻译结果。

3. 翻译失败，则会显示错误信息。

## TagComplate 翻译增强

> 是否启用 [a1111-sd-webui-tagcomplete](https://github.com/DominikDoom/a1111-sd-webui-tagcomplete) 中的 CSV 文件以增强翻译功能。
>
> 启动此功能后，会减少网络请求，翻译结果更精准。
>
> 此功能的原理是，针对每个单词，将自动从 CSV 文件中查找翻译结果，如果找到，则不会再请求网络翻译接口，如果没有找到，则会请求网络翻译接口。
>
> 所以，如果你的 CSV 文件中没有你要翻译的单词，那么此功能将不会生效。

1. 此功能不需要你安装 [a1111-sd-webui-tagcomplete](https://github.com/DominikDoom/a1111-sd-webui-tagcomplete) 扩展。你可以直接把翻译过的 CSV 文件，放到 `extensions\sd-webui-prompt-all-in-one\tags` 目录下。如果没有此目录，请自己创建。

    ![](../assets/images/TranslationApiConfiguration/tags_dir.png)

2. 你需要选择正确的 CSV 文件，否则将导致部分单词翻译失败、翻译结果为0、翻译的语言不正确等等。

3. 你可以使用 Excel 打开 CSV 文件，查看内容格式是否正确，正确的格式如下：

    | 序号 | 英文 | 你的语言（这里以中文示例） |
    | :---: | :---: | :---: |
    | 1 | 1girl | 1女孩 |
    | 2 | 1boy | 1男孩 |
    | ... | ... | ... |

    ![](../assets/images/TranslationApiConfiguration/csv.png)

4. 点击 `刷新` 按钮，选择正确的 CSV 文件。

    ![](../assets/images/TranslationApiConfiguration/select_csv.png)

5. 点击 `测试` 按钮。检查翻译结果是否正确。测试结果中，每一行的前面为英文单词，后面为你的语言翻译结果。如果后面的翻译结果不正确，请检查你的 CSV 文件是否正确，否则不要启动此功能。

    ![](../assets/images/TranslationApiConfiguration/csv_test.png)

6. 如果你只想在自动翻译时，只使用CSV进行翻译，不使用网络翻译接口，那么请勾选以下选项。勾选后，只有你手动点击翻译按钮，才会使用网络翻译接口。

    ![](../assets/images/TranslationApiConfiguration/csv_only.png)