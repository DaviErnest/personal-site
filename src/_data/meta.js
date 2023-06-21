module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Davi Ernest',
  siteDescription: 'Personal site of Davi Ernest Pradipta.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Davi Ernest Pradipta', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'general@daviernest.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://www.daviernest.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#323264', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Davi Ernest Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Davi Ernest Pradipta',
    street: 'Tokura-cho 14-1',
    city: 'Hakodate-shi',
    state: 'Hokkaido',
    zip: '042-0953',
    mobileDisplay: '+81 70-1139-8435',
    mobileCall: ' +817011398435',
    email: 'general@daviernest.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
