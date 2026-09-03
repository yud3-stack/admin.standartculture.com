import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: 'footerLocation',
      title: 'Footer Location',
      type: 'localeString',
    }),

    defineField({
      name: 'nav',
      title: 'Navigation Labels',
      type: 'object',

      fields: [
        defineField({name: 'about', title: 'About', type: 'localeString'}),
        defineField({name: 'projects', title: 'Projects', type: 'localeString'}),
        defineField({name: 'contact', title: 'Contact', type: 'localeString'}),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
