import { readJson } from '@njam-data/tools/json.js'

import { sourceGeojsonFilepath } from './lib/filepaths.js'

/**
 * Get New Jersey municipalities data as GeoJSON, JSON, or KML
 * @param {string} fileType - Valid file types: `geojson`, `json`, or `kml`. Default: 'json'
 * @returns {Promise}
 */
export async function getGeojson () {
  return readJson(sourceGeojsonFilepath)
}
