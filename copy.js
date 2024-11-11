const copy = {};

copy.technologies = [
  "Amazon Web-Services(AWS)",
  "Digital Ocean",
  "Docker",
  "Grafana",
  "React",
  "React-Native",
  "Expo",
  "Django",
  "Flask",
  "Node.js",
  "Nest.js",
  "Express",
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "Java",
  "SQL",
  "Non-SQL",
  "MongoDB",
  "React-Redux",
  "Postgres",
  "SFTP",
  "HTML",
  "Css",
  "Git",
  "Heroku",
  "Firebase",
  "Apache",
  "Stripe.js",
  "Redux-Toolkit",
  "Twilio",
  "Next.js",
  "Nginx",
  "GraphQL",
  "Web Sockets",
  "Prisma",
  "Sendgrid",
];

copy.hearted = [
  "JavaScript",
  "TypeScript",
  "React",
  "React-Native",
  "Digital Ocean",
  "Docker",
  "Stripe.js",
  "Node.js",
  "Nest.js",
  "MongoDB",
];

copy.projects = {
  dmi: {
    title: "Bluebridge Accountancy",
    img: "bluebridge-cover.png",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
    },
    date: 2020,
    images: [
      {
        source: "dmiOne",
        description:
          "Clean and well developed website a fellow independent worker",
      },
      {
        source: "dmiTwo",
        description: "Host of soloutions available.",
      },
      {
        source: "dmiThree",
        description: "Nurture growth. ",
      },
    ],
    description: `Here, I provided services for an accountant on their journey going independent. I launched the website, co-designing the wesbsite whilst utilising a bootstrap template which was heavily customised for an optimised responsive user experience.`,
    // " Professional website for an individual who is taking the great step towards providing his services to the public more independently - something which is personally deeply valued.",
    technologies: ["Bootstrap", "HTML/CSS"],
  },
  troox: {
    title: "Troox",
    description:
      "Here I worked with a professional development agency whereby I implemtned a renewed UI throughout the Troox application according to the provided designs.",
    date: 2020,
    // " The aim of this project was to implement a complete overhaul of the app design to provide a better user interface (UI). The App itself is a messaging app with a twist, whereby valuable 'troox' are sent to friends or family on special occasions.",
    technologies: ["React-Native", "React-Redux", "Javascript"],
    img: "troox-cover.webp",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
    },
    images: [
      {
        source: "troox-one",
        description:
          "The new message list, an important screen within the app, displays all incoming and outgoing messages. Each message item displays various pieces of information. The UI for this was totally recreated by myself. ",
      },
      {
        source: "troox-two",
        description:
          "Implemented the new design for all screens to provide an overall improved experience for the user by providing a much better feel to this page and all others. ",
      },
      {
        source: "troox-three",
        description:
          "Various attachment types could be added to the message - such as, videos, images, voice notes.",
      },
    ],
  },
  apple: {
    title: "M'Apple ",
    description:
      " This was a prime example of displaying the appropriate skills for developing from design because, whilst also implementing and perfecting the ‘bread and butter’ of web development - HTML and CSS.",
    technologies: ["HTML", "CSS"],
    img: "m'apple-cover.avif",
    imgStyleProps: {
      borderRadius: "1rem",
    },
    date: 2019,
    images: [
      {
        source: "apple",
        description:
          "This website was recreated with full device responsiveness so that it would be suitable for mobile as well. ",
      },
      {
        source: "apple-two",
        description:
          "This project was design focused, not focusing on functionality.",
      },
      {
        source: "apple-three",
        description:
          "The end result was achieved without copying the code of their official site.",
      },
    ],
  },
  "order-please": {
    title: "Order Please! ",
    description:
      "I developed a prototype application for a client's project, whereby customers can order from the menu, from within the application, the bill could be automaitically split whilst preparing an sms message for the customer. The prototype was implemented without design. ",
    technologies: ["React-Native", "Expo", "Firebase"],
    availability: "Available in google play store:",
    img: "order-please-cover.png",
    imgStyleProps: {
      borderRadius: "1rem",
    },
    date: 2019,
    images: [
      {
        source: "orderPlease-one",
        description:
          "The menu was displayed, which was retrieved from a firebase database and displayed within the screen here. ",
      },
      {
        source: "orderPlease-two",
        description:
          "As this project was a prototype, design was not a requirement, despite having a basic layout the app was fully functional. You can see here the amount spent by each member of the table.",
      },
      {
        source: "orderPlease-three",
        description:
          "Clicking on the send bill button (previous image), directs the waiter/waitress to a premade SMS message with the bill for the customers on the table dynamically created. ",
      },
    ],
  },
  fleetonomy: {
    title: "Fleetonomy",
    date: 2019,
    description:
      "My first experience writing deployed industry level code was with Fleetonomy. During this period I worked on full-stack tasks for a project being run with the UK based Jaguar-Land Rover company.",
    technologies: [
      "React",
      "React-Redux",
      "Docker",
      "Python",
      "Flask",
      "Mandrill",
    ],
    img: "fleetonomy-one.png",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
    },
    images: [
      {
        source: "fleetonomy-two",
        description:
          "Here is a screenshot example for one of the pages I created for their dashboard. This screen enabled filtering by date and search queries as well. ",
      },
      {
        source: "fleetonomy-three",
        description:
          "Feel free to read about some of the great things they are doing in the automotive industry.",
        contain: "true",
      },

      {
        source: "fleetonomy_cover",
        description:
          "Fleetonomy, an exciting startup, is fast making a name for themselves in the automotive industry.",
        contain: "true",
        type: "jpeg",
      },
    ],
  },
  caeserstone: {
    title: "Caeserstone",
    description:
      "I worked on dual, web and mobile, applications providing extensive updates - new features, further design changes and general improvements made to both. The apps were designed to enable customers to select products using the designated mobile devices in-store at an innovative and popular interior design store. ",
    technologies: ["React", "React-Native", "HTML/CSS", "Git"],
    img: "caeserstone-cover.png",
    imgStyleProps: {
      marginBottom: "1.5rem",
    },
    date: 2020,
    images: [
      {
        source: "caeserstone-one",
        contain: "true",
      },
      {
        source: "caeserstone-two",
      },
      {
        source: "caeserstone-three",
        contain: "true",
      },
      {
        source: "caeserstone-four",
        contain: "true",
      },
      {
        source: "caeserstone-five",
        contain: "true",
      },
    ],
  },
  bri: {
    title: "Interactive Tourist Video ",
    description:
      "During Covid-19 travel was banned, I worked on a supplementary immersive video to promote post-lockdown travel, whereby users could design their own video journey through the customised utilisation of Eko digital software.",
    technologies: ["React", "HTML/CSS", "Eko"],
    date: 2020,
    img: "bri-cover.png",
    images: [
      {
        source: "bri-one",
        contain: "true",
      },
      {
        source: "bri-two",
      },
      {
        source: "bri-three",
        contain: "true",
      },
    ],
  },
  touchit: {
    title: "TouchIt",
    description:
      "I worked with a web development agency, providing feature updates, design changes and structural improvements to this duty-free in store touch application.",
    // "Continuous updates, design and new feature integration for a commercially used application - a touch screen catalogue system designed for use in a well-known duty-free store.",
    technologies: ["React", "HTML/CSS", "Javascript"],
    date: 2020,
    images: [
      {
        source: "touchit-one",
        contain: "true",
      },
      {
        source: "touchit-two",
      },
      {
        source: "touchit-three",
        contain: "true",
      },
    ],
    img: "touchit-cover.jpeg",
  },
  stork: {
    title: "Stork",
    img: "stork-icon.png",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
    },
    images: [
      { source: "stork-cover", type: "svg" },
      { source: "stork", type: "jpg" },
      { source: "stork-two" },
    ],
    date: "2021, 2023-2024",
    technologies: [
      "React",
      "Javascript",
      "Python",
      "Django",
      "Express",
      "Nest.js",
      "Mongoose",
      "Postgres",
      "SendGrid",
      "Typescript",
      "React-Redux",
      "SFTP",
    ],
    description:
      "Stork has been an important project for me. I have been involved with it from the beginning, and journeyed beyond developing the MVP into continuing to develop progressive features and digital tools being used at the forefront of the luxury goods industry.",
  },
  P4P: {
    title: "P4P",
    fullTitle: "People 4 Progress (P4P)",
    img: "p4p-cover.jpg",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
      marginBottom: "10%",
    },
    images: [
      { source: "p4p-cover", type: "svg" },
      { source: "p4p-a" },
      { source: "p4p-b" },
      { source: "p4p-c" },
    ],
    description: `
    P4P is an ongoing project, centered and directed towards unifying efforts towards peace and social change through providing a dedicated digital space for individuals and communities to organise and coordinate efforts. We are currently running a pilot programme, asking users to make use of our playground environment and to provide us with some important feedback.
    
    I've worked on multiple apps where I've sought to merge technology with my values and personal passion, this is the first time doing so in collaboration with people and it's been thoroughly incredible journey so far. `,
    date: "2023 - 2024 (Ongoing)",
    technologies: [
      "React",
      "Nest.js",
      "React-Redux",
      "Typescript",
      "Javascript",
      "MongoDB",
      "Mongoose",
      "Stripe.JS",
      "Twilio",
    ],
  },
  tigra: {
    title: "Tigra",
    img: "tig-icon.webp",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
    },
    images: [
      { source: "tig", type: "webp" },
      { source: "tig-two", type: "webp" },
      { source: "tig-three", type: "webp" },
    ],
    date: "2022 - 2023",
    description:
      "I worked on Tigra from an early stage, bringing the concept to the app-stores over about a one year period, leading a small team of developers in the process.",
    technologies: [
      "React-Native",
      "React",
      "Docusign API",
      "Python",
      "Django",
      "Javascript",
    ],
  },
  "joel-and-sons": {
    title: "Joel & Sons",
    img: "joel-and-sons-cover.jpeg",
    imgStyleProps: {
      height: "72%",
      width: "54%",
      borderRadius: "1.8rem",
    },
    images: [
      { source: "js-a", type: "jpg" },
      { source: "js" },
      { source: "js-b" },
    ],
    date: 2022,
    description:
      "Joel & Sons is an established family run commerce business based in London. I worked over a period of a few months rennovating the business' online store utilising some of the most progressive web frameworks and technologies in the process.",
    technologies: [
      "React",
      "Adyen",
      "Next.js",
      "Prisma",
      "Circle CI",
      "Docker",
      "Nest.js",
      "Typescript",
      "Postgres",
    ],
  },
};

copy.tieredProjects = {
  junior: ["dmi", "troox", "apple", "order-please"],
  intermediate: ["fleetonomy", "caeserstone", "bri", "touchit"],
  advanced: ["stork", "P4P", "tigra", "joel-and-sons"],
};

copy.passions = [
  {
    name: "Life",
    content:
    "I'm passionate for Life. I embrace challenges and adventures, whilst getting the most from living, and I wish to keep growing and pushing myself as an individual and within my work.",
  },
  {
    name: "writing",
    content:
      "I love the introspective and therpaeutic nature of writing alongside the beautiful nuance which can be achieved through language. I especially love writing poetry or about religion and/or philosophy.",
  },
  {
    name: "theology and philosophy",
    content:
      "I'm passionate about faith, and belief which transcends beyond the boundaries of different religions. What is the right way to live? How can I be a better person?",
  },
  {
    name: "technology",
    content:
      "I'm passionate about technology which has a postivie impact on society, technology which creates change and technology which alleviates suffering. If you feel the same, then let's collaborate and create together!",
  },
  {
    name: "music, dancing, culture",
    content:
      "I believe it's important to enjoy living, music, dancing and culture are key ways which help me doing so.",
  },
];

const heartEmojiHtml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
  </svg>
`;
