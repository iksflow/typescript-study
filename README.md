# Learning Typescript!

## 1. Install

### 1.1. node 설치 확인

```sh
$ node -v
zsh: command not found: node
```

### :warning: node가 없으면 nvm으로 설치

```sh
# Homebrew로 node.js 버전관리자인 nvm을 설치한다
$ brew install nvm
...

# nvm install --lts 명령어로 최신 LTS 버전(v18.16.1)을 설치한다.
$ nvm install --lts
...

# nvm use로 설치한 버전을 사용하도록 설정
$ nvm use 18.16.1
```

### 1.2. Typescript 설치

```sh
# typescript 설치
$ npm install -g typescript
...

# 정상적으로 설치되었는지 tsc -v 명령어로 TS 버전을 확인
$ tsc -v
Version 5.1.6
```

## 2. Typescript 컴파일

### 2.1. greeter.ts 파일 작성

```ts
// greeter.ts
function greeter(person: string) {
  return "Hello, " + person;
}

// greeter 함수에서 요구하는 타입과 다름.
let user = [0, 1];
document.body.textContent = greeter(user);
```

### 2.2. tsc 명령어로 컴파일 해보기

```sh
$ tsc greeter.ts
TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
...
# 오류가 발생하더라도 greeter.js파일을 생성한다.
$ ls -al
greeter.js greeter.ts
```

:warning: 오류가 발생하더라도 컴파일 결과가 생성된다는 것에 주의.

### 2.3. 파일을 수정하고 다시 컴파일

greeter함수의 타입에 맞게 코드를 수정한다.

```ts
function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane";
document.body.textContent = greeter(user);
```

다시 tsc 명령을 실행하면 에러메시지 없이 컴파일을 완료한다.

```sh
# 에러 없음
$ tsc greeter.ts
$ ls
greeter.js greeter.ts
```
