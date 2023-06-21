# Часто задаваемые вопросы

### Вопрос: В чем разница между интерфейсом перевода без ключа API и интерфейсом перевода с ключом API?

> Интерфейс перевода без ключа API получается с помощью веб-скрапинга и не требует от пользователей собственного ключа API. Однако в этом случае может возникнуть ситуация, когда перевод не удался. В таком случае стабильность будет низкой, скорость низкой, и интерфейс не будет поддерживать параллельные запросы. Интерфейс перевода с ключом API основан на вызове API-сервиса стороннего перевода, требующего от пользователей собственного ключа API. Однако вероятность успешного перевода выше, некоторые интерфейсы поддерживают высокую производительность и обеспечивают быструю скорость перевода.
>
> Подробнее см. [Описание интерфейса перевода](/ru/TranslationApiConfiguration.md#Описание-интерфейса-перевода)

### Вопрос: Не удается использовать службу перевода, при нажатии кнопки "Тест" появляется сообщение "No module named 'xxx'"?

> Это происходит из-за неправильной установки зависимостей при запуске веб-интерфейса. Вы можете решить эту проблему следующим образом:
> 1. Перейдите в каталог python/bin, используемый webui.
> 2. Выполните следующие команды:
     >    ```
     > ./python -m pip install chardet
     > ./python -m pip install translators
     > ./python -m pip install openai
     > ./python -m pip install boto3
     > ./python -m pip install aliyun-python-sdk-core
     > ./python -m pip install aliyun-python-sdk-alimt
     >    ```
> 3. После завершения установки перезапустите webui.
>
> Подробнее см. [Установка пакетов](/ru/InstallationPackages.md)

### Вопрос: Ошибка "Не удалось подключиться к службе интерфейса на заднем плане. Пожалуйста, вручную обновите страницу. Если это не помогло, перезапустите WebUI".

> - Возможно, вам нужно обновить страницу или перезапустить WebUI.
> - Это происходит из-за неправильной установки зависимостей при запуске WebUI. См. выше, как установить модули.
> - Перейдите в каталог `extensions\sd-webui-prompt-all-in-one\storage` и измените кодировку файлов `history.*.json` и `favorite.*.json` на UTF-8 или удалите их (не забудьте сделать резервную копию).

### Вопрос: Почему после успешной установки расширения и отсутствии ошибок в консоли веб-страница все еще не отображает панель расширения?

> Убедитесь, что ваша версия WebUI является [3715ece (7-я неделя 2023 года)](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commit/3715ece) или более поздняя. Если ваша версия WebUI ниже этой версии, вам нужно обновить WebUI.
> ![](../assets/images/minimum_version_webui.png)
>
> Подробнее см. [Примечания](/ru/Installation.md#Примечания)

### Вопрос: Я не нуждаюсь в службе перевода, я хочу использовать ее в автономной среде?

> 1. При инициализации расширение устанавливает некоторые пакеты SDK для интерфейса перевода, такие как `translators`, `openai`, `boto3`, `aliyun-python-sdk-core`, `aliyun-python-sdk-alimt` и т. д. Если вам не нужна служба перевода и вы не хотите устанавливать эти пакеты, вручную откройте `install.py` и `scripts\physton_prompt\packages.py` и удалите код в соответствии с комментариями в коде. Это не повлияет на работу расширения. Затем снимите флажок с кнопки "Автоматический перевод" в настройках расширения.
> 2. Вы также можете изменить локальный язык на английский (`en_US`) в расширении, и все кнопки, связанные с переводом, будут скрыты. Хотя при инициализации расширение все равно установит эти пакеты SDK для интерфейса перевода, они импортируются по требованию в коде и не используют службу перевода, поэтому они не будут загружены.

### Вопрос: Почему, когда я вставляю промпт в WebUI, он не автоматически переводится на локальный язык или переводится только частично?

> Когда вы вставляете промпт в WebUI, обычно это много ключевых слов, и автоматический перевод здесь потребует много сетевых запросов, поэтому расширение временно не включает функцию автоматического перевода в этой области. Если вам нужно, пожалуйста, вручную нажмите кнопку "Пакетный перевод".
>
> Если часть текста была переведена, это происходит потому, что вы включили функцию улучшения перевода tagcomplete в настройках перевода. Поскольку эта функция не требует сетевых запросов, она переводит все ключевые слова, которые может сопоставить.

### Вопрос: Почему некоторые результаты перевода отображаются как "0"?

> Это происходит потому, что вы включили функцию улучшения перевода tagcomplete в настройках перевода, но вы не выбрали правильный CSV-файл. Правильный формат CSV-файла должен содержать индексные числа в первом столбце A, английские слова во втором столбце B и перевод на ваш локальный язык в третьем столбце C. Если формат CSV-файла неправильный, результат перевода будет равен 0.
>
> Вы можете перейти по адресу [Physton/sd-webui-prompt-all-in-one-assets/tags](https://github.com/Physton/sd-webui-prompt-all-in-one-assets/tree/main/tags), где я предоставил CSV-файл для китайского языка.
>
> После выбора другого CSV-файла нажмите кнопку "Тест" внизу, чтобы проверить, правильно ли он переведен.
>
> Подробнее см. [Улучшенный перевод TagComplate](/ru/TranslationApiConfiguration.md#Улучшенный-перевод-tagcomplate)

### Вопрос: Почему под кнопкой "Создать" есть две кнопки с одинаковыми описаниями?

> ![](../assets/images/paste.png)
>
> Первая кнопка является встроенной веб-интерфейсом и позволяет вам вставлять промпты из других источников или перетаскивать изображения в поле ввода веб-интерфейса. При нажатии на эту кнопку автоматически заполняются параметры в поле ввода веб-интерфейса.
>
> Вторая кнопка добавлена этим расширением. Если вы скрыли встроенное поле ввода веб-интерфейса и не можете вставить содержимое в него, вы можете нажать вторую кнопку, вставить содержимое во всплывающем окне, а затем нажать "Отправить", чтобы автоматически заполнить параметры в поле ввода веб-интерфейса. (Однако в настоящее время не поддерживается перетаскивание изображений)

### Вопрос: Почему некоторые Lora и LyCORIS постоянно мигают?

> Это происходит, когда модель Lora или LyCORIS не существует. Расширение предупреждает об этом, мигая.

### Вопрос: Почему раньше было две кнопки перевода, а теперь есть только одна?

> Теперь некоторые языки, такие как китайский, японский, корейский и т. д., поддерживают автоматическое распознавание вводимого вами текста на английском или локальном языке. Поэтому кнопки "Перевести на английский" и "Перевести на локальный язык" были объединены в одну кнопку. Независимо от того, вводите ли вы текст на английском или на локальном языке, он будет автоматически распознан и переведен.

### Вопрос: Почему это расширение не имеет номера версии и описания обновления?

> Это потому, что автор слишком ленив. Это расширение было выпущено недавно, и каждый день разрабатываются новые функции и исправляются ошибки. Большое количество журналов обновлений слишком громоздки. Поэтому, пожалуйста, регулярно обновляйте и исследуйте новые функции самостоятельно!