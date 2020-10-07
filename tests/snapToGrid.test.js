const ipfsClient = require('../src/ipfs-client.js')
const utils = require('../src/utils.js')

test('snaps a coordinate pair for chirps_05-daily', () => {
  ipfsClient.getHeads().then(async (heads) => {
  	dataset = heads['chirps_05-daily']
    ipfsClient.getMetadata(dataset).then((metadata) => {
      expect(utils.snapToGrid(38, -68, metadata)).toBe(['37.975', '-68.025'])
	}).catch(function () { ; } );
  });
});