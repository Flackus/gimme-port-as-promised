# gimme-port-as-promised
[gimme-port](https://github.com/Flackus/gimme-port) promise wrapper.

```javascript
var gimmePort = require('gimme-port-as-promised');

gimmePort()
    .then(function(port) {
        console.log(port);
    })
    .fail(function(e) {
        console.error(e);
    });
```
