'use server'
import buildConfig from '@payload-config'

import { getPayload } from 'payload'

export async function fetchLogos() {
  const payload = await getPayload({ config: buildConfig })
  const data = await payload.find({ collection: 'logos' })
  return data
}
