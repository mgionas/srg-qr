import { CollectionConfig } from 'payload'

export const Items: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter Item Name',
      },
    },
    {
      name: 'venue',
      type: 'relationship',
      relationTo: 'venues',
      required: true,
      admin: {
        placeholder: 'Select a Venue',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'company',
      relationTo: 'company',
      type: 'relationship',
      required: true,
    },

    {
      name: 'item pdf',
      type: 'upload',
      relationTo: 'items-pdf',
    },
    {
      name: 'status',
      type: 'checkbox',
    },
  ],
}
