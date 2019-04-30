
const request = require('request-promise');
const url = require('./url.json').url;
const env = (process.argv[2])? process.argv[2] : 'prd'

let options = {
  uri : url + env
};

setInterval(main, 5000);

async function main() {
  let body = await request(options);
  let parsed = JSON.parse(body);

  let users = JSON.parse(parsed.users);
  console.log('\n\n\n\n');
  console.log(`${env.toUpperCase()}:`)
  console.log(users);
}
