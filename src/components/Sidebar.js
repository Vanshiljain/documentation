import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaFileAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './Sidebar.css'; // Import custom CSS

const Sidebar = () => {
  const [isYamlFileOpen, setIsYamlFileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleYamlFile = () => {
    setIsYamlFileOpen(!isYamlFileOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">DOCUMENTATION</div>
      <ul className="sidebar-menu">
        <li>
          <div onClick={toggleAbout} className="sidebar-item">
            <span className="yaml-config">About STG-CLI</span>
            {isAboutOpen ? <FaAngleUp className="sidebar-dropdown-icon" /> : <FaAngleDown className="sidebar-dropdown-icon" />}
          </div>
          {isAboutOpen && (
            <ul className="sub-menu">
              <li>
                <Link to="/introduction">Introduction</Link>
              </li>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/commands" className="sidebar-item">
                           Commands
                </Link>
              </li>
              <li>
                <Link to="/benefit">Benefits of stg-cli</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={toggleYamlFile} className="sidebar-item">
            <FaFileAlt className="iconsidebar-" />
            <span className="yaml-config">YAML File Configuration</span>
            {isYamlFileOpen ? <FaAngleUp className="sidebar-dropdown-icon" /> : <FaAngleDown className="sidebar-dropdown-icon" />}
          </div>
          {isYamlFileOpen && (
            <ul className="sub-menu">
              <li>
                <Link to="Starter-pipeline">Starter Pipeline</Link>
              </li>
              <li>
                <Link to="/build-react-app">Build React Application</Link>
              </li>
              <li>
                <Link to="/build-next-app">Build Next.js Application</Link>
              </li>
              <li>
                <Link to="/build-npm-Publish">Build Npm Publish Package</Link>
              </li>
              <li>
                <Link to="/Nodejs-Backend">Build NodeJSbackend</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
