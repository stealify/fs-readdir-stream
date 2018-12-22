const { fromEvent } = require('most');
const findNodeStream = require('./find-stream')

/**
 * find files or directorys and list them its also a fs.readdir replacement
 * @param {*} dir
 * @param {Array or String} -maxdepth 1 or ['-maxdepth 1', '-iname boo']
 * @returns {mostStream}
 */
const findMost = (dir,options) => fromEvent('data',findNodeStream(dir,options).stdout).map(d=>d.toString());
/**
 * Usage:
 * const readdirStream = require('find-stream')
 * readdirStream(process.cwd()).observe(x=>console.log(x))
 */
module.exports = findMost

/*
  return mergeArray([
    fromEvent('close', findProcess),
    fromEvent('data',findProcess.stdout).map(d=>d.toString()),
    fromEvent('data',findProcess.stderr).map(d=>throwError(d.toString()))
  ])
*/