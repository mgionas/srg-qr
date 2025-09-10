import { CollectionConfig } from 'payload'

export const Venues: CollectionConfig = {
  slug: 'venues',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g. Republic24',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'rate us url',
      type: 'text',
      admin: {
        placeholder: 'Enter TripAdvisor Rate URL',
      },
    },
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'company',
    },
    // {
    //   name: 'category',
    //   type: 'relationship',
    //   relationTo: 'categories',
    // },
    // Add reverse relationship to items
    {
      name: 'items',
      type: 'join',
      collection: 'items',
      on: 'venue', // This refers to the 'venue' field in the items collection
      admin: {
        description: 'Items that belong to this venue',
      },
    },
  ],
}
