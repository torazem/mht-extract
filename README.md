_NB: This project is not under active development_

---

# MHT Extract
A simple utility for extracting images from MHT web archives.

## Installation

```
npm install mht-extract
```

## Example Usage

**mhte.extractEncodedFiles(mhtPath, [options])**

```
let mhte = require('./mht-extract');

let mhtPath = __dirname + "/SomeFile.mht";
let options = { outputPath: "images" };

mhte.extractEncodedFiles(mhtPath, options);
```

NB: Export will fail if the given output folder does not exist.
