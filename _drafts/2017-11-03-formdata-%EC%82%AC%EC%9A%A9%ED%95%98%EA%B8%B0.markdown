---
layout: post
title: "FormData 사용하기"
date: "2017-11-03 14:37:21 +0900"
---

```javascript

// create FormData instance

const fData = new FormData(document.querySelector('#login'))

```

```javascript

// FormData 가 포함하고 있는 키, 밸류 페어를 출력하기
for (let [key, value] of fData.entries()) {
  console.log(key, value)
}

```

```javascript

// FormData의 iterator를 활용하여 json string으로 변환하기
function transformJSON(formData) {
  return JSON.stringify([...formData.entries()].reduce((prev, [key, value]) => prev[key] = value))
}

```
