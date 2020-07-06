(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{619:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),a("h2",{attrs:{id:"git常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" git常用命令")]),t._v(" "),a("h3",{attrs:{id:"分支命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支命令"}},[t._v("#")]),t._v(" 分支命令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("git branch   // 查看git的所有分支")])]),t._v(" "),a("li",[a("p",[t._v("git branch dev  // 创建dev分支")])]),t._v(" "),a("li",[a("p",[t._v("git checkout dev  // 切换到一个已经存在的分支")])]),t._v(" "),a("li",[a("p",[t._v("git checkout -b dev  // 创建dev分支,并切换到dev分支")])]),t._v(" "),a("li",[a("p",[t._v("git checkout --track origin/branch_name // 创建dev分支并关联远程分支")])]),t._v(" "),a("li",[a("p",[t._v("git checkout -b dev origin/dev  // 根据远程dev创建本地dev分支但没有关联,并切换到dev分支")])]),t._v(" "),a("li",[a("p",[t._v("不关联的分支提交代码： git push origin HEAD:branch_name")])]),t._v(" "),a("li",[a("p",[t._v("git branch -d dev  // 删除dev分支")])]),t._v(" "),a("li",[a("p",[t._v("git checkout master  // 切换到主分支")])]),t._v(" "),a("li",[a("p",[t._v("git merge dev   // 将dev分支合并到master分支")])]),t._v(" "),a("li",[a("p",[t._v("git merge –no-ff 可以保存你之前的分支历史。能够更好的查看 merge历史，以及branch 状态。")])]),t._v(" "),a("li",[a("p",[t._v("git merge 则不会显示 feature，只保留单条分支记录。")])])]),t._v(" "),a("h3",{attrs:{id:"其它命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它命令"}},[t._v("#")]),t._v(" 其它命令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("git init  // 初始化一个Git仓库")])]),t._v(" "),a("li",[a("p",[t._v("git status   // 查看仓库的状态")])]),t._v(" "),a("li",[a("p",[t._v("git add .   // 将所有修改添加到暂存区")])]),t._v(" "),a("li",[a("p",[t._v("git reflog   // 在退回到旧版本之后可以查看旧版本之前的提交日志\n当我们想从一个旧版本退回到新版本但是我们关闭了shell窗口,不能查看之前的commit id了,就可以通过")])]),t._v(" "),a("li",[a("p",[t._v("git reflog 查看到之前的版本的commit id")])]),t._v(" "),a("li",[a("p",[t._v("git reset --hard 3628164 //退回版本")])]),t._v(" "),a("li",[a("p",[t._v("git log  // 查看git的commit信息,每次提交的信息包括注视在内")])]),t._v(" "),a("li",[a("p",[t._v("git clone git://github.com/schacon/grit.git //从服务器上将代码给拉下来")])]),t._v(" "),a("li",[a("p",[t._v("git config --list //看所有用户")])]),t._v(" "),a("li",[a("p",[t._v("git config --system --list  查看系统配置")])]),t._v(" "),a("li",[a("p",[t._v("git config --global  --list  查看当前用户配置")])]),t._v(" "),a("li",[a("p",[t._v("取消git的全局设置:")])]),t._v(" "),a("li",[a("p",[t._v("git config --global --unset user.name")])]),t._v(" "),a("li",[a("p",[t._v("git config --global --unset user.email")])])]),t._v(" "),a("h3",{attrs:{id:"git操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git操作"}},[t._v("#")]),t._v(" git操作")]),t._v(" "),a("h4",{attrs:{id:"merge合并流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge合并流程"}},[t._v("#")]),t._v(" merge合并流程")]),t._v(" "),a("p",[t._v("​\t\tgit checkout dev\n​\t\tgit merge wz"),a("br"),t._v("\n​\t\tgit push origin dev")]),t._v(" "),a("h4",{attrs:{id:"git初始化到提交流程："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git初始化到提交流程："}},[t._v("#")]),t._v(" git初始化到提交流程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("git init")])]),t._v(" "),a("li",[a("p",[t._v("git add .")])]),t._v(" "),a("li",[a("p",[t._v('git commit -m "first commit"')])]),t._v(" "),a("li",[a("p",[t._v("git remote add origin https://git.oschina.net/name/package.git")])]),t._v(" "),a("li",[a("p",[t._v("git push -u origin master")])])]),t._v(" "),a("h3",{attrs:{id:"git别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git别名"}},[t._v("#")]),t._v(" git别名")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("git config --global alias.pl pull")])]),t._v(" "),a("li",[a("p",[t._v("C:\\Users\\wangzhen.DOMRST /.gitconfig  用户文件下编辑")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  co"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("checkout \n\tci"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("commit \n\tst"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("status \n\tsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stash \n\tpl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pull \n\tps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("push \n  dt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("difftool \n\tl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("log—stat \n\tcp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cherry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pick \n\tca"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a \n\tb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("branch \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h4",{attrs:{id:"将本地仓库与远程仓库连接起来："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将本地仓库与远程仓库连接起来："}},[t._v("#")]),t._v(" 将本地仓库与远程仓库连接起来：")]),t._v(" "),a("ul",[a("li",[t._v("git remote add origin 远程仓库地址")])]),t._v(" "),a("h3",{attrs:{id:"git配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" git配置")]),t._v(" "),a("ul",[a("li",[t._v("配置全局用户名和邮箱（不加双引号）")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("git config --global user.email 1947914887@qq.com")])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("git config --global user.name xxx")])])]),t._v(" "),a("ul",[a("li",[t._v("配置单个项目仓库用户名和邮箱")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("git config user.email 1947914887@qq.com")])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("git config user.name xxx")])])]),t._v(" "),a("ul",[a("li",[t._v("git克隆github速度慢配置")])]),t._v(" "),a("blockquote",[a("p",[t._v("找到文件 C:\\Windows\\System32\\drivers\\etc\\hosts\n添加")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("#git配置\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.30")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".253")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".113")]),t._v("  github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("151.101")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".112")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".249")]),t._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fastly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v(".gitconfig")])]),t._v(" "),a("blockquote",[a("p",[t._v("C:\\Users\\wangzhen.gitconfig")])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\tname = wangzhen\n\temail = wangzhen"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),t._v("@wondersgroup.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("credential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\thelper = manager\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    co = checkout\n    ci = commit\n    st = status\n    pl = pull\n    ps = push\n    dt = difftool\n    l = log --stat\n    cp = cherry-pick\n    ca = commit -a\n    b = branch\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ul",[a("li",[t._v("config文件")])]),t._v(" "),a("blockquote",[a("p",[t._v("路径 C:\\Users\\wangzhen.ssh\\config")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# github\nHost github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n    HostName github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n    User git\n    IdentityFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa_github\n\n# gitLab \n    Host git@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.241")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".65")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".201")]),t._v("\n    HostName git@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.241")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".65")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".201")]),t._v("\n    User git\n    IdentityFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa_gitlab\n\n# gitee\nHost gitee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n    Port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n    HostName gitee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n    User git\n    IdentityFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa_gitee\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("ul",[a("li",[t._v("配置密钥")])]),t._v(" "),a("blockquote",[a("p",[t._v("-C后面跟的邮箱不能跟gitee,github,gitlab之前配置过的密钥使用过的邮箱重复\n"),a("code",[t._v('ssh-keygen -t rsa -C "youremail@example.com"')]),t._v("\nid_rsa_gitee, id_rsa_gitlab,id_rsa_github\n注意点：文件下必须存在id_rsa和id_rsa.pub，可以以公司gitlab命名为默认id_rsa，github和gitee以id_rsa_github和id_rsa_gitee命名\n打开id_rsa.pub\n复制内容到github添加SSH密钥，，然后在仓库邀请队友，邀请后队友邮箱接收到信息，队长再把仓库邀请地址发给队友，队友就可以协同开发了\n先初始化本地仓库，再pull\ngit init\ngit pull")])]),t._v(" "),a("h4",{attrs:{id:"创建忽略文件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建忽略文件："}},[t._v("#")]),t._v(" 创建忽略文件：")]),t._v(" "),a("p",[t._v("touch .gitignore")]),t._v(" "),a("p",[t._v("git阮一峰总结命令： "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"使-gitignore中的内容生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使-gitignore中的内容生效"}},[t._v("#")]),t._v(" 使.gitignore中的内容生效")]),t._v(" "),a("ul",[a("li",[t._v("git rm -r --cached .")]),t._v(" "),a("li",[t._v("git add .")]),t._v(" "),a("li",[t._v("git commit -m 'update .gitignore'")])])])}),[],!1,null,null,null);s.default=n.exports}}]);