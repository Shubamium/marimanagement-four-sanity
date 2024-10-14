import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'current_talents',
  title: 'Current Talents',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'pfp',
      type: 'image',
    }),
    defineField({
      name: 'testimonial',
      type: 'text',
    }),
  ],
})
