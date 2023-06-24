import{_ as n,a as o}from"./update_webui-fa543c29.js";import{_ as d}from"./update_qiuye-9b2c0c34.js";import{_ as s,r as l,o as r,c,a as e,b as t,d as h,e as i}from"./app-f3306de8.js";const p={},u=i('<h1 id="extension-update-description" tabindex="-1"><a class="header-anchor" href="#extension-update-description" aria-hidden="true">#</a> Extension update description</h1><ol><li><p>All your data, including API keys, history records, and favorite data, are stored in the <code>storage</code> directory of the extension.</p></li><li><p>Using the built-in updater in WebUI or updating via git will not cause your data to be lost.</p></li><li><p>Overwriting the extension installation with a compressed file or deleting the extension and reinstalling it will result in data loss.</p></li><li><p>If you want to backup your data, you can copy the <code>storage</code> directory to another location and then copy it back when needed.</p></li></ol><h2 id="update-methods" tabindex="-1"><a class="header-anchor" href="#update-methods" aria-hidden="true">#</a> Update Methods</h2><h3 id="method-1-updating-with-git" tabindex="-1"><a class="header-anchor" href="#method-1-updating-with-git" aria-hidden="true">#</a> Method 1 (Updating with git):</h3>',4),g={href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"},m=i(`<ol><li><p>Open the terminal and navigate to your extension directory.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> path to your WebUI/extensions/sd-webui-prompt-all-in-one
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Update using git.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+n+'" alt="" loading="lazy"></p></li><li><p>Restart the Stable Diffusion WebUI.</p></li></ol><h3 id="method-2-updating-within-the-webui" tabindex="-1"><a class="header-anchor" href="#method-2-updating-within-the-webui" aria-hidden="true">#</a> Method 2 (Updating within the WebUI):</h3><ol><li><p>Open the WebUI webpage.</p></li><li><p>Click on <code>Extensions</code> - <code>Installed</code> - <code>Check for Updates</code>.</p></li><li><p>Click on <code>Apply and Restart UI</code>.</p><p><img src="'+o+'" alt="" loading="lazy"></p></li></ol><h3 id="method-3-updating-within-the-qiuye-launcher" tabindex="-1"><a class="header-anchor" href="#method-3-updating-within-the-qiuye-launcher" aria-hidden="true">#</a> Method 3 (Updating within the Qiuye Launcher):</h3><blockquote><p>If you are using the Qiuye Launcher, you can update the extension within the launcher.</p></blockquote><ol><li><p>Open the Qiuye Launcher.</p></li><li><p>Click on <code>Version Management</code> - <code>Extensions</code> - <code>Refresh List</code>.</p></li><li><p>Click on the <code>Update</code> button next to <code>sd-webui-prompt-all-in-one</code>.</p><p><img src="'+d+'" alt="" loading="lazy"></p></li><li><p>Restart the Stable Diffusion WebUI.</p></li></ol>',6);function b(f,_){const a=l("ExternalLinkIcon");return r(),c("div",null,[u,e("blockquote",null,[e("p",null,[t("This method requires Git to be installed on your computer. If it is not installed, please refer to the official "),e("a",g,[t("Git documentation"),h(a)]),t(" for installation instructions.")])]),m])}const v=s(p,[["render",b],["__file","ExtensionUpdateDescription.html.vue"]]);export{v as default};