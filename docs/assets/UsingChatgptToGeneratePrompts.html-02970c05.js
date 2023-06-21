import{_ as l,a as r,b as n}from"./demo.chatgpt-d9121955.js";import{_ as c,r as d,o as h,c as s,a as e,b as a,e as t,d as o}from"./app-6a83b395.js";const p={},_=o('<h1 id="使用chatgpt生成提示词" tabindex="-1"><a class="header-anchor" href="#使用chatgpt生成提示词" aria-hidden="true">#</a> 使用ChatGPT生成提示词</h1><h2 id="打开窗口" tabindex="-1"><a class="header-anchor" href="#打开窗口" aria-hidden="true">#</a> 打开窗口</h2><ol><li><p>鼠标移动到 <code>使用ChatGPT生成Prompts按钮</code> 上。</p><p><img src="'+l+'" alt="" loading="lazy"></p></li><li><p>打开窗口。</p><p><img src="'+r+'" alt="" loading="lazy"></p></li></ol><h2 id="配置chatgpt" tabindex="-1"><a class="header-anchor" href="#配置chatgpt" aria-hidden="true">#</a> 配置ChatGPT</h2><h3 id="api-base" tabindex="-1"><a class="header-anchor" href="#api-base" aria-hidden="true">#</a> API Base</h3><ol><li>官方默认的接口地址是 <code>https://api.openai.com/v1</code></li><li>如果你没有访问官网的网络环境，可自行搜索或搭建代理服务器。将代理服务器的地址填入 <code>API Base</code>。请注意任何第三方代理服务器都有可能导致你的API KEY泄露，或者导致你的隐私泄露。请谨慎使用。</li><li>可能有用的一些代理服务器： <ul><li><code>https://api.openai-proxy.com/v1</code></li><li><code>https://chatai.1rmb.tk/v1</code></li><li>欢迎补充...</li></ul></li></ol><h3 id="api-key" tabindex="-1"><a class="header-anchor" href="#api-key" aria-hidden="true">#</a> API KEY</h3>',7),u={href:"https://platform.openai.com/docs/introduction",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"你可以前往视频平台，比如Youtube，搜索获取API KEY的视频教程。",-1),f=o('<h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h3><ol><li>选择你需要使用的模型。</li><li>每个模型的计费方式不同。</li><li>普通账号无法使用 <code>gpt-4</code> 模型。</li></ol><p>填写完成后，点击 <code>保存</code> 按钮，下次打开窗口后无需再次填写。</p><h3 id="免费的api-key" tabindex="-1"><a class="header-anchor" href="#免费的api-key" aria-hidden="true">#</a> 免费的API KEY</h3>',4),b={href:"https://github.com/chatanywhere/GPT_API_free",target:"_blank",rel:"noopener noreferrer"},P=o('<ol><li>该项目提供的 API KEY 每小时限制最多请求120次。</li><li>该项目可能随时失效。</li><li>该项目提供的 API KEY 无法使用官方的 API Base，请在 API Base 处填写该项目提供的 URL 地址。 <ul><li><code>https://api.chatanywhere.com.cn</code></li><li><code>https://api.chatanywhere.cn</code></li></ul></li><li>该项目与本扩展无关，任何使用该项目产生的问题、损失与本作者无关。请自行斟酌！！！</li></ol><h3 id="免费的账号" tabindex="-1"><a class="header-anchor" href="#免费的账号" aria-hidden="true">#</a> 免费的账号</h3><ul><li><code>https://free.openai.bond/</code></li><li><code>https://djsfenxiang.com/</code></li><li><code>https://fxmus.fxopenai.xyz/</code></li><li>欢迎补充...</li></ul>',3),g={href:"https://platform.openai.com/docs/introduction",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"登录后创建一个新的 KEY 并使用。",-1),I=e("li",null,"这些账号可能随时失效。",-1),A=e("li",null,"这些网站均为第三方网站，与本扩展无关，任何使用这些网站产生的问题、损失与本作者无关。请自行斟酌！！！",-1),k=o('<h2 id="生成prompts" tabindex="-1"><a class="header-anchor" href="#生成prompts" aria-hidden="true">#</a> 生成Prompts</h2><ol><li><p>你可以使用任何语言输入图片描述信息，例如：</p><blockquote><p>一个女孩，她洁若冰霜，莫可逼视，秀美大气，倾国倾城，清韵典雅，淡雅宜人，风致天然，温润如玉，清澈如水，清雅不可方物，眉间如聚霜雪，冰雪出尘之姿，宛如仙女，出落得不食人间烟火，十足是个绝色的美人胚子。</p></blockquote></li><li><p>点击 <code>生成</code> 按钮。</p></li><li><p>点击 <code>使用</code> 按钮。</p><p><img src="'+n+'" alt="" loading="lazy"></p></li></ol>',2);function y(E,Y){const i=d("ExternalLinkIcon");return h(),s("div",null,[_,e("ol",null,[e("li",null,[a("从 "),e("a",u,[a("OpenAI"),t(i)]),a(" 获取你的API KEY。")]),m]),f,e("blockquote",null,[e("p",null,[e("a",b,[a("chatanywhere/GPT_API_free"),t(i)]),a(" 此 Github 仓库提供了免费的API接口。")])]),P,e("ol",null,[e("li",null,[a("进入这些网站，使用它们提供的账号密码到 "),e("a",g,[a("OpenAI"),t(i)]),a(" 官网登录。")]),x,I,A]),k])}const T=c(p,[["render",y],["__file","UsingChatgptToGeneratePrompts.html.vue"]]);export{T as default};