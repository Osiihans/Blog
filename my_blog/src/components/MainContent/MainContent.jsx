import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Bottombar from '../../layout/Bottombar';
import '../../layout/styles.css';
import Topbar from '../../layout/Topbar';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import SideContent from '../SideContent/SideContent';
import LatestPosts from '../Latest/LatestPosts';
import Topics from '../Topics/Topics';
import postsData from '../../../posts.json';  // Adjust the path to your JSON file
import About from '../About/About';

import Form from '../../Forms/Form';

const MainContent = () => {
  const location = useLocation();
  const { pathname } = location;

  const [travel, setTravel] = useState(postsData.travel || []);
  const [health, setHealth] = useState(postsData.health || []);
  const [creative, setCreative] = useState(postsData.creative || []);

  // Determine if it's a special page (like About or Contact)
  const isSpecialPage = pathname === '/about' || pathname === '/contact';

  return (
    <>
      <Topbar />
      
      {!isSpecialPage && (
        <>
          <Hero />
          <Topics travel={travel} health={health} creative={creative} />
          <LatestPosts travel={travel} health={health} creative={creative} />
          <SideContent />
          <Bottombar />
          
        </>
      )}

      {pathname === '/about' && <About />}
      {pathname === '/contact' && <Form />}
    </>
  );
}

export default MainContent;
