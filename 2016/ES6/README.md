# ECMAScript 6

## Start

```
node --use-strict $(node --v8-options | grep harm | awk '{print $1}' | xargs) app.js
```

## Block-Level Declarations (pskucherov/pdp/2016/ES6/block-bindings.js)
Огонь! Очень этого не хватало.

## Strings and Regular Expressions (pskucherov/pdp/2016/ES6/strings-regexp.js)
Работа с utf разочаровала. Я ждал возможности определять длину строки, а оно всё равно для двухбайтного символа показывает длину 2 %)
Всё остальное — прикольно, но потребности в этом всём ни разу не ощущал.
