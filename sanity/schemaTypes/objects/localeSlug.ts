import {defineField, defineType} from 'sanity'

export const localeSlug = defineType({
  name: 'localeSlug',
  title: 'Localized Slug',
  type: 'object',

  fields: [
    defineField({
      name: 'tr',
      title: 'Türkçe Slug',
      type: 'slug',
      options: {source: 'title.tr', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'en',
      title: 'English Slug',
      type: 'slug',
      options: {source: 'title.en', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
  ],
})