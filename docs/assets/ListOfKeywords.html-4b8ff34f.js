import{_ as l,a as t,b as o,c as s,d,e as h,f as n,g as c,h as p,i as _,j as m,k as u}from"./highlight_input-c30f0cd0.js";import{_ as b,r as f,o as g,c as x,a as e,b as a,d as y,w as D,e as i}from"./app-f3306de8.js";const B={},z=i('<h1 id="список-ключевых-слов" tabindex="-1"><a class="header-anchor" href="#список-ключевых-слов" aria-hidden="true">#</a> Список ключевых слов</h1><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="операции-с-ключевыми-словами" tabindex="-1"><a class="header-anchor" href="#операции-с-ключевыми-словами" aria-hidden="true">#</a> Операции с ключевыми словами</h2><p><img src="'+t+'" alt="" loading="lazy"></p>',4),k=e("li",null,"Наведите курсор на каждое ключевое слово, чтобы отрегулировать каждое из них по отдельности.",-1),L=i('<h2 id="перетаскивание-для-сортировки" tabindex="-1"><a class="header-anchor" href="#перетаскивание-для-сортировки" aria-hidden="true">#</a> Перетаскивание для сортировки</h2><p>Вы можете перетаскивать ключевые слова левой кнопкой мыши и перемещать их в нужное место.</p><blockquote><p>Если после перетаскивания ключевых слов в поле ввода WebUI появляется двойное изображение, возможно, у вас установлены плагины перевода, такие как DeepL или другие.</p></blockquote><h2 id="регулировка-веса" tabindex="-1"><a class="header-anchor" href="#регулировка-веса" aria-hidden="true">#</a> Регулировка веса</h2><p><img src="'+o+'" alt="" loading="lazy"></p><ol><li>Вы можете ввести число в поле ввода веса или нажимать кнопки «+» и «-» слева и справа для регулировки.</li><li>Вес может иметь до 6 знаков после запятой и увеличиваться или уменьшаться на 0,1 по умолчанию.</li><li>Вы можете нажать кнопку «скобки», чтобы добавить или удалить скобки для ключевых слов.</li></ol><h2 id="вставка-символа-новои-строки" tabindex="-1"><a class="header-anchor" href="#вставка-символа-новои-строки" aria-hidden="true">#</a> Вставка символа новой строки</h2><p><img src="'+s+'" alt="" loading="lazy"></p><p>Нажмите кнопку «новая строка», чтобы вставить символ новой строки после текущего ключевого слова.</p><h2 id="перевод-на-англиискии-язык" tabindex="-1"><a class="header-anchor" href="#перевод-на-англиискии-язык" aria-hidden="true">#</a> Перевод на английский язык</h2><blockquote><p>В англоязычной среде эту кнопку будут скрывать.</p></blockquote><p><img src="'+d+'" alt="" loading="lazy"></p><p>Если текущее ключевое слово не на английском языке, вы можете нажать кнопку «перевести на английский язык», чтобы перевести его на английский язык.</p><h2 id="копирование-ключевых-слов" tabindex="-1"><a class="header-anchor" href="#копирование-ключевых-слов" aria-hidden="true">#</a> Копирование ключевых слов</h2><p><img src="'+h+'" alt="" loading="lazy"></p><p>Нажмите кнопку «копировать», чтобы скопировать текущее ключевое слово в буфер обмена.</p><h2 id="добавление-в-избранное-удаление-из-избранного" tabindex="-1"><a class="header-anchor" href="#добавление-в-избранное-удаление-из-избранного" aria-hidden="true">#</a> Добавление в избранное/удаление из избранного</h2><p><img src="'+n+'" alt="" loading="lazy"></p><ol><li>Нажмите кнопку «добавить в избранное», чтобы добавить текущее ключевое слово в избранное.</li><li>Если текущее ключевое слово уже добавлено в избранное, нажмите кнопку «добавить в избранное», чтобы удалить его из избранного.</li></ol><h2 id="отключение-ключевых-слов" tabindex="-1"><a class="header-anchor" href="#отключение-ключевых-слов" aria-hidden="true">#</a> Отключение ключевых слов</h2><p><img src="'+c+'" alt="" loading="lazy"></p><ol><li>Нажмите кнопку «отключить», чтобы отключить текущее ключевое слово.</li><li>Если текущее ключевое слово уже отключено, нажмите кнопку «отключить», чтобы включить его.</li><li>Отключенные ключи не будут добавляться в поле ввода WebUI и могут быть включены по мере необходимости.</li><li>Можно отключить/включить функцию путем двойного щелчка по ключевому слову.</li></ol><h2 id="перевод-на-локальныи-язык" tabindex="-1"><a class="header-anchor" href="#перевод-на-локальныи-язык" aria-hidden="true">#</a> Перевод на локальный язык</h2><blockquote><p>В англоязычной среде эту кнопку будут скрывать.</p></blockquote><p><img src="'+p+'" alt="" loading="lazy"></p><p>Нажмите кнопку «перевести на локальный язык», чтобы перевести текущее ключевое слово на локальный язык.</p><h2 id="подсветка-ключевых-слов" tabindex="-1"><a class="header-anchor" href="#подсветка-ключевых-слов" aria-hidden="true">#</a> Подсветка ключевых слов</h2><p><img src="'+_+'" alt="" loading="lazy"></p><p><img src="'+m+'" alt="" loading="lazy"></p><ol><li>Ключевые слова Lora, LyCORIS, Textual Inversion будут подсвечены.</li><li>Если Lora, LyCORIS отсутствуют в вашем списке моделей, они будут мигать, чтобы предупредить вас.</li><li>Для ключевых слов Lora, LyCORIS, Textual Inversion перевод не будет производиться из интернета, а будет браться из локального файла nfo в «Civitai Assistant».</li></ol><h2 id="подсветка-ключевых-слов-в-поле-ввода-webui" tabindex="-1"><a class="header-anchor" href="#подсветка-ключевых-слов-в-поле-ввода-webui" aria-hidden="true">#</a> Подсветка ключевых слов в поле ввода WebUI</h2><p><img src="'+u+'" alt="" loading="lazy"></p><p>Когда вы наводите курсор на ключевое слово, оно будет подсвечиваться в поле ввода WebUI.</p>',33);function I(C,q){const r=f("RouterLink");return g(),x("div",null,[z,e("ol",null,[k,e("li",null,[a("Если вы хотите, чтобы кнопки находились справа от ключевых слов, вы можете включить эту функцию в "),y(r,{to:"/ru/ThemeStyle.html#%D0%A2%D0%B5%D0%BC%D1%8B-%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F"},{default:D(()=>[a("стиле темы")]),_:1}),a(".")])]),L])}const O=b(B,[["render",I],["__file","ListOfKeywords.html.vue"]]);export{O as default};