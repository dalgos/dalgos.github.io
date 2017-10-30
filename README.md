# Installation

```bash

gem install jekyll bundler

```

install 관련 permission 오류 발생시 아래 링크 참조

https://rvm.io/rvm/install#explained

```bash

jekyll new ./myblog

```
내부에 이미 파일이 위치해 있어 설치에 실패하는 경우 `--force` 옵션을 사용합니다.

## Run serve

```bash

bundle exec jekyll serve

```

## rvm Installation

```bash

\curl -sSL https://get.rvm.io | bash -s stable
\curl -sSL https://get.rvm.io | bash -s -- --ignore-dotfiles
echo "source $HOME/.rvm/scripts/rvm" >> ~/.bash_profile
rvm list known
rvm install x.x.x

```
