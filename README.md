# Study

공부하면서 실습한 내용들을 담은 저장소입니다.

## yarn

**yarn berry**로 패키지를 관리하며,  
**workspace**를 이용한 **monorepo**로 구성되어 있습니다.

### script

- **yarn server start [no]**

  server-study 패키지의 index.js를 실행하며,  
  기본 실행은 no-express 입니다.

- **yarn server start express**

  server-study 패키지의 index.js를 실행하며,  
  express 폴더의 server를 실행합니다.

- **yarn client**

  yarn warkspace client 입니다.

- **yarn tree**

  repo의 중요 폴더 및 파일 구조를 깊이 2 수준으로 console 창에 출력합니다.

## structure

```
study
├── .yarn
│   ├── cache
│   ├── releases
│   └── install-state.gz
├── packages
│   ├── client-study
│   └── server-study
├── .pnp.cjs
├── .pnp.loader.mjs
├── .yarnrc.yml
├── package.json
└── yarn.lock
```

### .gitignore

git이 추적하지 않도록 경로를 명시합니다.

### .yarn

- **cache**

  해당 프로젝트의 dependecy(종속성)이 압축된 파일로 저장되는 공간입니다.

- **releases**

  yarn의 배포 파일을 담고 있습니다.  
  서로 다른 버전을 사용하여 문제가 발생하는 것을 방지합니다.

### packages

프로젝트 모음 디렉토리입니다.

- **client-study**

  브라우저 단에서 동작하는 정적 파일들이 모여있는 공간입니다.

- **server-study**

  server 동작 웹 API 파일들이 모여있는 공간입니다.

### .pnp.cjs

Plug'n'Play(PnP) Loader 파일 입니다.  
프로젝트의 종속성 트리에 대한 모든 정보를 담고 있으며,  
해당 파일로 패키지를 Load합니다.

### .pnp.loader.mjs

ESM(ECMAScript Modules) Loader 파일 입니다.  
ES로 작성된 모듈을 Load합니다.

### .yarnrc.yml

yarn berry의 설정 파일입니다.

### package.json

프로젝트의 manifest 파일입니다.  
JSON 파일로 만들어지며, 프로젝트 명세서를 기술합니다.

### yarn.lock

yarn의 종속성 트리에 대한 lock 파일 입니다.  
lock 파일은 종속성 트리에 대한 정확한 버전을 기술합니다.

# 참고

[npm Docs [package.json]](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)  
[npm Docs [package-lock.json]](https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json)  
[yarnpkg [Manifest(package.json)]](https://yarnpkg.com/configuration/manifest)  
[yarnpkg [Settings(.yarnrc.yml)]](https://yarnpkg.com/configuration/yarnrc)  
[yarnpkg [Questions&Answers - Which files shoud be gitignored?]](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)  
[yarnpkg [Plug'n'Play - How does it work?]](https://yarnpkg.com/features/pnp#how-does-it-work)  
[npm - tree-node-cli](https://www.npmjs.com/package/tree-node-cli)
