function snapToGrid(lat, lon, metadata) {
  /** 
  * Find the nearest (lat,lon) on IPFS for a given metadata file.
  * return: lat, lon
  * args:
  *     lat = -90 < lat < 90, float
  *     lon = -180 < lon < 180, float
  *     metadata: a dWeather metadata file
  */
  resolution = metadata['resolution'];
  min_lat = metadata['latitude range'][0];
  min_lon = metadata['longitude range'][0];
  snap_lat = (Math.round((lat - min_lat) / resolution) * resolution + min_lat).toFixed(3);
  snap_lon = (Math.round((lon - min_lon) / resolution) * resolution + min_lon).toFixed(3);
  return [snap_lat, snap_lon]; 
};



function conventionalLatLonToCPC(lat, lon) {
  /**
  * Convert a pair of coordinates from conventional (lat,lon)
  * to the idiosyncratic CPC (lat,lon) format.
  */
    return [lat, lon + 360];
};



exports.snapToGrid = snapToGrid;
exports.conventionalLatLonToCPC = conventionalLatLonToCPC;