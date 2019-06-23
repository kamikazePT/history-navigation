# @history-navigation/react-history

Hooks to easily integrate with react with history module for transition animations when navigating back and forward

# Install

```sh
$ npm i @history-navigation/react-history
$ yarn add @history-navigation/react-history
```

# API

## Table of contents

- [class RoutingNavigation](#class-routingnavigation)
- [function useRoutingNavigation](#function-useroutingnavigation)
  - [Examples](#examples)

## class RoutingNavigation

| Parameter       | Type    | Description                                      |
| :-------------- | :------ | :----------------------------------------------- |
| `props.history` | History | browser history instance from history npm module |
| `props.chilren` | func    | Children function                                |

**Returns:** jsx

* * *

## function useRoutingNavigation

| Parameter | Type    | Description                                      |
| :-------- | :------ | :----------------------------------------------- |
| `history` | History | browser history instance from history npm module |

**Returns:** Movement — The movement state

### Examples

> const { wasForward, wasBackward, steps } = useRoutingNavigation(history);
