'use server'
import buildConfig from '@payload-config'

import { getPayload } from 'payload'

export async function fetchCompanies() {
  const payload = await getPayload({ config: buildConfig })
  const data = await payload.find({ collection: 'company' })
  return data
}
