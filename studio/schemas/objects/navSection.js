import {FaExternalLinkAlt} from 'react-icons/fa'
export default {
  name: 'navSection',
  type: 'object',
  title: 'Section',
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target route',
      to: [{ type: 'route' }],
    },
     {
      title: 'External Link',
      name: 'link',
      type: 'object',
      blockEditor: {
        icon: FaExternalLinkAlt
      },
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url',
          validation: Rule =>
            Rule.uri({
              allowRelative: true,
              scheme: ['https', 'http', 'mailto', 'tel']
            })
        },
        {
          title: 'Open in new tab',
          name: 'blank',
          description: 'Read https://css-tricks.com/use-target_blank/',
          type: 'boolean'
        }
      ]
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [{ type: 'navLink' }],
    },
  ],
};