module.exports = {
  plugins: [
    require("autoprefixer"),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("postcss-px-to-viewport")({
      unitToConvert: "px",
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    }),
  ],
};
