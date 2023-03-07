module.exports = {
  "./src/**/*.{js,jsx,ts,tsx}": ["bash -c 'npm run type-check'", "eslint --fix --max-warnings=0"],
  "./src/**/*.{css,scss}": ["stylelint --fix"],
  "*.{md,json,cjs}": ["prettier --write"],
};
