const { spawn } = require('child_process');

//TODO: https://github.com/nodejs/node/issues/583

/**
 * findNodeStream
 * @param {String} dir 
 * @returns {nodeStream}
 */
const findNodeStream = (dir,options) => spawn('find', [dir,options].flat().filter(x=>x));
/**
 * Usage Example:
  let listing = findNodeStream('dir',[options])
  listing.stdout.on('data', d=>console.log(d.toString()))
  listing.stderr.on('data', d=>console.log(d.toString()))
  listing.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
*/

module.exports = findNodeStream
