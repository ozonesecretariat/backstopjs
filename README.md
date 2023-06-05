# Visual regression tests for ozone.unep.org

This test suite uses [Backstopjs](https://github.com/garris/BackstopJS).
It can generate screenshots of pages configured in `backstop.config.js` and compare the production and test instances.

## Running on development environment

```bash
# Install
nvm use 18
npm install
# Create reference screenshots from production (see config.baseUrl in package.json)
npm run reference
# Compare test environment with saved reference
npm run test [--url=https://test.ozone.unep.org]
# Check HTML report generated in `backstop_data/html_report`
```

## Other notes

- Make sure the test content is synchronized with the production database, otherwise there will be many difference, e.g. in listings
- If needed, basic auth can be configured in `engine_scripts/puppet/onBefore.js`
- Some DOM elements are removed (cookie banner, unloaded lazy images, etc.), see `removeSelectors` property in `backstop.config.js`
