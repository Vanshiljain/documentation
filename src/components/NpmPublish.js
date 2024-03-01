// BuildNextApp.js
import React from 'react';

const NpmPublish= () => {
  return (
    <div>
      <h3>NPM Publish Package</h3>
      <pre>
        <code>
          {`name: NPM Publish
repoFullName: Default Repository
on
push:
  branches:
    - Default Branch
jobs:
  run-publish:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: $
    strategy:
      matrix:
        node-version:
          - 18.16.0
    steps:
      - uses: actions/checkout@v3
        name: Checkout code
      - uses: actions/setup-node@v3
        name: Set up Node.js
        with:
          node-version: $
      - name: Install dependencies
        run: npm install
      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: $
`}
        </code>
      </pre>
    </div>
  );
}

export default NpmPublish;
