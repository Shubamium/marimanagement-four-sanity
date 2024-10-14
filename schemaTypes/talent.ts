import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talents',
  title: 'Talent',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Talent Name',
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
      name: 'pfp',
      title: 'Talent Image',
      type: 'image',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: ['x', 'twitch', 'youtube'],
              },
            }),
            defineField({
              name: 'link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
