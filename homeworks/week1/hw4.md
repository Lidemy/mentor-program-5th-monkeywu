## 跟你朋友介紹 Git

相信在學生時代團體做報告時，許多人總會遇過一種情況： 趕出了第一版本的報告『 期末報告v1 』，並傳給組員看，這時候有同學覺得某些地方要修改，於是產生出了『 期末報告v2 』，隨著越來越多的聲音出現，期末報告的檔案數也越來越多了，有時還會忘記哪個版本的報告改了什麼，這時候 Git 的用處就出現了，Git 為版本控制的工具，可以在不同的階段當中儲存進度，記錄各種改動，來幫助我們釐清各種階段發生的事情。

>### 管理笑話

1. 首先 mkdir joke && cd joke 
2. 輸入 git init 
3. 在 joke 資料夾當中 touch `joke.md` 新增檔案 
4. 這時輸入 git status，會發現 `joke.md` 在 Untracked files 中，代表這一個檔案還沒有被 git 追蹤
5. 輸入 git add `joke.md`（單一檔案） 或是 git add .（所有檔案） 將檔案加入 git 的 stagin area
6. 這時再一次的輸入 git status，發現檔案狀態變為 Changes to be committed，表示檔案已經被追蹤
7. 將`joke.md`編輯完儲存後，輸入 git commit 'joke_v1' 建立第一版的笑話
8. 當有多個版本之後，可以透過 git log 來觀看每個版本的版本號，並且透過 git checkout 版本號 來查看內容，輸入 git checkout master 則回到最新的版本