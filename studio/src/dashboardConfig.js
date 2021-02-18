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
                  buildHookId: '602e7d57b2a3060c7138a46f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n3dmbt3p',
                  apiId: '555a2fa4-b5f1-4eec-9fd5-65c9fb816faf'
                },
                {
                  buildHookId: '602e7d57b2a3060e51389df9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3pc7vnw2',
                  apiId: '6d88d0d5-b8c8-4c71-8609-cd843b15fe31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/risseraka/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3pc7vnw2.netlify.app', category: 'apps' }
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
