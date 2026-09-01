import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  groups: [ { name: 'hero', title: 'Hero', }, { name: 'about', title: 'About', }, { name: 'business', title: 'Business', }, { name: 'references', title: 'References', }, { name: 'projects', title: 'Projects', }, { name: 'contact', title: 'Contact', }, ],

  fields: [
    // =====================================================
    // HERO
    // =====================================================

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',

      fields: [
        defineField({
          name: 'words',
          title: 'Title Words',
          type: 'object',

          fields: [ defineField({ name: 'word1', title: 'Word 1', type: 'localeString', validation: (Rule) => Rule.required(), }), defineField({ name: 'word2', title: 'Word 2', type: 'localeString', validation: (Rule) => Rule.required(), }), defineField({ name: 'word3', title: 'Word 3', type: 'localeString', validation: (Rule) => Rule.required(), }), defineField({ name: 'word4', title: 'Word 4', type: 'localeString', validation: (Rule) => Rule.required(), }), ]
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'localeText',
        }),

        defineField({
          name: 'categories',
          title: 'Culture Categories',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'localeString',
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'imageWithAlt',
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: 'order',
                  title: 'Order',
                  type: 'number',
                  validation: (Rule) => Rule.integer(),
                }),
              ],

              preview: {
                select: {
                  title: 'label.en',
                  media: 'image',
                  order: 'order',
                },

                prepare({title, media, order}) {
                  return {
                    title: title || 'Category',
                    subtitle: order !== undefined ? `Order: ${order}` : undefined,
                    media,
                  }
                },
              },
            },
          ],
        }),

        defineField({
          name: 'button',
          title: 'Button',
          type: 'object',

          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'localeString',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),

    // =====================================================
    // CULTURE
    // =====================================================

    defineField({
      name: 'culture',
      title: 'Culture',
      type: 'object',
      group: 'culture',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'localeString',
        }),

        defineField({
          name: 'title',
          title: 'Title',
          type: 'localeString',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'localeText',
        }),

        defineField({
          name: 'cards',
          title: 'Culture Cards',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'localeString',
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'localeText',
                }),

                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'imageWithAlt',
                }),

                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'url',
                }),

                defineField({
                  name: 'order',
                  title: 'Order',
                  type: 'number',
                  validation: (Rule) => Rule.integer(),
                }),
              ],

              preview: {
                select: {
                  title: 'title.en',
                  media: 'image',
                  order: 'order',
                },

                prepare({title, media, order}) {
                  return {
                    title: title || 'Culture Card',
                    subtitle: order !== undefined ? `Order: ${order}` : undefined,
                    media,
                  }
                },
              },
            },
          ],
        }),
      ],
    }),

    // =====================================================
    // ABOUT
    // =====================================================

    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      group: 'about',

      fields: [ defineField({ name: 'label', title: 'Label', type: 'localeString', }), defineField({ name: 'title', title: 'Title', type: 'localeString', validation: (Rule) => Rule.required(), }), defineField({ name: 'description', title: 'Description', type: 'localeText', }), ]
    }),

    // =====================================================
    // BUSINESS
    // =====================================================

    defineField({
      name: 'business',
      title: 'Business',
      type: 'object',
      group: 'business',

      fields: [ defineField({ name: 'label', title: 'Label', type: 'localeString', }), defineField({ name: 'title', title: 'Title', type: 'localeString', validation: (Rule) => Rule.required(), }), defineField({ name: 'description', title: 'Description', type: 'localeText', }), ]
    }),

    // =====================================================
    // REFERENCES
    // =====================================================

    defineField({
      name: 'references',
      title: 'References',
      type: 'object',
      group: 'references',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'localeString',
        }),

        defineField({
          name: 'title',
          title: 'Title',
          type: 'localeString',
        }),

        defineField({
          name: 'logos',
          title: 'Client Logos',
          type: 'array',

          of: [ { type: 'imageWithAlt', }, ]
        }),
      ],
    }),

    // =====================================================
    // SELECTED WORK
    // =====================================================

    defineField({
      name: 'selectedWork',
      title: 'Selected Work',
      type: 'object',
      group: 'selectedWork',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'localeString',
        }),

        defineField({
          name: 'title',
          title: 'Title',
          type: 'localeString',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'localeText',
        }),

        defineField({
          name: 'button',
          title: 'Button',
          type: 'object',

          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'localeString',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),

        defineField({
          name: 'projects',
          title: 'Projects',
          description: 'Projects will reference the Project document type.',
          type: 'array',

          of: [
            {
              type: 'reference',
              to: [{type: 'project'}],
            },
          ],
        }),
      ],
    }),

    // =====================================================
    // CTA
    // =====================================================

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      group: 'cta',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'localeString',
        }),

        defineField({
          name: 'title',
          title: 'Title',
          type: 'localeString',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'localeText',
        }),

        defineField({
          name: 'button',
          title: 'Button',
          type: 'object',

          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'localeString',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})