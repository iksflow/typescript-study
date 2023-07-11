# Learning Typescript!

## 1. Typescript 설치

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

## 3. Typescript 환경 설정 파일 생성

`tsconfig.json`을 활용하면 세부적인 컴파일 옵션을 설정할 수 있다.  
`tsc` 명령어는 인자를 전달하지 않으면 `tsconfig.json`을 찾아서 정의된 내용을 따라 해당하는 ts파일을 컴파일한다.  
`tsc --init` 으로 `tsconfig.json` 파일을 생성할 수 있다.

```sh
$ tsc --init

Created a new tsconfig.json with:
  TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```

## 4. Typescript 컴파일 ouput 경로 변경

`tsc` 명령어로 컴파일 하면 `ts`파일과 같은 경로에 `js`파일을 만든다.  
이렇게 되면 컴파일 결과물인 js파일까지 필요없이 git에 추가될 수 있기 때문에 소스 파일 관리가 복잡해진다.  
`tsconfig.json`에 설정값을 추가해서 `ts`와 `js`를 나누어 저장하면 이 문제를 해결할 수 있다.
다음 코드를 추가해 output과 source root경로를 수정한다.  
일반적으로 `ts`파일을 `src` 하위에 보관하므로 `rootDir="./src"`를 추가하고, 컴파일 결과인 `js`파일들은 `dist` 하위에 보관하므로 `outDir="./dist"`를 추가한다.

- rootDir: 컴파일 할 대상(.ts파일)이 있는 경로
- outDir: 컴파일을 완료해서 생성된 결과물을 저장할 경로

```json
{
  "compilerOptions": {
    ...
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```
