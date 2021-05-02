// Config for standard-version
// https://github.com/conventional-changelog/standard-version
module.exports = {
  types: [
    {
      type: 'feat',
      section: 'Features',
    },
    {
      type: 'fix',
      section: 'Bug Fixes',
    },
    {
      type: 'perf',
      section: 'Performance',
    },
    {
      type: 'refactor',
      section: 'Refactors',
      hidden: true,
    },
  ],
};
