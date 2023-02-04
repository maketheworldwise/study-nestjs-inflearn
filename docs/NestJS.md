# NestJS 기초

- 프로젝트 생성
  ```shell
  npm install -g @nestjs/cli
  nest new <project-name>
  npm run start:dev
  ```
- 의존성 주입 (`app.module.ts`)
  - `@Injectable` 데코레이터 클래스를 Provider로 등록
- 모듈, 컨트롤러, 서비스 생성
  ```shell
  nest generate module <module-name>
  nest generate controller <controller-name>
  nest generate service <service-name>
  ```
- 캡슐화
  - 기본적으로 생성한 모듈들은 다른 모듈들이 접근하지 못함
  - 다른 모듈들이 접근할 수 있도록 만들고 싶다면 `*.module.ts` 파일에 `export` 추가 필요
- 미들웨어
  ```shell
  nest generate middleware <middleware-name>
  ```
  - 데코레이터에서는 미들웨어를 위한 장소가 없기에 `configure()` 메서드를 이용하여 설정
- 예외 필터 처리
  - `@UseFilters` 데코레이터를 어디에 위치하느냐에 따라 메서드 단위로 처리할지 혹은 각각 클래스 단위로 처리할지 달라짐
  - `useGlobalFilters`를 이용하여 전역으로 사용하도록 처리 가능
- 파이프
  - 입력 데이터 변환 (인자값)
  - 유효성 검사
  - 파이프는 여러 개 등록 가능
- 인터셉터
  - `@UseInterceptors`는 클래스 단위로 설정
  - Request 생명 주기 확인 필요
