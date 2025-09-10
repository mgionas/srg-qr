'use server'
import buildConfig from '@payload-config'

import { getPayload } from 'payload'

export async function fetchCategories() {
  const payload = await getPayload({ config: buildConfig })
  const data = await payload.find({ collection: 'categories', depth: 2 })
  return data
}
