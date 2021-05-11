## 請以自己的話解釋 API 是什麼

為了達到某種需求的管道，例如本次作業 1，我需要拿到書本列表，對方提供了列表的 api，我就能透過 api 得到我要的結果去做處理


---
## 請找出三個課程沒教的 HTTP status code 並簡單介紹

202 Accepted 此請求已經被接受但尚未處理。此狀態為非承諾性，代表 HTTP 無法在之後傳送一個非同步的回應告知請求的處理結果。最初目的為外部程序或其他伺服器處理請求的情況，或用於批次處理中。
307 Temporary Redirect (en-US) 伺服器發送此回應來使客戶端保持請求方法不變向新的地址發出請求。 與 302 Found 相同，差別在於客戶端不許變更請求方法。例如，應使用另一個 POST 請求來重複發送 POST 請求。
411 Length Required 伺服器拒絕該請求，因為 Content-Length 頭沒有被定義，然而伺服器要求。


---
## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

|description      | Method |   Path   |parameter| Example    |
|:--------------|:------:|:---------|---------|------------|
|回傳所有餐廳資料|GET     |/restaurantInfo|_limit:限制資料回傳數量| /restaurantInfo?_limit=10|
|回傳單一餐廳資料|GET     |/restaurantInfo/:id|無|/restaurantInfo/15|
|新增餐廳       |POST     |/restaurantInfo|name: 餐廳名|無|
|刪除餐廳       |DELETE   |/restaurantInfo/:id|無|無|
|更改餐廳       |PATCH    |/restaurantInfo/:id|name: 餐廳名|無|

