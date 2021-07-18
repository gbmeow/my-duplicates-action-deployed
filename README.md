# Webpack Duplicates Action

This Github Action posts a PR comment, when it identifies duplicates inside webpack bundles.

## Example usage

uses: actions/webpack-duplicates-on-pr@v1.1
with:
  myToken: ${{ secrets.GITHUB_TOKEN }}
    