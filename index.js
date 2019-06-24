/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

const  R  =  require("r-script");

//exports.helloGET = (req, res) => {
//    var out = R("ex-sync.R")
//  .data("hello world", 20)
//  .callSync();
//  
//  res.send(out);
//};
//var rstats  = require('rstats');
//var R  = new rstats.session();
//R.parseEvalQ("cat('\n Hello World \n')");
exports.helloGET = (req, res) => {
  console.log(`R: ${R}`);
  const path = R("ex-sync.R")
  console.log(`path: ${path}`);
  const pathWithData = path.data("hello world", 20)
  console.log(`pathWithData: ${pathWithData}`);
 pathWithData.call((out)=>{
  console.log(`out: ${out}`);
    res.send(out);
  });
  // R("ex-sync.R")
  //   .data("hello world", 20)
  //   .callSync();
    // console.log(`out: ${out}`);
};

  
  const out = R("ex-sync.R")
    .data("hello world", 20)
    .callSync();
    console.log(`out: ${out}`);
// console.log(out);
