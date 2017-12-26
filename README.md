# shitty-works-scheduler
## 公司內浪費才能專案：排值週生

不用我解釋，想也知道這是個排值週生的小程式。

### 安裝
+ 從 github 抓 repo
```
$ git clone https://github.com/Lorex/shitty-works-scheduler.git
```
+ 安裝
```
$ npm i
$ npm i -g sails@beta
```
+ 執行
```
$ sails lift
```
+ 去網頁查看
```
http://<your_domain>:1338

### 用法

+ 把員工／學生名字加入 `config/schedule.json` 裡面的 `employee` 陣列
+ 把已經當過值週生的員工／學生名字加入 `config/schedule.json` 裡面的 `employeeUsed` 陣列
+ 系統會於每個禮拜排新的值週生
+ 如果已經排完一輪，將會初始化陣列並重新開始一輪排程
+ 啥？你要的是值日生？自己改啊！



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

