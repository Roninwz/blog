(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{513:function(t,e,l){"use strict";l.r(e);var r=l(43),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"git-工作流"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#git-工作流"}},[t._v("#")]),t._v(" git 工作流")]),t._v(" "),l("blockquote",[l("p",[t._v("Git flow, Github flow,Gitlab flow")])]),t._v(" "),l("h3",{attrs:{id:"_1-git-flow-工作流"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-flow-工作流"}},[t._v("#")]),t._v(" 1. Git flow 工作流")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("长期分支：")]),t._v(" "),l("blockquote",[l("p",[t._v("（1）主分支 master，（2）开发分支 develop\nmaster 用于存放对外发布的版本，任何时候在这个分支拿到的，都是稳定的分布版；develop 用于日常开发，存放最新的开发版。")])])]),t._v(" "),l("li",[l("p",[t._v("短期分支：")]),t._v(" "),l("blockquote",[l("p",[t._v("一旦完成开发，它们就会被合并进 develop 或 master，然后被删除。\n（1） 功能分支（feature branch）（2）补丁分支（hotfix branch）（3）预发分支（release branch）")])])]),t._v(" "),l("li",[l("p",[t._v("介绍：")]),t._v(" "),l("p",[t._v('Git flow 的优点是清晰可控，缺点是相对复杂，需要同时维护两个长期分支。大多数工具都将 master 当作默认分支，可是开发是在 develop 分支进行的，这导致经常要切换分支，非常烦人。更大问题在于，这个模式是基于"版本发布"的，目标是一段时间以后产出一个新版本。但是，很多网站项目是"持续发布"，代码一有变动，就部署一次。这时，master 分支和 develop 分支的差别不大，没必要维护两个长期分支。')])])]),t._v(" "),l("h3",{attrs:{id:"_2-github-flow"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-github-flow"}},[t._v("#")]),t._v(" 2. Github flow")]),t._v(" "),l("blockquote",[l("p",[t._v('是 Git flow 的简化版，专门配合"持续发布"。它是 Github.com 使用的工作流程。\n它只有一个长期分支，就是 master，因此用起来非常简单。')])]),t._v(" "),l("ul",[l("li",[l("p",[t._v("工作流程：")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("第一步：根据需求，从 master 拉出新分支，不区分功能分支或补丁分支。")])]),t._v(" "),l("li",[l("p",[t._v("第二步：新分支开发完成后，或者需要讨论的时候，就向 master 发起一个 pull request（简称 PR）。")])]),t._v(" "),l("li",[l("p",[t._v("第三步：Pull Request 既是一个通知，让别人注意到你的请求，又是一种对话机制，大家一起评审和讨论你的代码。对话过程中，你还可以不断提交代码。")])]),t._v(" "),l("li",[l("p",[t._v("第四步：你的 Pull Request 被接受，合并进 master，重新部署后，原来你拉出来的那个分支就被删除。（先部署再合并也可。）")])])])]),t._v(" "),l("li",[l("p",[t._v("介绍：")]),t._v(" "),l("p",[t._v('Github flow 的最大优点就是简单，对于"持续发布"的产品，可以说是最合适的流程。')]),t._v(" "),l("p",[t._v("问题在于它的假设：master 分支的更新与产品的发布是一致的。也就是说，master 分支的最新代码，默认就是当前的线上代码。")]),t._v(" "),l("p",[t._v("可是，有些时候并非如此，代码合并进入 master 分支，并不代表它就能立刻发布。比如，苹果商店的 APP 提交审核以后，等一段时间才能上架。这时，如果还有新的代码提交，master 分支就会与刚发布的版本不一致。另一个例子是，有些公司有发布窗口，只有指定时间才能发布，这也会导致线上版本落后于 master 分支。")]),t._v(" "),l("p",[t._v("上面这种情况，只有 master 一个主分支就不够用了。通常，你不得不在 master 分支以外，另外新建一个 production 分支跟踪线上版本。")])])]),t._v(" "),l("h3",{attrs:{id:"_3-gitlab-flow"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-gitlab-flow"}},[t._v("#")]),t._v(" 3. Gitlab flow")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("简介： 是 Git flow 与 Github flow 的综合。它吸取了两者的优点，既有适应不同开发环境的弹性，又有单一主分支的简单和便利。")])]),t._v(" "),l("li",[l("p",[t._v("上游优先：")]),t._v(" "),l("blockquote",[l("p",[t._v('Gitlab flow 的最大原则叫做"上游优先"（upsteam first），即只存在一个主分支 master，它是所有其他分支的"上游"。只有上游分支采纳的代码变化，才能应用到其他分支。')])])]),t._v(" "),l("li",[l("p",[t._v("持续发布：")]),t._v(" "),l("blockquote",[l("p",[t._v('对于"持续发布"的项目，它建议在 master 分支以外，再建立不同的环境分支。比如，"开发环境"的分支是 master，"预发环境"的分支是 pre-production，"生产环境"的分支是 production。'),l("br"),t._v('\n开发分支是预发分支的"上游"，预发分支又是生产分支的"上游"。代码的变化，必须由"上游"向"下游"发展。比如，生产环境出现了 bug，这时就要新建一个功能分支，先把它合并到 master，确认没有问题，再 cherry-pick 到 pre-production，这一步也没有问题，才进入 production。'),l("br"),t._v("\n只有紧急情况，才允许跳过上游，直接合并到下游分支。")])])]),t._v(" "),l("li",[l("p",[t._v("版本发布:")]),t._v(" "),l("blockquote",[l("p",[t._v('对于"版本发布"的项目，建议的做法是每一个稳定版本，都要从 master 分支拉出一个分支，比如 2-3-stable、2-4-stable 等等。'),l("br"),t._v("\n以后，只有修补 bug，才允许将代码合并到这些分支，并且此时要更新小版本号。")])])])]),t._v(" "),l("p",[t._v("链接： "),l("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/12/git-workflow.html"),l("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);