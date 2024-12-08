// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'anargya-anubhawa', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['anargya-anubhawa/api-anargya'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Genetic WhatsApp Bot',
          description:
            'Genetic is an autoresponder-based WhatsApp bot with features like a Node.js bot. This bot was created by Anargya with contributions from Maxstream for answer rule inspiration and ItsReimau which supports a number of APIs used in GeneticBot.',
          imageUrl:
            'https://i.ibb.co.com/YjjpJx7/Genetic.jpg',
          link: 'https://wa.me/message/MAKNJQWZ5ULVM1',
        },
        {
          title: 'Genetic AutoResponder API',
          description:
            'Genetic API based from Pautres. \nPautres is a WebServer-based API that can be integrated into AutoResponder applications.',
          imageUrl:
            'https://i.ibb.co.com/2gbWtbF/KazeGX.jpg',
          link: 'https://api-anargya.bohr.io/',
        },

      ],
    },
  },
  seo: {
    title: 'anargya-anubhawa',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'anargya.anubhawa',
    reddit: '',
    threads: '',
    youtube: 'anargya.anubhawa', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'anargya_anubhawa',
    website: 'https://blog.anargya.my.id',
    phone: '6285174177427',
    email: 'anargya.anubhawa98@gmail.com',
  },
  resume: {
    fileUrl:
      'https://blog.anargya.my.id', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Fork kodingan orang',
    'Mangan',
    'Sinau',
    'Turu',
  ],
  experiences: [
    {
      company: 'TerraShine Terraria Server',
      position: 'Owner',
      from: 'September 2020',
      to: 'Present',
      companyLink: 'https://terrashine.gitbook.io',
    },
    {
      company: 'Genetic Bot and Store',
      position: 'Owner',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://wa.me/message/MAKNJQWZ5ULVM1',
    },
  ],
  certifications: [
    {
      name: 'SoloLearn Certificate',
      body: 'I collected all the certificates in one Google Drive folder which can be accessed by pressing this section. ',
      year: '--',
      link: 'https://drive.google.com/drive/folders/13gsUp3Ygok0qm0c3l66xVBUmqhT8GXfx',
    },
  ],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'autumn',
      'dim',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Copyright © 2024 Anargya`,

  enablePWA: true,
};

export default CONFIG;
