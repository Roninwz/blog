(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{558:function(t,s,a){"use strict";a.r(s);var n=a(43),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-总结"}},[t._v("#")]),t._v(" git 总结")]),t._v(" "),a("h3",{attrs:{id:"git-克隆-github-速度慢配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-克隆-github-速度慢配置"}},[t._v("#")]),t._v(" git 克隆 github 速度慢配置")]),t._v(" "),a("blockquote",[a("p",[t._v("找到文件 C:\\Windows\\System32\\drivers\\etc\\hosts"),a("br"),t._v("\n添加")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("#git配置\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.30")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".253")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".113")]),t._v("  github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("151.101")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".112")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".249")]),t._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fastly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"git-初始化到提交流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-初始化到提交流程"}},[t._v("#")]),t._v(" git 初始化到提交流程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("git init")])]),t._v(" "),a("li",[a("p",[t._v("git add .")])]),t._v(" "),a("li",[a("p",[t._v('git commit -m "first commit"')])]),t._v(" "),a("li",[a("p",[t._v("git remote add origin https://git.oschina.net/name/package.git")])]),t._v(" "),a("li",[a("p",[t._v("git push -u origin master")])])]),t._v(" "),a("h3",{attrs:{id:"git-rebase-流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-流程"}},[t._v("#")]),t._v(" git rebase 流程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("n 个 commit")])]),t._v(" "),a("li",[a("p",[t._v("git rebase -i develop")]),t._v(" "),a("blockquote",[a("p",[t._v("（1）除第一行外，其他修改开始的 pick 为 s"),a("br"),t._v("\n（2）填写合并提交注释")])])]),t._v(" "),a("li",[a("p",[t._v("切换回目标分支：git checkout develop")])]),t._v(" "),a("li",[a("p",[t._v("合并: git merge feature")])])]),t._v(" "),a("h3",{attrs:{id:"使-gitignore-中的内容生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使-gitignore-中的内容生效"}},[t._v("#")]),t._v(" 使.gitignore 中的内容生效")]),t._v(" "),a("ul",[a("li",[t._v("git rm -r --cached .")]),t._v(" "),a("li",[t._v("git add .")]),t._v(" "),a("li",[t._v("git commit -m 'update .gitignore'")])]),t._v(" "),a("h3",{attrs:{id:"创建忽略文件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建忽略文件："}},[t._v("#")]),t._v(" 创建忽略文件：")]),t._v(" "),a("p",[t._v("touch .gitignore")]),t._v(" "),a("p",[t._v("git 阮一峰总结命令： "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"git-pull-拉错分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-拉错分支"}},[t._v("#")]),t._v(" git pull 拉错分支")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("git reflog 查看你的历史变更记录\n"),a("blockquote",[a("p",[t._v("demo")])])])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fdb70fe "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pull origin newpbft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fast"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("forward\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("a9a83 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" checkout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" guan to master\nb3fa4c3 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" copy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" newpbft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first init\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71")]),t._v("bf0ec "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" checkout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" newpbft to guan\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71")]),t._v("bf0ec "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" add "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to clean up certStore and blockStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1006")]),t._v("d67 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" Add "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PBFT")]),t._v(" branch to Puppeth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfa3fb56 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" change some errors about packages and vars\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("f40fdc "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" checkout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" master to newpbft\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("a9a83 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" clone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yeongchingtarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("geth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pbft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("git reset --hard HEAD@{n} （n 是你要回退到的引用位置）回退")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("比如上图可运行 git reset --hard 40a9a83")])]),t._v(" "),a("h3",{attrs:{id:"git修改分支名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git修改分支名称"}},[t._v("#")]),t._v(" git修改分支名称")]),t._v(" "),a("ul",[a("li",[t._v("1.重命名")])]),t._v(" "),a("p",[a("code",[t._v("git branch -m oldBranchName newBranchName")])]),t._v(" "),a("ul",[a("li",[t._v("2.删除远程分支")])]),t._v(" "),a("p",[a("code",[t._v("git push origin :oldBranchName")])]),t._v(" "),a("ul",[a("li",[t._v("3.将重命名过的分支提交")])]),t._v(" "),a("p",[a("code",[t._v("git push origin newBranchName")])])])}),[],!1,null,null,null);s.default=r.exports}}]);