import React, { useState } from 'react'
import { PortfolioBody } from '../components/homepage/PortfolioBody';
import { PortfolioIntro } from '../components/homepage/PortfolioIntro';

const Project = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);


  return (
    <>
          <PortfolioIntro />
          <PortfolioBody />
    </>
  );
};

export default Project;

