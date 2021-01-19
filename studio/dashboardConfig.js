export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60069836ab6d72a512aa7541',
                  title: 'Sanity Studio',
                  name: 'itverket-no-studio',
                  apiId: '21b8972d-e231-4f9c-bf1f-e3cb0f248e91'
                },
                {
                  buildHookId: '6006983659b42b6dcd1bc5c9',
                  title: 'Portfolio Website',
                  name: 'itverket-no',
                  apiId: '21bc3b4f-0558-424a-83c3-6fb1b74d46a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomand/itverket-no',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://itverket-no.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
