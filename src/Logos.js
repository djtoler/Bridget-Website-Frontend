import React from 'react';
import { HStack, Image, Link, Box, Text } from '@chakra-ui/react';
import bkube3 from './modlogos/bkube3.png';
import bdocker from './modlogos/bdocker.png';
import bgithub from './modlogos/bgithub.png';
import bjenkins from './modlogos/bjenkins.png';
import bconcurrency from './modlogos/bconcurrency.png';
import blbalancer from './modlogos/blbalancer.png';
import bcaching from './modlogos/bcaching.png';
import bfault from './modlogos/bfault.png';
import './Logos.css'; // Import the new CSS file

const logos = {
  Technologies: [
    { src: bkube3, alt: 'Kubernetes', href: '#kubernetes' },
    { src: bdocker, alt: 'Docker', href: '#docker' },
    { src: bgithub, alt: 'GitHub', href: '#github' },
    { src: bjenkins, alt: 'Jenkins', href: '#jenkins' },
  ],
  Concepts: [
    { src: bconcurrency, alt: 'Concurrency', href: '#concurrency' },
    { src: bcaching, alt: 'Caching', href: '#caching' },
    { src: bfault, alt: 'Fault Tolerance', href: '#fault' },
    { src: blbalancer, alt: 'Load Balancing', href: '#load-balancing' },
  ],
};

const Logos = ({ category }) => {
  return (
    <HStack spacing={8} className="hstack-container">
      {logos[category].map((logo) => (
        <Box className="image-card" key={logo.alt}>
          <Link href={logo.href}>
            <Image src={logo.src} alt={logo.alt} />
          </Link>
          <Text className="image-label">{logo.alt}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default Logos;



