import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],

  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 100, height: 100, crop: 'center' },
      {
        name: 'card',
        width: 400,
        height: 300,
        crop: 'center',
      },
      { name: 'hero', width: 1520, height: 530, position: 'bottom' },
    ],
    displayPreview: true,
  },
}
