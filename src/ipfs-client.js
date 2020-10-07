const GATEWAY_URL = 'https://gateway.arbolmarket.com';
const bent = require('bent');

async function getHeads(baseURL=GATEWAY_URL) {
  /** 
  * Get the hash heads.
  */
  const hashesURL = baseURL + '/climate/hashes/heads.json';
  const getJSON = bent('json');
  let response = await getJSON(hashesURL);
  return response;
};

async function getMetadata(hashStr, baseURL=GATEWAY_URL) {
  /**
  * Get the metadata file for a given hash head.
  */
  const metadataURL = baseURL + "/ipfs/" + hashStr + "/metadata.json";
  const getJSON = bent('json');
  let response = await getJSON(metadataURL);
  return response;
};

async function getStationCSV(stationID) {
  /**
  * Get a CSV of of station data for a given station ID.
  */
  const getJSON = bent('json');
  getHeads().then(async (heads) => {
    datasetHash = heads["ghcnd"]
    datasetURL = GATEWAY_URL + "/ipfs/" + datasetHash + "/" + stationID + ".csv.gz"
    response = await getJSON(datasetURL)
    return response
  })
};



exports.getHeads = getHeads;
exports.getMetadata = getMetadata;
exports.getStationCSV = getStationCSV;