---
layout: post
title: "setState@reactjs patterns"
date: 2017-10-30 12:32:00
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/c_fill,h_399,w_760/v1503153729/golpe_ghb84o.jpg'
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
category: 'reactjs'
tags:
- reactjs
- devs
- sugar
twitter_text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
