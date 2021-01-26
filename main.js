const { StringStream } = require('scramjet');
const fs = require('fs');
const args = process.argv.slice(2);

// seq.csv
//
// line
// 002
// 003
// 004
// 005

const opts = { 
  header: true,
  delimiter: ','
}

if(args[0]==='step') {
  opts['step'] = (results, parser) => { return results };
}

if(args[0]==='step-worker') {
  opts['step'] = (results, parser) => { return results };
  opts['worker'] = true;
}

console.log('Running with opts: ', opts);

StringStream
  .from(fs.createReadStream('./seq.csv') )
  .CSVParse(opts)
  .map( async (l) => {
    return l;
   })
  .each( (l) => {
    console.log(l);
  })

