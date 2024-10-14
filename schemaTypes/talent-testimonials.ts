import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talent_testimonials',
  title: 'Talent Testimonials',
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
