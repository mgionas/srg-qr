import { CollectionConfig } from 'payload'

export const Company: CollectionConfig = {
  slug: 'company',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter Company Title',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload Company logo',
      },
    },
    // Add reverse relationship to venues
    {
      name: 'venues',
      type: 'join',
      collection: 'venues',
      on: 'company', // This refers to the 'company' field in the venues collection
      admin: {
        description: 'Venues that belong to this company',
      },
    },
  ],
}
