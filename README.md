# Study

공부하면서 실습한 내용들을 담은 저장소입니다.  
**yarn berry**의 **workspace**를 이용한 **monorepo**로 구성되어 있습니다.

---

### .gitignore

git이 추적하지 않도록 경로를 명시합니다.

### .yarn

- **releases**

  yarn의 배포 파일을 담고 있습니다.  
  서로 다른 버전을 사용하여 문제가 발생하는 것을 방지합니다.

### .pnp.cjs

Plug'n'Play(PnP) Loader 파일 입니다.  
프로젝트의 종속성 트리에 대한 모든 정보를 담고 있으며,  
해당 파일로 패키지를 Load합니다.

### .yarnrc.yml

yarn berry의 설정 파일입니다.

### yarn.lock

yarn의 종속성 트리에 대한 lock 파일 입니다.  
lock 파일은 종속성 트리에 대한 정확한 버전을 기술합니다.

### package.json

프로젝트의 manifest 파일입니다.  
JSON 파일로 만들어지며, 프로젝트 명세서를 기술합니다.

### packages

프로젝트 모음 디렉토리입니다.

# 참고

[npm Docs [package.json]](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)  
[npm Docs [package-lock.json]](https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json)  
[yarnpkg [Manifest(package.json)]](https://yarnpkg.com/configuration/manifest)  
[yarnpkg [Settings(.yarnrc.yml)]](https://yarnpkg.com/configuration/yarnrc)  
[yarnpkg [Questions&Answers - Which files shoud be gitignored?]](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)  
[yarnpkg [Plug'n'Play - How does it work?]](https://yarnpkg.com/features/pnp#how-does-it-work)
