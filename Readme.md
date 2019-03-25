# b64id

[![NPM](https://nodei.co/npm/b64id.png?compact=true)](https://nodei.co/npm/b64id/)

[![CircleCI](https://circleci.com/gh/monteslu/b64id.svg?style=svg)](https://circleci.com/gh/monteslu/b64id)

## Why ?

A [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier) is a unique identifier typically expressed as something like: `88982e7e-c87c-4758-abf2-6a36a8c3e0e0` that's too many characters!

We could instead express the same amount of data in a url-friendly way such as: `iJgufsh8R1ir8mo2qMPg4A`



## How ?

If we want to generate a url-safe, base64 encoded id: 

```javascript
import b64id from 'b64id';

const id = b64id.generateId();

console.log(id); //something like: xrps2KrvTBuim1y6h-KoiA
```


To convert a standard uuid to url-safe, base64 format: 

```javascript

const id = b64id.uuidToB64('c6ba6cd8-aaef-4c1b-a29b-5cba87e2a888');

console.log(id); //something like: xrps2KrvTBuim1y6h-KoiA
```


To convert a url-safe, base64 id back to standard uuid format: 

```javascript

const id = b64id.b64ToUuid('xrps2KrvTBuim1y6h-KoiA');

console.log(id); //something like: c6ba6cd8-aaef-4c1b-a29b-5cba87e2a888
```
