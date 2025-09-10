'use server'
import buildConfig from '@payload-config'

import { getPayload } from 'payload'

export async function fetchBanners() {
  const payload = await getPayload({ config: buildConfig })
  const data = await payload.find({ collection: 'banners' })
  return data
}
