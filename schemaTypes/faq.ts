import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      type: 'text',
    }),
  ],
})
