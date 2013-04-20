---
layout: post
title: 中文markdown转pdf
category: notes
---

这里需要用个两个利器，就是“pandoc”和“xetex”。

pandoc
======
pandoc软件包提供了一个工具——markdown2pdf，它可以直接把markdown文件转化为pdf文件，
为我们省去了中间步骤等麻烦的东西，一步就位。但是当我们的文件中有中文时，
就得稍微设置一下了。那到底都要设置些什么呢？

TeX引擎
-------
在生成pdf文件时，markdown2pdf其实还是先转换成了TeX文件的，然后用默认引擎pdftex
来导出pdf。而对于排版引擎，我还是偏爱XeTeX的，毕竟人原生就支持unicode。pdftex
虽然使用CJK宏包也能支持中文，但可选择字体实在是有点少了。

那么怎样让markdown2pdf默认使用XeTeX呢？很简单，只要加上"--xetex"选项就可以了。

TeX模板
-------
光选好了引擎还是不够的，模版也得设置一下。否则就会因为没有设定合适的字体，导致
最终中文还是显示不出来。

那模板要怎么写呢？一个简便的方法就是，使用`pandoc -D latex > pandoc.template`导出
pandoc的默认模板，然后修改一下，加上点中文的配置就行了。

    \ifxetex
    	\usepackage{xeCJK}
    	\setCJKmainfont{SimSun}
    	\setCJKsansfont{SinSun}
    	\setCJKmonofont{SimSun}
    \fi

XeTeX原生就已经支持中文了，这里我们所使用的xeCJK宏包，只是针对中文习惯
把排版做了一些调整。然后用\setCJKmainfont设置一下字体，中文的话应该就
没什么问题了。

至于字体的名称，可以使用`fc-list :lang=zh`来查看。模板修改完毕后，我们
只要在生成时加上"--template=<path>"选项就OK了。

XeTeX
=====
XeTeX和上面提到的fc-list，都可以通过安装texlive这个发行版搞定。

生成
====
非常简单，综合上面的两个选项就可以：

    markdown2pdf --template=./pandoc.template --xetex hello.md


