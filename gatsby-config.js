module.exports = {
  siteMetadata: {
    name: "Paul Scanlon",
    description:
      "I'm a Front End Developer / UX Engineer based in Worthing | London / UK. React, Gatsby, JavaScript, TypeScript/Flow, styled-components, Theme UI, Storybook, TDD (Jest/Enzyme/React Testing Libary) and a tiny bit of Node and FaunaDB",
    keywords: [
      "React",
      "Gatsby",
      "JavaScript",
      "TypeScript",
      "Flow",
      "styled-components",
      "Theme UI",
      "Jest",
      "Enzyme",
      "React Testing Libary",
      "Node.js",
      "Fauna",
      "FaunaDB",
      "JAMStack",
      "Component Library",
    ],
    siteUrl: "https://pauliescanlon.io",
    siteImage:
      "https://pauliescanlon.io/images/pauliescanlon-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 200,
    },
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["portfolio", "opensource", "sidehussle"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Scanlon`,
        short_name: `Ps`,
        start_url: `/`,
        lang: `en`,
        background_color: `#282a36`,
        theme_color: `#ff79c6`,
        display: `standalone`,
        icon: `src/manifesticon-512x512.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-1",
      },
    },
  ],
}
