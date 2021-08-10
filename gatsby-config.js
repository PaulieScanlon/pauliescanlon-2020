module.exports = {
  siteMetadata: {
    name: "Paul Scanlon",
    description:
      "Jamstack Developer: React, Gatsby, JavaScript, TypeScript, CSS-in-Js, Storybook, TDD & a tiny bit of Apollo/GraphQL/Node",
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
      "Jamtack",
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
        source: [
          {
            name: "portfolio",
            dir: "portfolio",
          },
          {
            name: "opensource",
            dir: "opensource",
          },
          {
            name: "sidehussle",
            dir: "sidehussle",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-1",
      },
    },
  ],
}
