type ProjectButton = {
  label: string
  link: string
}

export type Project = {
  title: string
  about: string
  image: string
  link?: string
  buttons: ProjectButton[]
  icons: string[]
}

export const projects: Project[] = [
  {
    title: 'codefy.ai',
    about:
      'A toolbox of powerful AI coding widgets built to help developers speed up their workflow. Achieved 5,000 user sign ups in two weeks and 100+ subscriptions.',
    link: 'https://www.codefy.ai',
    image: 'codefyai.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.codefy.ai',
      },
      {
        label: 'Product Hunt',
        link: 'https://www.producthunt.com/posts/codefy-ai',
      },
      {
        label: 'Demo',
        link: 'https://youtu.be/w_UYbcWf_oo',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Vercel',
      'Firebase',
      'OpenAI',
      'Stripe',
      'TypeScript',
      'SASS Modules',
      'VSCode',
    ],
  },
  {
    title: 'MeetingBrew',
    about:
      'A modern way to schedule your meetings. Select date and time ranges, send out the link to others, and find out when everyone is available.',
    link: 'https://www.meetingbrew.com',
    image: 'meetingbrew.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.meetingbrew.com',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Firebase',
      'TypeScript',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'Homebound',
    about:
      'An iOS app built to help University of Michigan students find carpools home for break. Hit 100 active users within 3 days of launch.',
    link: 'https://www.homeboundapp.com',
    image: 'homebound.png',
    buttons: [
      {
        label: 'App Store',
        link: 'https://www.homeboundapp.com',
      },
    ],
    icons: [
      'React Native',
      'Expo',
      'Google Maps Platform',
      'Firebase',
      'TypeScript',
      'JavaScript',
      'VSCode',
    ],
  },
  {
    title: 'Rhythmatic',
    about:
      'An AI-powered song recommender. Combines Spotify with the OpenAI API to generate customized music recommendations.',
    link: 'https://www.rhythmatic.ai',
    image: 'rhythmatic.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.rhythmatic.ai',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'OpenAI API',
      'Spotify API',
      'TypeScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'CodeCreatively',
    about:
      'A website for beginners to learn JavaScript by making and playing retro pixel games. Integrated into several schools and seeking further growth.',
    link: 'https://www.codecreatively.com',
    image: 'codecreatively.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.codecreatively.com',
      },
      {
        label: 'Demo',
        link: 'https://youtu.be/G75DeY9P2dg',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Firebase',
      'TypeScript',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'Stripe',
      'VSCode',
    ],
  },
  {
    title: 'Deserted',
    about:
      'Forage, build, and innovate on your new island. A creative, ambient survival game. Built in Unity over 3 months.',
    link: 'https://csaye.itch.io/deserted',
    image: 'deserted.png',
    buttons: [
      {
        label: 'Available Now',
        link: 'https://csaye.itch.io/deserted',
      },
      {
        label: 'Trailer',
        link: 'https://youtu.be/g8Ckftlqdfg',
      },
      {
        label: 'Soundtrack',
        link: 'https://soundcloud.com/csaye/sets/deserted',
      },
    ],
    icons: [
      'Unity',
      'C#',
      'VSCode',
      'FL Studio',
      'Audacity',
      'Aseprite',
      'GIMP',
    ],
  },
  {
    title: 'Megaphone',
    about:
      'A classroom communication forum for students and teachers. Won the Congressional App Challenge and was honored by Congressman Ted Lieu.',
    link: 'https://www.themegaphone.net',
    image: 'megaphone.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.themegaphone.net',
      },
      {
        label: 'Press release',
        link: 'https://lieu.house.gov/media-center/press-releases/rep-lieu-honors-winners-annual-congressional-app-challenge-1',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Firebase',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'I-Acute (í.is)',
    about:
      'A URL shortener with one of the narrowest possible domains. Shorten URLs by length and width.',
    link: 'https://xn--eda.is',
    image: 'iacute.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://xn--eda.is',
      },
      {
        label: 'Article',
        link: 'https://www.coop.codes/i-acute',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/i-acute',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Firebase',
      'TypeScript',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'Devcomms',
    about:
      'Text chat with built-in developer widgets. Built to help coordinate teams of developers through a centralized tool.',
    link: 'https://devcomms.vercel.app',
    image: 'devcomms2.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://devcomms.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/CodeConvoy/devcomms',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'GitHub API',
      'Firebase',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'Atom',
    ],
  },
  {
    title: 'Codetrain',
    about:
      'A retro browser game engine. Learn JavaScript while building games and exploring a community of projects.',
    link: 'https://codetrain.org',
    image: 'codetrain.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://codetrain.org',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/CodeWithGames/codetrain',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Firebase',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'Atom',
    ],
  },
  {
    title: 'Daytrip',
    about:
      'Explore any area with a randomly generated trip. Uses the Yelp API to look up activities and FullCalendar to manage scheduling.',
    link: 'https://daytrip.vercel.app',
    image: 'daytrip.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://daytrip.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/daytrip',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'JavaScript',
      'Yelp API',
      'FullCalendar',
      'Vercel',
      'CSS Modules',
      'Atom',
    ],
  },
  {
    title: 'MapMake',
    about:
      'A collaborative, online tilemap editor. Built to help coordinate team tilemap creation.',
    link: 'https://csaye.com/mapmake',
    image: 'mapmake.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/mapmake',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/mapmake',
      },
    ],
    icons: ['React', 'JavaScript', 'Firebase', 'CSS', 'Atom'],
  },
  {
    title: 'FlexScript',
    about:
      'A programming language that compiles into C#, C++, Python, Java, and JavaScript. Written in Python.',
    link: 'https://github.com/csaye/flexscript',
    image: 'flexscript.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/flexscript#installationcompilation',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/flexscript',
      },
    ],
    icons: ['Python', 'Shell', 'Atom', 'C#', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'Mono3D',
    about:
      'A 3D raycasting engine built in MonoGame. An extension of Mono2D. Features movement and view customizability.',
    link: 'https://github.com/csaye/mono3d',
    image: 'grid.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/mono3d#installationrunning',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/mono3d',
      },
    ],
    icons: ['MonoGame', 'C#', 'Visual Studio'],
  },
  {
    title: 'Domain Hacks',
    about:
      'A domain hack generator. A domain hack is a domain name that spells out a word. For example: internet → inter.net',
    link: 'https://www.coop.codes/domain-hacks',
    image: 'domainhacks.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.coop.codes/domain-hacks',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/coop.codes',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Whois',
      'TypeScript',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'Cartridge',
    about:
      'An experimental tile-based retro game builder. Hoping to expand one day with more content and social features.',
    link: 'https://cartridge.vercel.app',
    image: 'cartridge.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://cartridge.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/cartridge',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'Add a Word',
    about:
      'Generates domain name ideas by adding words to a given keyword. Built to help brainstorm new domain names.',
    link: 'https://www.coop.codes/add-a-word',
    image: 'addaword.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://www.coop.codes/add-a-word',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/coop.codes',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Whois',
      'TypeScript',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'VSCode',
    ],
  },
  {
    title: 'Brainwave',
    about:
      'Rich and centralized idea development. Built to help teams brainstorm ideas on a synchronized sketchboard.',
    link: 'https://brainwave.vercel.app',
    image: 'brainwave.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://brainwave.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/CodeConvoy/brainwave',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'Firebase',
      'JavaScript',
      'Vercel',
      'CSS Modules',
      'Atom',
    ],
  },
  {
    title: 'Pygolf',
    about:
      'Create and share Python code golf challenges. Uses Python Shell to compile scripts in the backend.',
    link: 'https://github.com/CodeWithGames/pygolf',
    image: 'pygolf.png',
    buttons: [
      {
        label: 'GitHub',
        link: 'https://github.com/CodeWithGames/pygolf',
      },
    ],
    icons: ['React', 'Next.js', 'JavaScript', 'CSS Modules', 'Atom'],
  },
  {
    title: 'Pixel Engine',
    about:
      'A minimalist online game engine. Write games directly in the browser and export as an HTML file.',
    link: 'https://pixele.vercel.app',
    image: 'pixele.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://pixele.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/CodeWithGames/pixel-engine',
      },
    ],
    icons: [
      'React',
      'Next.js',
      'JavaScript',
      'Ace',
      'Acorn',
      'Vercel',
      'CSS Modules',
      'Atom',
    ],
  },
  {
    title: 'Symbl',
    about:
      'An interpreted symbol-based language inspired by BF. An experiment in esoteric programming languages and command simplification.',
    link: 'https://github.com/csaye/symbl',
    image: 'symbl.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/symbl#installation',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/symbl',
      },
    ],
    icons: ['Python', 'Shell', 'Atom'],
  },
  {
    title: 'SleekScript',
    about:
      'A pythonic, browser-based language that compiles to JavaScript. Inspired by CoffeeScript.',
    link: 'https://csaye.com/sleekscript',
    image: 'sleekscript.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/sleekscript',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/sleekscript',
      },
    ],
    icons: ['React', 'JavaScript', 'CodeMirror', 'CSS Modules', 'Atom'],
  },
  {
    title: 'GameScript',
    about:
      'A wrapper for common Pygame functions. Built to prevent code redundancy in Pygame projects.',
    link: 'https://github.com/csaye/gamescript',
    image: 'gamescript.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/gamescript#installation',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/gamescript',
      },
    ],
    icons: ['Python', 'Pygame', 'IDLE'],
  },
  {
    title: 'MonoBuild',
    about:
      'A command-line tool for cross-platform building in MonoGame. Built for a lack of a simple MonoGame compilation tool.',
    link: 'https://github.com/csaye/monobuild',
    image: 'monobuild.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/monobuild#installation',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/monobuild',
      },
    ],
    icons: ['Shell', 'Atom'],
  },
  {
    title: 'Devcomms Legacy',
    about:
      'Team communication and coordination all in one place. Old version of the project, written in vanilla React.',
    link: 'https://devcomms.vercel.app',
    image: 'devcomms.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://devcomms.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/devcomms-legacy',
      },
    ],
    icons: [
      'React',
      'JavaScript',
      'Firebase',
      'WebRTC',
      'PeerJS',
      'CSS',
      'Atom',
    ],
  },
  {
    title: 'ImgScript',
    about:
      'An image-based programming language. An experiment in esoteric programming languages.',
    link: 'https://github.com/csaye/imgscript',
    image: 'imgscript.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/imgscript#installationcompilation',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/imgscript',
      },
    ],
    icons: ['Python', 'Atom'],
  },
  {
    title: 'Calendar',
    about:
      'Event scheduling in a simple interface. Uses Firebase for authentication and data storage.',
    link: 'https://csaye.com/calendar',
    image: 'calendar.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/calendar',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/calendar',
      },
    ],
    icons: ['React', 'JavaScript', 'Firebase', 'CSS', 'Atom'],
  },
  {
    title: 'SimpleStore',
    about:
      'Built to experiment with file storage. Features file uploading and folder creation. Uses Firebase for authentication and file storage.',
    link: 'https://csaye.com/simple-store',
    image: 'storage.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/simple-store',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/simple-store',
      },
    ],
    icons: ['React', 'JavaScript', 'Firebase', 'CSS', 'Atom'],
  },
  {
    title: 'Mono2D',
    about:
      'A 2D raycasting engine built in MonoGame. My first major C# game framework project. Features collision detection.',
    link: 'https://github.com/csaye/mono2d',
    image: 'pillars.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://github.com/csaye/mono2d#installationrunning',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/mono2d',
      },
    ],
    icons: ['MonoGame', 'C#', 'Visual Studio'],
  },
  {
    title: 'Meta Python',
    about:
      'Python written in Python. An experiment in code lexing and parsing.',
    link: 'https://github.com/csaye/meta-python',
    image: 'meta.png',
    buttons: [
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/meta-python',
      },
    ],
    icons: ['Python', 'IDLE'],
  },
  {
    title: 'Widget Wall',
    about:
      'A webpage with a collection of useful widgets. Uses Firebase for backend and connects with several APIs, including Datamuse and Bit.ly.',
    link: 'https://csaye.com/widget-wall',
    image: 'widgets.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/widget-wall',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/widget-wall',
      },
    ],
    icons: [
      'React',
      'JavaScript',
      'Firebase',
      'Datamuse API',
      'Bit.ly API',
      'OpenWeather API',
      'Random Word API',
      'Atom',
    ],
  },
  {
    title: 'Python Highlights',
    about:
      'Highlights from my personal Python projects. Features many experiments built with Pygame.',
    link: 'https://github.com/csaye/python-highlights',
    image: 'highlights.png',
    buttons: [
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/python-highlights',
      },
    ],
    icons: ['Python', 'Pygame', 'IDLE'],
  },
  {
    title: 'MinScript',
    about:
      'A minimalist programming language written in Python. My first experimental programming language.',
    link: 'https://github.com/csaye/minscript',
    image: 'minscript.png',
    buttons: [
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/minscript',
      },
    ],
    icons: ['Python', 'IDLE'],
  },
  {
    title: 'Countdown Tracker',
    about:
      'A countdown tracker tool. Uses Firebase for the backend and features a toggleable background.',
    link: 'https://csaye.com/countdown-tracker',
    image: 'countdown2.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/countdown-tracker',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/countdown-tracker',
      },
    ],
    icons: ['React', 'JavaScript', 'Firebase', 'CSS', 'Atom'],
  },
  {
    title: 'Bicycle',
    about:
      'A minimalist social media placing its users first. My first major web project, uses Firebase for authentication and data storage.',
    link: 'https://bicycle-social.vercel.app',
    image: 'bicycle.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://bicycle-social.vercel.app',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/bicycle',
      },
    ],
    icons: ['React', 'JavaScript', 'Firebase', 'CSS', 'Atom'],
  },
  {
    title: 'Playlist Bot',
    about:
      'Input your preferences to generate Spotify playlists. Uses the Spotify API to search songs and save playlists.',
    link: 'https://csaye.com/playlist-bot',
    image: 'playlist.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/playlist-bot',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/playlist-bot',
      },
    ],
    icons: ['React', 'JavaScript', 'Spotify API', 'CSS', 'Atom'],
  },
  {
    title: 'Ticket Tracker',
    about:
      'A ticket tracker tool. My first use of a database in web development, uses Firebase to store users and ticket data.',
    link: 'https://csaye.com/ticket-tracker',
    image: 'tickets.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/ticket-tracker',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/ticket-tracker',
      },
    ],
    icons: ['React', 'JavaScript', 'Firebase', 'CSS', 'Atom'],
  },
  {
    title: 'Coding Challenges',
    about:
      'A collection of common coding challenges in various languages. Features challenges in C#, C++, Python, Java, and JavaScript.',
    link: 'https://github.com/csaye/coding-challenges',
    image: 'challenges.png',
    buttons: [
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/coding-challenges',
      },
    ],
    icons: ['C#', 'Python', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'Jamming',
    about:
      'A Spotify playlist builder. My first usage of an API in an app, uses the Spotify API to search songs and save playlists.',
    link: 'https://csaye.com/jamming',
    image: 'jamming.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.com/jamming',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/jamming',
      },
    ],
    icons: ['React', 'JavaScript', 'Spotify API', 'CSS', 'Atom'],
  },
  {
    title: 'Countdown',
    about:
      'A lightweight, downloadable countdown tracker. Features color customization. Built in Unity.',
    link: 'https://csaye.itch.io/countdown',
    image: 'countdown.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.itch.io/countdown',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/countdown',
      },
    ],
    icons: ['Unity', 'C#', 'VSCode'],
  },
  {
    title: '2048 Live',
    about:
      '"2048" controlled through real-time object detection. My first major project in C++, uses OpenCV for camera and SDL2 for drawing.',
    link: 'https://youtu.be/plsA6wMOhsY',
    image: '2048.png',
    buttons: [
      {
        label: 'Demo',
        link: 'https://youtu.be/plsA6wMOhsY',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/2048-live',
      },
    ],
    icons: ['C++', 'SDL2', 'OpenCV', 'VSCode'],
  },
  {
    title: 'Sorting Visualization',
    about:
      'An interactive visualization tool for eight common sorting algorithms. Uses Unity WebGL to run in the browser.',
    link: 'https://csaye.itch.io/sorting-visualization',
    image: 'sorting.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.itch.io/sorting-visualization',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/sorting-visualization',
      },
    ],
    icons: ['Unity', 'C#', 'VSCode'],
  },
  {
    title: 'Chess',
    about:
      'Play chess against a basic AI. Built to experiment with the implementations of chess rules.',
    link: 'https://csaye.itch.io/chess',
    image: 'chess.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.itch.io/chess',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/chess',
      },
    ],
    icons: ['Unity', 'C#', 'VSCode', 'GIMP'],
  },
  {
    title: 'A* Visualization',
    about:
      'An interactive step-by-step visualization of the A* pathfinding algorithm. Uses Unity WebGL to run in the browser.',
    link: 'https://csaye.itch.io/a-star-visualization',
    image: 'astar.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.itch.io/a-star-visualization',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/a-star-visualization',
      },
    ],
    icons: ['Unity', 'C#', 'VSCode', 'GIMP'],
  },
  {
    title: 'Diapixel',
    about:
      'A minimal 2D and 3D diagramming tool built in a day. Built to experiment with 2D and 3D movement in Unity.',
    link: 'https://csaye.itch.io/diapixel',
    image: 'diapixel.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.itch.io/diapixel',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/diapixel',
      },
    ],
    icons: ['Unity', 'C#', 'VSCode', 'GIMP'],
  },
  {
    title: 'Computeroid',
    about:
      'A top-down puzzle game with a retro computer theme. My first major game project, built in Unity over 2 months.',
    link: 'https://csaye.itch.io/computeroid',
    image: 'computeroid.png',
    buttons: [
      {
        label: 'Try it out',
        link: 'https://csaye.itch.io/computeroid',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/csaye/computeroid',
      },
      {
        label: 'Soundtrack',
        link: 'https://soundcloud.com/csaye/sets/computeroid',
      },
    ],
    icons: ['Unity', 'C#', 'VSCode', 'FL Studio', 'BFXR', 'GIMP'],
  },
]
