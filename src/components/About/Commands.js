import React from 'react';
import '../content.css'; // Import custom CSS

const Commands = () => {
  return (
    <div>
      <h2>Commands</h2>
      <p className="introduction-paragraph">
        To use <code>stg-cli</code>, install it globally using npm:
      </p>
      <pre className="code-block">
        <code>
          npm install -g stg-cli
        </code>
      </pre>
      <p className="introduction-paragraph">Initialization:</p>
      <pre className="code-block">
        <code>
          $ stg-cli init
        </code>
      </pre>
      <p className="introduction-paragraph">Start/Stop Applications:</p>
      <pre className="code-block">
        <code>
          $ stg-cli start &lt;appid&gt;<br />
          $ stg-cli stop &lt;appid&gt;
        </code>
      </pre>
      <p className="introduction-paragraph">List Configured Applications:</p>
      <pre className="code-block">
        <code>
          $ stg-cli apps
        </code>
      </pre>
      <p className="introduction-paragraph">Kill Service:</p>
      <p> To kill the CI/CD service completely:<br /></p>
      <pre className="code-block">
        <code>
          $ stg-cli kill
       </code> </pre>
        <p> To kill the CI/CD service for a specific project:<br /></p>
        <pre className="code-block">
         <code>
          $ stg-cli kill &lt;appid&gt;
        </code>
      </pre>
      <p className="introduction-paragraph">Show Version:</p>
      <pre className="code-block">
        <code>
          $ stg-cli -v
        </code>
      </pre>
      <p className="introduction-paragraph">Show Available Commands:</p>
      <pre className="code-block">
        <code>
          $ stg-cli -help
        </code>
      </pre>
    </div>
  );
}

export default Commands;
