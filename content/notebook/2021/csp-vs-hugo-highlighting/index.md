---
title: "CSP vs Hugo Highlighting"
date: 2021-02-25T01:08:49+07:00
draft: true
description: "This is meta description"
---

Using CSP is the proper way these days to secure your website code. 

If you use CSP headers to add security to your website and you use Hugo with Syntax highlighting you may run into a problem in that by default Hugo generates inline styles.

That is html like

```
<span style="color:#a6e22e">headers</span>[<span style="color:#e6db74"
>&#39;referrer-policy&#39;</span
>] <span style="color:#f92672">=</span> [{<span style="color:#a6e22e">key</span
><span style="color:#f92672">:</span>
<span style="color:#e6db74">&#39;Referrer-Policy&#39;</span>,
<span style="color:#a6e22e">value</span><span style="color:#f92672">:</span>
<span style="color:#e6db74">&#39;same-origin&#39;</span>}];
```

A good Content Security Policy will not allow this - and while you can workaround it by allowing ‘unsafe-inline’ this (the clue is in the name) is unsafe.

To avoid this configure Hugo to use classes for syntax highlighting and generate a CSS file for it

https://gohugo.io/getting-started/configuration-markup#highlight


```
[markup]
[markup.highlight]
noClasses = false
style = "monokai"
```

then 

```
hugo gen chromastyles --style=monokai > syntax.css
```

include this css file in your theme and you have highlighting without inline styles,

It should look like this

```
<span class="p">];</span> <span class="nx">headers</span><span class="p">[</span
><span class="s2">&#34;referrer-policy&#34;</span><span class="p">]</span>
<span class="o">=</span> <span class="p">[</span> <span class="p">{</span>
<span class="nx">key</span><span class="o">:</span>
<span class="s2">&#34;Referrer-Policy&#34;</span><span class="p">,</span>
<span class="nx">value</span><span class="o">:</span>
<span class="s2">&#34;same-origin&#34;</span> <span class="p">},</span>
<span class="p">];</span>
```
Now it should work with your strong CSP
