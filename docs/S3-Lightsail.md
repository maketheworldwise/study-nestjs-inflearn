# AWS S3, Lightsail

- S3 생성
  - 권한 부여를 위한 정책 생성
  - 보안 자격 증명에서 액세스 키 발급
  ```shell
  # .env
  AWS_S3_ACESS_KEY = ***
  AWS_S3_SECRET_KEY = ***
  AWS_S3_REGION = ***
  AWS_S3_BUCKET_NAME = ***
  ```
- S3와 `Multer` 연동

  - [nestjs-multer-extended](https://github.com/jeffminsungkim/nestjs-multer-extended) 오픈 소스 활용 (단, nestjs 7 버전까지만 지원하며 Single File Only다.)
  - S3 SDK 활용

  ```shell
  npm install aws-sdk
  ```

- [PM2](https://github.com/Unitech/pm2)

  - PM2 설치

  ```shell
  npm install pm2 -g
  ```

  - PM2 설정

  ```json
  // package.json
  "scripts" : {
    "build": "nest build",
    "start:debug": "nest start --debug --watch",
    "start:prod": "pm2 start dist/main.js"
  }
  ```

  ```shell
  # .env
  # Production 환경으로 변경
  MODE = 'prod
  PORT = 80
  ```

  - PM2 실행

  ```shell
  npm run start:debug
  npm run build
  npm run start:prod
  pm2 list
  pm2 kill
  ```

- 배포용 GitHub Private Repository 생성

  - `dist/, .env, package.json, package-lock.json`만 사용
  - `.gitignore` 파일에서 `dist` 폴더 활성화, `.env` 비활성화

- VPS 가상 사설 서버 구축 (Lightsail)

  - ubuntu

    ```shell
    sudo apt-get update
    sudo apt-get -y upgrade
    sudo apt-get install build-essential
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash --
    sudo apt-get install -y nodejs
    sudo apt-get install vim

    touch .gitconfig
    sudo apt-get install git
    git config --global user.name ***
    git config --global user.email ***
    git config --global --list
    git clone <GitHub Private Repository>
    cd <GitHub Private Repository>

    npm install
    sudo npm install -g @nestjs/cli
    sudo npm install -g pm2

    # 환경변수 파일 생성
    vi .env
    sudo npm run start:prod
    ```

    - 고정 IP 생성

- 내 도메인 한국을 이용한 무료 도메인 연결
