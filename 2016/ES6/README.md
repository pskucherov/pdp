# ECMAScript 6

## Docs
[understandinges6] (https://leanpub.com/understandinges6/read)

## Install
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo n
```

## Start
```
node --use-strict $(node --v8-options | grep harm | awk '{print $1}' | xargs) app.js
```

## [Block-Level Declarations] (block-bindings.js)
Огонь! Очень этого не хватало.

## [Strings and Regular Expressions] (strings-regexp.js)
Работа с utf разочаровала. 
Я ждал возможности определять длину строки, а оно всё равно для двухбайтного символа показывает длину 2 %)

Всё остальное — прикольно, но потребности в этом всём ни разу не ощущал.
