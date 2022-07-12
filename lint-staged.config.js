module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint", "prettier --check"],
  "**/*.ts?(x)": () => "npm run check-types",
  "*.json": ["prettier --write"],
};
