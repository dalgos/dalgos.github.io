---
title: oh-my-zsh 커맨드 자동완성 플러그인 설치하기
date: 2017-05-10 14:37:00
tags:
---

팀 내 주력 shell 로 **zsh**을 사용중입니다. 포함되어 있는 기본기능들이 충실하고, 속도 저하등도 아직까지는 체감하지 못하고 있습니다. 기본기가 충실한 zsh임에도 유용한 플러그인들이 제법 많은데, 이번에 설치한 플러그인은 **auto suggestions**을 지원해주는 **zsh-autosuggestions** 입니다.

이 플러그인은 자주 사용하는 커맨드를 추천 및 제시해주어 반복되는 불필요한 입력을 최소화하는데 도움을 줍니다.

[git@zsh-autosuggestion](https://github.com/zsh-users/zsh-autosuggestions)

zsh 기본 사용시 설치방법은 위 저장소에 잘 설명되어 있으므로, 여기서는 oh-my-zsh를 사용하는 경우에 대한 설치 방법만 설명합니다.

일단 해당 플러그인을 clone 합니다. 설치 폴더는 oh-my-zsh의 plugins 폴더를 사용하겠습니다.
```bash
$ git clone git@github.com:zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions
```

이제 플러그인을 사용하도록 .zshrc 파일을 편집합니다. ($ZSH는 ~/.oh-my-zsh 를 바라봅니다.)
```bash
source=(zsh-autosuggestions)
```

이제 편집한 내용을 적용합니다.
```bash
source ~/.zshrc
```

이제 커맨드 작성시 기존에 사용했던 커맨드가 자동완성되어 추천되어 나옵니다. 자주 사용하는 커맨드를 매번 입력하는 수고로움을 극복할 수 있게 되었습니다. :-)

```bash
cd ~/Document/GIT/
```

삭제하실 때는 .zshrc 에서 추가했던 플러그인 적용 내용을 삭제하고, plugins 폴더의 zsh-autosuggestions 폴더를 삭제하시면 됩니다.

끝.

본 글은 [wavejs](http://blog.wavejs.io/zshe-keomaendeu-jadongwanseong-peulreogeuin-seolcihagi/) 그룹에도 포스팅되었습니다.
