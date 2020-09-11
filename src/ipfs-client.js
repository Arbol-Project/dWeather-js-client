const GATEWAY_URL = 'https://gateway.arbolmarket.com';
const bent = require('bent');

async function getHeads(base_url=GATEWAY_URL) {
  /** 
  * Get the hash heads.
  */
  const hashesURL = baseURL + '/climate/hashes/heads.json';
  const getJSON = bent('json');
  let response = await getJSON(hashesURL);
  return response;

};

async function getMetadata(hashStr, url=GATEWAY_URL) {
  const metadataURL = url + "/ipfs/" + hashStr + "/metadata.json";
  const getJSON = bent('json');
  let response = await getJSON(metadataURL)
  return response
}

async function getStationCSV(stationID) {
  const getJSON = bent('json');
  getHeads().then((heads) =>
    datasetHash = heads["ghcnd"]
    datasetURL = GATEWAY_URL + "/ipfs/" + datasetHash + "/" + stationID + ".csv.gz"
    response = await getJSON(datasetURL)
    return response
  );
}


exports.getHeads = getHeads;
exports.getStationCSV = getStationCSV