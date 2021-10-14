import { getGeojson } from './index.js'

async function main () {
  const districts = await getGeojson()
  console.log('districts', districts)
}

main()
