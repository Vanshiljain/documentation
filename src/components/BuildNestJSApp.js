// BuildNextApp.js
import React from 'react';

const BuildNextApp = () => {
  return (
    <div>
      <h3>Build Next.js Application</h3>
      <pre>
        <code>
          {`name: Build Next.js Application
repoFullName: Default Repository
on
push:
  branches:
    - Default Branch
jobs:
  run-deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory:
      matrix:
        node-version:
          - 18.16.0
    steps:
      - uses: actions/checkout@v3
        name: Setup jobs
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        name: Setup environment
        with:
          node-version: 
      - name: Install dependencies
        run: npm install --global yarn && yarn
      - name: Building
        run: yarn run build`}
        </code>
      </pre>
    </div>
  );
}

export default BuildNextApp;
