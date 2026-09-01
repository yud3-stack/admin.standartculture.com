import {defineField, defineType} from 'sanity'

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',

  fields: [
    defineField({
      name: 'tr',
      title: 'Türkçe',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 4,
    }),
  ],
})