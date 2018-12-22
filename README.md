# fs-readdir-stream
Is a Function for Recursiv Dir Reading that returns a RealStream for fs.readdir replacement
Its using Operating system Filesystem Utils for that and returns a NodeStream or MostStream.

```js
const { findStreamNode, findStreamMost } = require('fs-readdir-stream')
// can also be array supports all options that nativ os find supports
const options = '-maxdepth 1' 

let listing = findStreamNode('.',[options])
listing.stdout.on('data', d=>console.log(d.toString()))
listing.stderr.on('data', d=>console.log(d.toString()))
listing.on('close', (code) => {
console.log(`child process exited with code ${code}`);
});

const readdirStream = findStreamMost('.',[options])
readdirStream(process.cwd()).observe(x=>console.log(x))
```
