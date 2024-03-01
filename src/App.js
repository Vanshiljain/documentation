// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import Commands from './components/Commands';
import './App.css'; // Import custom CSS
import BuildReactApp from './components/BuildReactApp';
import BuildNextApp from './components/BuildNestJSApp';
import NpmPublish from './components/NpmPublish';
import NodeJSbackend from './components/Node-Backend';
import StarterPipeline from './components/Starter- Pipeline';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
        <h1>stg-cli</h1>
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
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
