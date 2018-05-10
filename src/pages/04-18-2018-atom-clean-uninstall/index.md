---
path: '/2018-04-18-01'
date: '2018-04-18T10:00:00.000Z'
title: 'Atom clean uninstall'
featuredImage: './cover.png'
---

Atom에서는 별도의 uninstall 기능을 제공하고 있지 않아, 아래와 같이 직접 삭제를 해주어야 합니다.

```bash
rm -rf ~/.atom
rm -rf /usr/local/bin/atom
rm -rf /usr/local/bin/apm
rm -rf /Applications/Atom.app
rm -rf ~/Library/Preferences/com.github.atom.plist
rm -rf ~/"Library/Application Support/com.github.atom.ShipIt"
rm -rf ~/"Library/Application Support/Atom"
rm -rf ~/"Library/Saved Application State/com.github.atom.savedState"
rm -rf ~/Library/Caches/com.github.atom
rm -rf ~/Library/Caches/com.github.atom.Shipit
rm -rf ~/Library/Caches/Atom
```
Atom의 이상동작으로 고통받고 계시다면, clean uninstall 후 재설치하셔서 마음의 평화를 찾으시길 바랍니다 :-)

[참고링크](https://discuss.atom.io/t/how-to-completely-uninstall-atom-for-mac/9084/42)
