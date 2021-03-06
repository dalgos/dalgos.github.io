---
path: '/2018-04-10-01'
date: '2018-04-10T10:00:00.000Z'
title: 'Presentational & Container Component'
featuredImage: './cover.png'
---
# Pattern

재사용성을 높이기 위한 패턴으로, 데이터를 관리하는 `Container Components`와 렌더링을 담당하는 `Prensentation Components`로 분리하여 개발하는 패턴입니다. 매우 단순하지만, 유용한 패턴이라는군요.

<!-- more -->

## Presentational Components

> Container Components 로 부터 전달받은 데이터를 바탕으로 렌더링을 수행합니다.

TodoList.jsx

```jsx
export default TodoList = props =>{
  return (
    {props.lists.map(list => <li>{list.title} - {list.isComplete}</li>)}
  )
}
```

`Presentational Component`는 Container로 부터 전달받은 props 를 바탕으로 렌더링만을 담당합니다.

## Container Components

> Container Components는 데이터를 가져와서(fetching) 해당 하위 구성요소를 렌더링합니다.

Todo.jsx

```jsx
import TodoList from './TodoList'

export default class Todo extends React.Component {
  state = {
    list: [],
  }
  componentDidMount() {
    fetch('./api')
      .then(res => res.json())
      .then(json => this.setState({ list: json.list }))
  }
  render() {
    return (
      <TodoList
        list={this.state.list}
      />
    )
  }
}
```

`Container Component`(이하 Container)는 데이터를 fetch 하여 state에 할당하고, Presentational Component에 전달합니다. Container Component를 포함할 수 있으며, 다수 Component를 포함할 수 있습니다.

데이터와 렌더링 영역을 분리함으로써 component의 재사용성을 높이고, 보다 복잡하지 않게 구성이 가능합니다.
