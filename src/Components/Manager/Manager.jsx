import React from 'react';
import Sidebar from './SideBar';
import { Route, Routes } from 'react-router-dom';

import Room from './navpages/Room';
import Tables from './navpages/Tables';

const Manager = () => {
  return (
    <div className="manager-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="room" element={<Room />} />
          <Route path="/" element={<Tables />} />
        </Routes>
      </div>
    </div>
  );
};

export default Manager;
