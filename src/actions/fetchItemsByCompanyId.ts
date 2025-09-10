'use server'
import buildConfig from '@payload-config'

import { getPayload } from 'payload'

export async function fetchItemsByCompanyId(companyId: string | undefined) {
  const payload = await getPayload({ config: buildConfig })
  const data = await payload.find({
    collection: 'items',
    where: {
      company: { equals: companyId },
    },
  })
  return data
}
