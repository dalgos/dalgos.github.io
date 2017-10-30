---
layout: post
title: "class mix-ins"
date: "2017-10-30 15:01:10 +0900"
image: "http://syndicode.co/wp-content/uploads/2016/02/wallhaven-120534.png"
category: 'javascript'
description: Use Class mix-ins
tags:
- javascript
- es6
- sugar
---
추상 서브 클래스 또는 Mix-in은 클래스를 위한 템플릿입니다. ECMAScript 클래스는 하나의 단일 슈퍼 클래스만을 가질 수 있어, 다중 상속은 불가능합니다. 기능은 반드시 슈퍼클래스로부터 제공되어야 하죠.

슈퍼클래스를 인자로 받고, 이 슈퍼클래스를 확장하는 서브클래스를 생성하여 반환하는 함수를 활용하면 ECMAScript에서 Mix-in을 구현할 수 있습니다.

```javascript
const FirstMixin = Base => class extends Base {
  first() {
    // code here.
  }
}

const SecondMixin = Base => class extends Base {
  second() {
    // code here.
  }
}

// Create Class mix-ins

class BaseClass {
  constructor() {
    super();
    // code here.
  }
}

class Third extends FirstMixin(SecondMixin(BaseClass)) {
  Third() {
    // code here.
  }
}
```

BaseClass의 Mix-in을 상속받은 Third 클래스를 생성할 수 있습니다.

[출처: MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
