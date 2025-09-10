import { CollectionConfig } from 'payload'

export const Logos: CollectionConfig = {
  slug: 'logos',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g. Brand Logo',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload the logo image',
      },
    },
  ],
}
