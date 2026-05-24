// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications listed in the CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-our-paper-neuro-symbolic-ai-for-analytical-solutions-of-differential-equations-was-accepted-in-forty-third-international-conference-on-machine-learning",
          title: 'Our paper Neuro-Symbolic AI for Analytical Solutions of Differential Equations was accepted in...',
          description: "",
          section: "News",},{id: "news-i-was-recognized-as-a-gold-reviewer-for-icml-2026",
          title: 'I was recognized as a Gold Reviewer for ICML 2026.',
          description: "",
          section: "News",},{id: "news-our-paper-neuro-symbolic-ode-discovery-with-latent-grammar-flow-was-accepted-in-spigm-icml-workshop-on-structured-probabilistic-inference-amp-amp-generative-modeling",
          title: 'Our paper Neuro-Symbolic ODE Discovery with Latent Grammar Flow was accepted in SPIGM...',
          description: "",
          section: "News",},{id: "news-i-am-going-to-present-as-an-invited-speaker-to-physml-workshop-2026-in-oslo-check-it-out",
          title: 'I am going to present as an invited speaker to PhysML Workshop 2026...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Georgios_Kissas.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6B%69%73%73%61%73@%61%69.%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/georgioskissas", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gGvVfmAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
