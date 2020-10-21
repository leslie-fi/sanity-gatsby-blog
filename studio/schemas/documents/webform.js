import {MdEmail} from 'react-icons/md'

export default {
  name: 'webform',
  title: 'Webforms',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  icon: MdEmail,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seo',
      options: {collapsible: true, collapsed: true}
      // validation: Rule => Rule.required()
    },
    {
      title: 'Form Settings',
      name: 'formSettings',
      type: 'form',
      validation: Rule => [
        Rule.required()
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'seoSettings.title',
      description: 'seoSettings.description',
      media: 'mainImage'
    }
  }
}