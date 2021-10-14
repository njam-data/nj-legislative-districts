import * as path from 'path'

import * as dirname from '@njam-data/tools/dirname.js'

export const dataDirectory = dirname.join(import.meta.url, 'data')
export const sourceDirectory = path.join(dataDirectory, 'source')
export const sourceGeojsonFilepath = path.join(sourceDirectory, 'nj_legislative_districts.geojson')
