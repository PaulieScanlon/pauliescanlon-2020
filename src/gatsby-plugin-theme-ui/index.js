import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui"

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    warning: "#fdd835",
  },

  alerts: {
    ...baseTheme.alerts,
    warning: {
      ...baseTheme.alerts.primary,
      color: "background",
      backgroundColor: "warning",
      a: {
        color: "primary",
      },
    },
  },
}

export default theme
