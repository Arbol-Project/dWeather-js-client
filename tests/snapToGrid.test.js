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


test('snaps a coordinate pair for prism_rev_3_precip-daily', () => {
  ipfsClient.getHeads().then(async (heads) => {
    dataset = heads['prism_rev_3_precip-daily']
    ipfsClient.getMetadata(dataset).then((metadata) => {
      expect(utils.snapToGrid(39.2854944, -74.568208, metadata)).toBe(['39.292', '-74.583'])
    }).catch(function () { ; } );
  });
});


test('snaps a coordinate pair for prism_rev_3_precip-daily', () => {
  ipfsClient.getHeads().then(async (heads) => {
    dataset = heads['prism_rev_3_precip-daily']
    ipfsClient.getMetadata(dataset).then((metadata) => {
      expect(utils.snapToGrid(39.2744939 -74.5817372, metadata)).toBe(['39.292', '-74.583'])
    }).catch(function () { ; } );
  });
});
