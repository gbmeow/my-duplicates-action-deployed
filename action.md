name: 'My Duplicates'
description: 'Find duplicates inside webpack bundles'
on: 
  pull_request:
        branches:
            - main
jobs: 
  codecov:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - uses: actions/setup-node@v2
        with:
          node-version: '14.x'

      - name: install webpack-stats-duplicates
        run: npm install -g webpack-stats-duplicates

      - name: run duplicates
        run: webpack-stats-duplicates stats.json

      
      