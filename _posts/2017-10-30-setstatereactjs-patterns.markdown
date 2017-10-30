---
layout: post
title: "setState@reactjs patterns"
date: "2017-10-30 12:47:41 +0900"
image: 'https://nextfrontend.com/content/images/2017/10/react-js.png'
category: 'reactjs'
description: Use setState
tags:
- reactjs
- devs
- sugar
---
# pattern-01

```javascript
...
this.setState({
    count: 1,
});
...
```

# pattern-02
```javascript
...
this.setState(prevState => {
    return {
        count: prevState.count + 1,
    };
});
...
```

# pattern-03
```javascript
...
this.setState(prevState => {
    return Object.assign({}, prevState, {
        count: prevState.count + 1,
    });
});
...
```
