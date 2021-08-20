# 솔라커넥트 투두 리스트

## 배포
주소: https://sloar-todo.netlify.app/

## 실행 방법

```
npm install && npm run start
```

## Skills
 `React`, `styled-components`, `ES6+`, `typescript`

## 구현 기능
주어진 베이스 코드를 기반으로 몇 개의 버그를 수정하고 필요한 기능을 추가함 

### 기본 요구사항
- Todo List 화면에 현재 시간을 표시
- Todo 항목에 완료 버튼을 누르면 Todo가 완료되도록 구현
- [Datepicker](https://ant.design/components/date-picker/)을 사용하여 목표일 입력받도록 구현
- Todo 항목에서 완료 목표일 표시
- [Modal](https://ant.design/components/modal/)을 띄워 예외 표시
- 버그 수정

### 과제구현 목록
- [x] Todo List 화면에 현재 시간을 표시
- [x] Todo 완료 기능 구현
- [x] 목표일 입력받기 및 Todo 항목에 표시
- [x] 예외처리
  - [x] 200자 이상 입력했을 때
  - [x] 아무것도 입력하지 않았을 때
  - [x] space만 입력했을 때
- [x] 모달 사용 
- [x] 버그 수정
  - [x] item 삭제 후 추가했을 때 id 값 중복되는 이슈 해결
  - [x] todo 지우기 기능 완성 및 원하지 않는 값이 지워지는 이슈 해결
  - [x] 기타 타입스크립트 타이핑 관련 에러 해결

## 시연 GIF

### Todo 입력 기능
![normal](https://user-images.githubusercontent.com/23569208/130186605-15da37ec-a291-4ead-8c70-8a29e3c15439.gif)
### 완료 기능
![finish](https://user-images.githubusercontent.com/23569208/130186286-730e0931-518f-4367-b17c-d927d6d86fe2.gif)
### 삭제 기능
![remove](https://user-images.githubusercontent.com/23569208/130186322-5ec01dd7-d27d-4377-8ee2-605211aa9ec7.gif)
### 모달 사용
![modal](https://user-images.githubusercontent.com/23569208/130186334-274e0d00-7c3f-4aec-8450-37645617c43b.gif)
