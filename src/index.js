var ipfsClient = require('./ipfs-client.js')

ipfsClient
ipfsClient.getHeads


module.exports = {
  getHeads: ipfsClient.getHeads,
  getStationCSV: ipfsClient.getStationCSV,

};	

//lib.getHeads().then((result) => { console.log(result) })