var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-locale',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-db': {
      uri: 'mongodb://localdocker:27018/test-locale'
    },
    'biblioteche': {
      extend: 'apostrophe-pieces'
    },
    'musei': {
      extend: 'apostrophe-pieces'
    },
    'biblioteche-pages': {
      extend: 'apostrophe-pieces-pages'
    },
    'musei-pages': {
      extend: 'apostrophe-pieces-pages'
    },

    'apostrophe-workflow': {
      prefixes: {
        'it': '/it',
        'en': '/en'
      },
      locales: [{
        name: 'it',
        label: 'it',
      },
      {
        name: 'en',
        label: 'en',
      }
      ],
      defaultLocale: 'it',
      alias: 'workflow',
      excludeTypes: [
        'musei',
      ],
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }

  }
});
