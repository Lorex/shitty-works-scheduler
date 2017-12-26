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
```


### 用法

+ 把員工／學生名字加入 `config/schedule.json` 裡面的 `employee` 陣列
+ 把已經當過值週生的員工／學生名字加入 `config/schedule.json` 裡面的 `employeeUsed` 陣列
+ 系統會於每個禮拜排新的值週生
+ 如果已經排完一輪，將會初始化陣列並重新開始一輪排程
+ 啥？你要的是值日生？自己改啊！
