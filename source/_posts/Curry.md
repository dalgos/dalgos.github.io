---
title: Curry
date: 2017-05-10 12:59:48
tags:
---
# Curry? Currying?

> **n**개의 매개변수를 참조하는 함수를 하나의 매개변수를 참조하는 **n**개의 함수로 분리, 구현하는 것.

저는 다뤄본 적은 없지만 Haskell, Scala의 기본 요소라고 하는군요. Javascript에는 Currying이 기본 탑재되어 있지 않으므로 기능적 트릭을 이용해 구현해야합니다.

여러개의 매개변수를 참조하는 함수를 하나 만들어봅니다.

```javascript

function mixDoms(dom1, dom2) {
  console.log(dom1 + ' mix ' + dom2);
}
mixDoms('<a/>', '<p/>');
> '<a/> mix <p/>'
```

두개의 dom을 하나로 붙여주는 함수인데, 간략한 구현을 위해 단순 문자열로 표시했습니다. 위 함수에 두개의 dom 매개변수를 입력하면, 두개의 dom을 mix한 문자열을 출력합니다.

자 이제 첫번째 Currying을 작성합니다.

```
function mixDomCurry(dom1) {
  return function (dom2) {
    console.log(dom1 + 'mix' + dom2);
  }
}
```

이제 아래와 같은 형태로 호출이 가능합니다.

```javascript
var mixDomWithDom1 = mixDomCurry('<a/>');
mixDomWithDom1('<p/>');
> '<a/> mix <p/>'
```

이런 형태도 가능하죠.

```javascript
mixDomWithDom1('<a/>')('<p/>');
```

이제 mix 문자열도 포함하여 Currying으로 만들어봅니다.

```
var domHandler = function (method) {
  return function (dom1) {
    return function (dom2) {
      console.log(dom1 + ' ' + method + ' ' + dom2);
    }
  }
}
```

mixDoms 함수를 curry로 만들었습니다.

```javascript
var mixDoms = domHandler('mix');
var mixDomsA = mixDoms('<a/>');
mixDomsA('<p/>');
> '<a/> mix <p/>'
domHandler('mix')('<a/>')('<p/>');
> '<a/> mix <p/>'
```

여러개의 매개변수를 하나의 매개변수를 입력받는 여러개의 함수로 재구성함으로써, 사용성을 높일 수 있습니다. curry 함수를 만듭니다.

```javascript
function curry(fnc) {
  var argLen = fnc.length; //get parameter's length of fnc function.
  return (function innerFnc() {
    var argArr = Array.prototype.slice.call(arguments); //arguments => Array
    return function () {
      var innerArgArr = argArr.slice(); //Clone argArr{Array}
      var retFnc;
      Array.prototype.push.apply(innerArgArr, arguments); //innerArgArr{Array} extend with arguments.
      retFnc = innerArgArr.length >= argLen ? fnc : innerFnc; //compare innerArgArr.length and argArr.length
      return retFnc.apply(null, innerArgArr);
    }
  }());
}
```

이제 curry 함수를 이용해서 함수를 currying 형태로 만들어봅니다.

```javascript
var mixDomsCurried = curry(mixDoms);
mixDomsCurried('<a/>')('<p/>');
```

-끝-