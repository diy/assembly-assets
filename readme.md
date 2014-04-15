# assembly-assets
#### Mutate a transloadit assembly results array in to a diy assets object.

Transloadit assembly results object come over as a custom Array like object
with properties each result type. In order to persist to diy as `asset` objects
we need to massage them in to object literals that can be stringified.

# Install

```
npm install diy/assembly-assets
```

# Usage

```
var assets = require('diy-assembly-assets');

var a = assets(assembly.results);
```

# License

Apache2
