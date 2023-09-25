// gitprofile.config.js

const config = {
  github: {
    username: 'onizuka893', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['Extra-oefening-arrays', 'YoutubeApiTestMAUIBlazor'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'volkan-ibis-015359187',
    youtube: '', // example: 'pewdiepie'
    website: 'https://onizuka893.github.io/',
    phone: '',
    email: 'volkanibis123@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    '.Net',
    'ASP.NET',
    '.Net MAUI',
    'Java',
    'Spring Boot',
    'MySQL',
    'C++',
    'Python',
    'React',
  ],
  experiences: [
    {
      company: 'upwork.com',
      position: 'Freelance Developer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.upwork.com/',
    },
    {
      company: 'BMI Leisure',
      position: '.NET Full Stack Developer Intern',
      from: 'September 2022',
      to: 'May 2023',
      companyLink: 'https://www.bmileisure.com/en',
    },
  ],
  certifications: [
    {
      name: 'Foundational C#',
      body: 'Microsoft',
      year: 'September 2023',
      link: 'https://www.freecodecamp.org/certification/fcc878425e7-684f-404b-bc8d-114065c6d742/foundational-c-sharp-with-microsoft'
    },
    {
      name: 'C#',
      body: 'HackerRank',
      year: 'September 2023',
      link: 'https://www.hackerrank.com/certificates/8bdf24d8ca35'
    },
  ],
  education: [
    {
      institution: 'Hogeschool PXL',
      degree: 'Bachelor of Applied Computer Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Hogeschool PXL',
      degree: 'Graduate in Programming',
      from: '2021',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
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
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
