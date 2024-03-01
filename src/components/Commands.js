// Commands.js
import React from 'react';
import './content.css'
const Commands = () => {
  return (
    <div>
      <h2>Commands</h2>
      <p className="introduction-paragraph">
        To use `onetab-cli`, install it globally using npm:
      </p>
      <pre>
      <code className="code-block">
          {`npm install -g onetab-cli`}
        </code>
      </pre>
      <p className="introduction-paragraph">Initialization:</p>
      <pre>
      <code className="code-block">
          {`$ onetab-cli init`}
        </code>
      </pre>
      <p className="introduction-paragraph">Start/Stop Applications:</p>
      <pre>
      <code className="code-block">
          {`$ onetab-cli start <appid>`}<br />
          {`$ onetab-cli stop <appid>`}
        </code>
      </pre>
      <p className="introduction-paragraph">List Configured Applications:</p>
      <pre>
      <code className="code-block">
          {`$ onetab-cli apps`}
        </code>
      </pre>
      <p className="introduction-paragraph">Kill Service:</p>
      <pre>
      <code className="code-block">
          {`To kill the CI/CD service completely:`}<br />
          {`$ onetab-cli kill`}<br /><br />
          {`To kill the CI/CD service for a specific project:`}<br />
          {`$ onetab-cli kill <appid>`}
        </code>
      </pre>
      <p className="introduction-paragraph">Show Version:</p>
      <pre>
      <code className="code-block">
          {`$ onetab-cli -v`}
        </code>
      </pre>
      <p className="introduction-paragraph">Show Available Commands:</p>
      <pre>
      <code className="code-block">
          {`$ onetab-cli -help`}
        </code>
      </pre>
    </div>
  );
}

export default Commands;
