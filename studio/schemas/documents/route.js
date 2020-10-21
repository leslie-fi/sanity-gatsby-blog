import client from 'part:@sanity/base/client'
import { MdLink } from 'react-icons/md'
import pageAbout from './pageAbout'

function asyncSlugifyFn(input) {
  console.log(input)
  const query = '*[_id == $id][0]'
  const params = {id: input._ref}
  return client.fetch(query, params).then(doc => {
    console.log(doc)
    return doc.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
  })
}

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Title for internal purposes'
    },
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'pageAbout'
        },
        {
          type: 'page'
        },
        {
          type: 'pageGallery'
        },
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      validation: Rule =>
        Rule.required(),
      options: {
        source: 'page',
        slugify: asyncSlugifyFn
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'page.meta.featuredImage'
    }
  }
}
