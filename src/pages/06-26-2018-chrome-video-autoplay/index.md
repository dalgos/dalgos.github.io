---
path: '/2018-06-26-01'
date: '2018-06-26T10:00:00.000Z'
title: 'Chrome Autoplay Policy Changes'
featuredImage: './cover.jpg'
---

현재 라이브 동영상을 재생하는 컴포넌트를 관리하고 있습니다. 최근 크롬에서 자동재생이 정상적으로 이뤄지지 않는 이슈가 발생하여 살펴보니, 아래와 같은 이슈가 있었더군요.

[Chrome Autoplay Policy Changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

음소거(muted) 상태일 경우에는 자동재생이 허용되므로, video 태그의 muted 속성을 추가하기로 합니다.

```javascript
...
render() {
  return (
    <video
      muted={this.props.muted}
      autoPlay={true}
    />
  )
}
...
```

컴포넌트의 muted 속성은 음소거 버튼을 클릭시 toggle 되도록 작성하였습니다.

자동재생이 정상적으로 동작하는 것을 확인한 것으로 수정을 종료합니다.