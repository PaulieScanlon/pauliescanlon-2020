module.exports = {
  siteMetadata: {
    name: "Paul Scanlon",
    description:
      "I'm a React UI developer / UX Engineer (contract). React, GatsbyJs, JavaScript, TypeScript/Flow, StyledComponents, Storybook, TDD (Jest/Enzyme) and a tiny bit of Node.js.",
    keywords: [
      "React",
      "Gatsby.js",
      "JavaScript",
      "TypeScript",
      "Flow",
      "StyledComponents",
      "Jest",
      "Enzyme",
      "Node.js",
    ],
    siteUrl: "https://pauliescanlon.io",
    siteImage: "images/pauliescanlon-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["portfolio", "opensource"],
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
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-1",
      },
    },
  ],
}
