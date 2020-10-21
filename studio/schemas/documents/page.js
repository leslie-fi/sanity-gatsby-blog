import {
  generateSeoTitleField,
  generateSeoDescriptionField,
  generateSeoImageField,
} from '../common/seo';

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [{ name: 'seo', title: 'SEO' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page (used in nav)',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
      description: 'The title shown in the page hero',
      validation: (Rule) => Rule.required(),
    },

    // Body content
    {
      name: 'content',
      type: 'bodyPortableText',
      title: 'Content',
      description: 'The main content of the page',
      validation: (Rule) => Rule.required(),
    },

    // Seo Title
    generateSeoTitleField(),

    // Seo Description
    generateSeoDescriptionField(),

    // Seo Image
    generateSeoImageField(),
  ],

  preview: {
    select: {
      title: 'title',
    }
  },
}