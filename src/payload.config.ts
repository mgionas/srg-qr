// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Venues } from './collections/Venues'
import { ItemsPDF } from './collections/ItemPDF'
import { Items } from './collections/Items'
import { Company } from './collections/Company'
import { Categories } from './collections/Category'
import Banner from './collections/Banner'
import { Logos } from './collections/Logos'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    avatar: 'default',
    autoLogin: {
      email: 'viktorasatiani77@gmail.com',
      password: '123123123',
      prefillOnly: true,
    },
    dateFormat: 'dd/MMM/yyyy',
  },
  collections: [Users, Media, Venues, ItemsPDF, Items, Company, Categories, Banner, Logos],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
