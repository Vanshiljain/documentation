// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaFileAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './Sidebar.css'; // Import custom CSS

const Sidebar = () => {
  const [isYamlFileOpen, setIsYamlFileOpen] = useState(false);

  const toggleYamlFile = () => {
    setIsYamlFileOpen(!isYamlFileOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
    
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/introduction">
            <FaHome className="sidebar-icon" />
            Introduction
          </Link>
        </li>
        <li>
          <Link to="/commands">
            <FaCog className="sidebar-icon" />
            Commands
          </Link>
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
