import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Calendar from '../pages/calendar/Calendar';
import Settings from '../pages/settings/Settings';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default Router;
