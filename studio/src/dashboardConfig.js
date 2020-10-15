export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f88d7b238b1384638aca449',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8r15oise',
                  apiId: 'b7773361-dcf5-455c-94e4-5b351c33f5ca'
                },
                {
                  buildHookId: '5f88d7b214c2014a512f1c3e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k7pxr8rt',
                  apiId: '35fb9055-3835-4c47-9520-b93e810b3763'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leslie-fi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k7pxr8rt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
