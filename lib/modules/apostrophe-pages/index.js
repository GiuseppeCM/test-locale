// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  park: [{
    title: 'Musei',
    slug: '/musei',
    type: 'musei-page',
    label: 'musei',
    parkedId: 'musei',
    published: true
  },
  {
    title: 'biblioteche',
    slug: '/biblioteche',
    type: 'biblioteche-page',
    label: 'biblioteche',
    parkedId: 'biblioteche',
    published: true
  }]
};
