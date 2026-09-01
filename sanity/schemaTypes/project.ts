import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'content',
      title: 'Content',
    },
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
      type: 'slug',
      group: 'general',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) =>
        Rule.required().integer().min(2000).max(2100),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
      group: 'general',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      description: 'Show this project in Selected Work.',
      type: 'boolean',
      group: 'general',
      initialValue: false,
    }),

    // =====================================================
    // MEDIA
    // =====================================================

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'imageWithAlt',
      group: 'media',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',

      of: [
        {
          type: 'imageWithAlt',
        },
      ],
    }),

    // =====================================================
    // CONTENT
    // =====================================================

    defineField({
      name: 'content',
      title: 'Project Content',
      type: 'object',
      group: 'content',

      fields: [
        defineField({
          name: 'tr',
          title: 'Türkçe',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        }),

        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      group: 'general',

      of: [
        {
          type: 'string',
        },
      ],
    }),
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