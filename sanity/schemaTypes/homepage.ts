import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'about', title: 'About'},
    {name: 'business', title: 'Business'},
    {name: 'references', title: 'References'},
    {name: 'selectedWork', title: 'Selected Work'},
  ],

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
          description: 'The 4 words of the big headline.',
          type: 'object',

          fields: [
            defineField({name: 'word1', title: 'Word 1', type: 'localeString', validation: (Rule) => Rule.required()}),
            defineField({name: 'word2', title: 'Word 2', type: 'localeString', validation: (Rule) => Rule.required()}),
            defineField({name: 'word3', title: 'Word 3', type: 'localeString', validation: (Rule) => Rule.required()}),
            defineField({name: 'word4', title: 'Word 4', type: 'localeString', validation: (Rule) => Rule.required()}),
          ],
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'localeText',
        }),

        defineField({
          name: 'categories',
          title: 'Fan Cards',
          description: 'The 5 floating image cards behind the headline.',
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
                select: {title: 'label.en', media: 'image', order: 'order'},
                prepare({title, media, order}) {
                  return {
                    title: title || 'Card',
                    subtitle: order !== undefined ? `Order: ${order}` : undefined,
                    media,
                  }
                },
              },
            },
          ],

          validation: (Rule) => Rule.max(5),
        }),

        defineField({
          name: 'ctaText',
          title: 'Button Text',
          description: '"Explore our work" button. Destination is fixed in code.',
          type: 'localeString',
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

      fields: [
        defineField({name: 'label', title: 'Label', type: 'localeString'}),
        defineField({name: 'title', title: 'Title', type: 'localeString', validation: (Rule) => Rule.required()}),
        defineField({name: 'description', title: 'Description', type: 'localeText'}),
      ],
    }),

    // =====================================================
    // BUSINESS
    // =====================================================

    defineField({
      name: 'business',
      title: 'Business',
      type: 'object',
      group: 'business',

      fields: [
        defineField({
          name: 'titleBefore',
          title: 'Title (before highlight)',
          type: 'localeString',
        }),

        defineField({
          name: 'titleHighlight',
          title: 'Title (highlighted part)',
          type: 'localeString',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'titleAfter',
          title: 'Title (after highlight)',
          type: 'localeString',
        }),

        defineField({
          name: 'cta',
          title: 'Button Text',
          type: 'localeString',
        }),

        defineField({
          name: 'images',
          title: 'Gallery Images',
          description: 'Images shown in the business slider.',
          type: 'array',
          of: [{type: 'imageWithAlt'}],
        }),
      ],
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
          name: 'logos',
          title: 'Client Logos',
          type: 'array',
          of: [{type: 'imageWithAlt'}],
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
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'localeString'}),
        defineField({name: 'title', title: 'Title', type: 'localeString', validation: (Rule) => Rule.required()}),

        defineField({
          name: 'action',
          title: 'Card Button Text',
          description: 'Text shown on each project card, e.g. "Explore".',
          type: 'localeString',
        }),

        defineField({
          name: 'viewAll',
          title: '"View All" Link Text',
          description: 'Text for the link to the full projects page, e.g. "Our works".',
          type: 'localeString',
        }),

        defineField({
          name: 'allProjectsPage',
          title: 'All Projects Page',
          description: 'Header text for the standalone /projects page.',
          type: 'object',

          fields: [
            defineField({name: 'title', title: 'Title', type: 'localeString'}),
            defineField({name: 'description', title: 'Description', type: 'localeText'}),
          ],
        }),

        defineField({
          name: 'projects',
          title: 'Projects',
          description: 'Pulled from the Project collection — do not duplicate project data here.',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'project'}]}],
        }),
      ],
    }),
  ],
})