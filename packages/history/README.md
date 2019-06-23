# @history-navigation/history

Extension to history object to listen for user navigation on an SPA (e.g. clicking back and forward on the browser or history.goBack/history.goForward method calls);

# Install

```sh
$ npm i @history-navigation/history
$ yarn add @history-navigation/history
```

# API

## Table of contents

- [function listenToNaviationBinder](#function-listentonaviationbinder)
  - [Examples](#examples)
- [function listenToNaviationWrapper](#function-listentonaviationwrapper)
  - [Examples](#examples-1)
- [function onBack](#function-onback)
- [function onForward](#function-onforward)

## function listenToNaviationBinder

listen to history navigation changes

| Parameter   | Type                             | Description                  |
| :---------- | :------------------------------- | :--------------------------- |
| `onForward` | [onForward](#function-onforward) | callback on forward movement |
| `onBack`    | [onBack](#function-onback)       | callback on back movement    |

### Examples

> history::listenToNavigation(onForward, onBack)

> listenToNavigation.bind(history)(onForward, onBack)

* * *

## function listenToNaviationWrapper

| Parameter | Type   | Description           |
| :-------- | :----- | :-------------------- |
| `history` | object | history object to use |

**Returns:** function([onForward](#function-onforward), [onBack](#function-onback)) — that listens to history navigation changes

### Examples

> listenToNavigation(history)(onForward, onBack)

* * *

## function onBack

Callback to execute when history moves backwards.

| Parameter | Type   | Description                |
| :-------- | :----- | :------------------------- |
| `steps`   | number | number of steps in history |

* * *

## function onForward

Callback to execute when history moves forward.

| Parameter | Type   | Description                |
| :-------- | :----- | :------------------------- |
| `steps`   | number | number of steps in history |
