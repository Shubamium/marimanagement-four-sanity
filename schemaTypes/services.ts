import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'panel_color',
      title: 'Panel Color',
      description: 'Hexadecimal Color: (default: #67778A)',
      placeholder: '#67778A',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'main_price',
      type: 'string',
    }),
    defineField({
      name: 'points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          type: 'string',
        }),
        defineField({
          name: 'price',
          type: 'string',
        }),
        defineField({
          name: 'rate',
          type: 'string',
        }),
      ],
    }),
  ],
})
