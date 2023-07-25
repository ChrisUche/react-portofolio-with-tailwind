import React from 'react';
import { motion as m } from 'framer-motion';

export function PortfolioIntro() {
  return (
    <m.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.75, duration: 0.5, ease: 'easeOut' }}
      className="px-16"
    >
      <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Since the beginning of my journey as a freelance designer and developer, I&apos;ve done remote work for{' '}
        <span className="text-teal-500">agencies</span> consulted for{' '}
        <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products
        for both business and consumer use.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design, programming, and teaching.
      </p>
    </m.div>
  );
}
