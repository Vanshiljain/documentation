// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Introduction from './components/About/Introduction';
import Commands from './components/About/Commands';
import './App.css'; // Import custom CSS
import BuildReactApp from './components/yaml/BuildReactApp';
import BuildNextApp from './components/yaml/BuildNestJSApp';
import NpmPublish from './components/yaml/NpmPublish';
import NodeJSbackend from './components/yaml/Node-Backend';
import StarterPipeline from './components/yaml/Starter- Pipeline';
import Overview from './components/About/Overview';
import Benefit from './components/About/Benefit';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
        <h1>stg-cli</h1>
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/overview" element={<Overview/>} />
            <Route path="/benefit" element={<Benefit/>} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/Starter-pipeline" element={<StarterPipeline />} />
            <Route path="/build-react-app" element={<BuildReactApp />} />
            <Route path="/build-next-app" element={<BuildNextApp />} />
            <Route path="/build-npm-Publish" element={<NpmPublish/>} />
            <Route path="/Nodejs-Backend" element={<NodeJSbackend/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
