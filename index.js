const { request } = require('urllib');

const main = async () => {
  const disabledFalse = process.argv[2]?.replace('--', '')
  const res = await request('http://127.0.0.1:3000', {followRedirect: disabledFalse ? !(disabledFalse === 'false') : undefined} );

  console.log('#res - expected to 200', res.status);
};

main();
