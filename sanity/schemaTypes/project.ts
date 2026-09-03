import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  groups: [
    {name: 'general', title: 'General'},
    {name: 'media', title: 'Media'},
    {name: 'content', title: 'Content'},
  ],

  fields: [
    // =====================================================
    // GENERAL
    // =====================================================

    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'EN and TR routes use different slugs (e.g. "culture-arts" vs "kultur-sanat").',
      type: 'localeSlug',
      group: 'general',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'localeString',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'general',
      validation: (Rule) => Rule.required().integer().min(2000).max(2100),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
      group: 'general',
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      group: 'general',
      of: [{type: 'localeString'}],
    }),

    defineField({
      name: 'order',
      title: 'Order',
      description: 'Controls display order and the "PROJECT 01 / 02 / ..." numbering — computed automatically from this, not typed by hand.',
      type: 'number',
      group: 'general',
      validation: (Rule) => Rule.integer(),
    }),

    // =====================================================
    // MEDIA
    // =====================================================

    defineField({
      name: 'color',
      title: 'Accent Color',
      description: 'Used as the project\'s visual block wherever a real image is not yet set.',
      type: 'string',
      group: 'media',
      validation: (Rule) =>
        Rule.required().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {name: 'hex color'}),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'imageWithAlt',
      group: 'media',
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',
      of: [{type: 'imageWithAlt'}],
    }),

    // =====================================================
    // CONTENT
    // =====================================================

    defineField({
      name: 'content',
      title: 'Project Content',
      description: 'Not yet rendered on the live site — reserved for future use.',
      type: 'object',
      group: 'content',

      fields: [
        defineField({name: 'tr', title: 'Türkçe', type: 'array', of: [{type: 'block'}]}),
        defineField({name: 'en', title: 'English', type: 'array', of: [{type: 'block'}]}),
      ],
    }),
  ],

  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'category.en',
      media: 'coverImage',
    },

    prepare({title, subtitle, media}) {
      return {
        title: title || 'Project',
        subtitle,
        media,
      }
    },
  },
})