import type { CollectionConfig } from 'payload'

export const ItemsPDF: CollectionConfig = {
  slug: 'items-pdf',
  labels: {
    singular: `Item's PDF`,
    plural: `Item's PDF`,
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'item name',
      type: 'text',
    },
  ],
  upload: true,
}
