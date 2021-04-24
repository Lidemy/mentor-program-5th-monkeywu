``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 1 行，宣告變數 i = 0，如果 i 小於參數 arr 的長度則執行，跑完每次回圈後 i+1
2. 執行第 2 行，判斷參數 arr 第 i 個的值是否等於小於 0 ，如果是的話回傳 `'invalid'`
3. 執行第 4 行，宣告變數 i = 2，如果 i 小於參數 arr 的長度則執行，跑完每次回圈後 i+1
4. 執行第 5 行，判斷參數 arr 第 i 個的值是否不等於參數 arr 第 i - 1 個及第 i - 2 的總和，如果不等於則回傳 `'invalid'`
5. 執行第 7 行，回傳 `'valid'`
6. 執行第 10 行，呼叫函式 `isValid` 並帶入參數 `[3, 5, 8, 13, 22, 35]` 