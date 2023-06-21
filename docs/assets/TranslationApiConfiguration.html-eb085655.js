import{_ as r,a as i,b as d,c as o,d as s,e as c,f as p,g,h,i as y}from"./csv_only-47ff7cef.js";import{_ as x,r as _,o as m,c as b,a as t,b as e,e as a,d as n}from"./app-6a83b395.js";const u={},f=n('<h1 id="翻译api配置" tabindex="-1"><a class="header-anchor" href="#翻译api配置" aria-hidden="true">#</a> 翻译API配置</h1><h2 id="打开翻译api配置窗口" tabindex="-1"><a class="header-anchor" href="#打开翻译api配置窗口" aria-hidden="true">#</a> 打开翻译API配置窗口</h2><ol><li><p>鼠标移动到 <code>设置按钮图标</code> 上。</p><p><img src="'+r+'" alt="" loading="lazy"></p></li><li><p>点击 <code>翻译API配置图标</code>。</p><p><img src="'+i+'" alt="" loading="lazy"></p></li></ol><h2 id="翻译接口说明" tabindex="-1"><a class="header-anchor" href="#翻译接口说明" aria-hidden="true">#</a> 翻译接口说明</h2><ol><li><p>本扩展集成了众多翻译接口，你可以根据自己的需求，选择合适的翻译接口。</p><p><img src="'+d+'" alt="" loading="lazy"></p></li><li><p>目前分为 <code>不需要API KEY</code> 和 <code>需要API KEY</code> 两类。</p><p><img src="'+o+'" alt="" loading="lazy"></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">不需要API KEY</th><th style="text-align:center;">需要API KEY</th></tr></thead><tbody><tr><td style="text-align:center;">收费</td><td style="text-align:center;">免费</td><td style="text-align:center;">大部分免费<br>可能每个月有翻译字符数的限制，但基本上免费的额度完全足够我们使用。</td></tr><tr><td style="text-align:center;">稳定</td><td style="text-align:center;">非常不稳定<br>根据每个人的电脑环境和网络环境不同，其中部分可能无法使用。<br>非常不稳定，可能随时失效。<br>在测试时可能翻译成功，但是在实际使用时可能翻译失败。</td><td style="text-align:center;">非常稳定<br>基本不会失效。<br>翻译基本不会失败。</td></tr><tr><td style="text-align:center;">速度</td><td style="text-align:center;">非常慢</td><td style="text-align:center;">非常快</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">翻译接口</th><th style="text-align:center;">免费额度</th></tr></thead><tbody><tr><td style="text-align:center;">不需要API KEY的接口</td><td style="text-align:center;">无限</td></tr><tr><td style="text-align:center;">Google</td><td style="text-align:center;">每月免费50万字符</td></tr><tr><td style="text-align:center;">OpenAI / ChatGPT</td><td style="text-align:center;">首次开通赠送5美元体验金</td></tr><tr><td style="text-align:center;">Microsoft</td><td style="text-align:center;">每月200万字符（仅限注册 Azure 后的前 12 个月）</td></tr><tr><td style="text-align:center;">Amazon</td><td style="text-align:center;">每月200万字符（仅限注册 AWS 后的前 12 个月）</td></tr><tr><td style="text-align:center;">DeepL</td><td style="text-align:center;">免费版每月50万字符</td></tr><tr><td style="text-align:center;">Yandex</td><td style="text-align:center;">未知</td></tr><tr><td style="text-align:center;">Baidu / 百度翻译</td><td style="text-align:center;">每月5万字符</td></tr><tr><td style="text-align:center;">Alibaba / 阿里翻译</td><td style="text-align:center;">每月免费100万字符</td></tr><tr><td style="text-align:center;">Youdao / 有道翻译</td><td style="text-align:center;">新用户注册赠送50元体验金</td></tr><tr><td style="text-align:center;">Tencent / 腾讯翻译</td><td style="text-align:center;">每月免费500万字符</td></tr></tbody></table></li><li><p><code>需要API KEY</code> 的接口，选择后，会有申请教程文档，根据教程文档，自己申请。</p></li><li><p><code>不需要API KEY</code> 的接口，如果翻译失败，请尝试切换其他接口，不要提交issue。</p></li><li><p>请自己根据每个接口的翻译速度和质量，选择合适的接口。</p></li></ol><h2 id="接口测试" tabindex="-1"><a class="header-anchor" href="#接口测试" aria-hidden="true">#</a> 接口测试</h2><p><img src="'+s+'" alt="" loading="lazy"></p><ol><li><p>选择一个接口，点击 <code>测试</code> 按钮。</p></li><li><p>翻译成功，则会显示翻译结果。</p></li><li><p>翻译失败，则会显示错误信息。</p></li></ol><h2 id="tagcomplate-翻译增强" tabindex="-1"><a class="header-anchor" href="#tagcomplate-翻译增强" aria-hidden="true">#</a> TagComplate 翻译增强</h2>',9),A={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},C=t("p",null,"启动此功能后，会减少网络请求，翻译结果更精准。",-1),I=t("p",null,"此功能的原理是，针对每个单词，将自动从 CSV 文件中查找翻译结果，如果找到，则不会再请求网络翻译接口，如果没有找到，则会请求网络翻译接口。",-1),V=t("p",null,"所以，如果你的 CSV 文件中没有你要翻译的单词，那么此功能将不会生效。",-1),z={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"extensions\\sd-webui-prompt-all-in-one\\tags",-1),P=t("p",null,[t("img",{src:c,alt:"",loading:"lazy"})],-1),S=n('<li><p>你需要选择正确的 CSV 文件，否则将导致部分单词翻译失败、翻译结果为0、翻译的语言不正确等等。</p></li><li><p>你可以使用 Excel 打开 CSV 文件，查看内容格式是否正确，正确的格式如下：</p><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">英文</th><th style="text-align:center;">你的语言（这里以中文示例）</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">1girl</td><td style="text-align:center;">1女孩</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">1boy</td><td style="text-align:center;">1男孩</td></tr><tr><td style="text-align:center;">...</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td></tr></tbody></table><p><img src="'+p+'" alt="" loading="lazy"></p></li><li><p>点击 <code>刷新</code> 按钮，选择正确的 CSV 文件。</p><p><img src="'+g+'" alt="" loading="lazy"></p></li><li><p>点击 <code>测试</code> 按钮。检查翻译结果是否正确。测试结果中，每一行的前面为英文单词，后面为你的语言翻译结果。如果后面的翻译结果不正确，请检查你的 CSV 文件是否正确，否则不要启动此功能。</p><p><img src="'+h+'" alt="" loading="lazy"></p></li><li><p>如果你只想在自动翻译时，只使用CSV进行翻译，不使用网络翻译接口，那么请勾选以下选项。勾选后，只有你手动点击翻译按钮，才会使用网络翻译接口。</p><p><img src="'+y+'" alt="" loading="lazy"></p></li>',5);function k(Y,K){const l=_("ExternalLinkIcon");return m(),b("div",null,[f,t("blockquote",null,[t("p",null,[e("是否启用 "),t("a",A,[e("a1111-sd-webui-tagcomplete"),a(l)]),e(" 中的 CSV 文件以增强翻译功能。")]),C,I,V]),t("ol",null,[t("li",null,[t("p",null,[e("此功能不需要你安装 "),t("a",z,[e("a1111-sd-webui-tagcomplete"),a(l)]),e(" 扩展。你可以直接把翻译过的 CSV 文件，放到 "),E,e(" 目录下。如果没有此目录，请自己创建。")]),P]),S])])}const D=x(u,[["render",k],["__file","TranslationApiConfiguration.html.vue"]]);export{D as default};