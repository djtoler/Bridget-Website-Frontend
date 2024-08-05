import React from 'react';
import { HStack, Image, Link, Box, Text } from '@chakra-ui/react';
import aam1 from './chars/aam1.png';
import aam10 from './chars/aam10.png';
import aam11 from './chars/aam11.png';
import aam12 from './chars/aam12.png';
import aam13 from './chars/aam13.png';
import aam14 from './chars/aam14.png';
import aam2 from './chars/aam2.png';
import aam3 from './chars/aam3.png';
import aam4 from './chars/aam4.png';
import aam5 from './chars/aam5.png';
import aam6 from './chars/aam6.png';
import aam7 from './chars/aam7.png';
import aww1 from './chars/aaw1.png';
import aww10 from './chars/aaw10.png';
import aww11 from './chars/aaw11.png';
import aww12 from './chars/aaw12.png';
import aww2 from './chars/aaw2.png';
import aww3 from './chars/aaw3.png';
import aww4 from './chars/aaw4.png';
import aww5 from './chars/aaw5.png';
import aww6 from './chars/aaw6.png';
import aww7 from './chars/aaw7.png';
import aww8 from './chars/aaw8.png';
import aww9 from './chars/aaw9.png';
import aww13 from './chars/aaw13.png';
import './CharacterImages.css'; 

const character_images = {
  Male: [
    { src: aam1, alt: 'Character AAM1', href: '#aam1' },
    { src: aam2, alt: 'Character AAM2', href: '#aam2' },
    { src: aam3, alt: 'Character AAM3', href: '#aam3' },
    { src: aam4, alt: 'Character AAM4', href: '#aam4' },
    { src: aam5, alt: 'Character AAM5', href: '#aam5' },
    { src: aam6, alt: 'Character AAM6', href: '#aam6' },
    { src: aam7, alt: 'Character AAM7', href: '#aam7' },
    { src: aam10, alt: 'Character AAM10', href: '#aam10' },
    { src: aam11, alt: 'Character AAM11', href: '#aam11' },
    { src: aam12, alt: 'Character AAM12', href: '#aam12' },
    { src: aam13, alt: 'Character AAM13', href: '#aam13' },
    { src: aam14, alt: 'Character AAM14', href: '#aam14' },
  ],
  Female: [
    { src: aww6, alt: 'Character AAW6', href: '#aaw6' },
    { src: aww7, alt: 'Character AAW7', href: '#aaw7' },
    { src: aww2, alt: 'Character AAW2', href: '#aaw2' },
    { src: aww8, alt: 'Character AAW8', href: '#aaw8' },
    { src: aww1, alt: 'Character AAW1', href: '#aaw1' },
    { src: aww3, alt: 'Character AAW3', href: '#aaw3' },
    { src: aww10, alt: 'Character AAW10', href: '#aaw10' },
    { src: aww13, alt: 'Character AAW13', href: '#aaw13' },
    { src: aww4, alt: 'Character AAW4', href: '#aaw4' },
    { src: aww5, alt: 'Character AAW5', href: '#aaw5' },
    { src: aww9, alt: 'Character AAW9', href: '#aaw9' },
    { src: aww11, alt: 'Character AAW11', href: '#aaw11' },
  ],
};

const CharacterImages = ({ category }) => {
  return (
    <HStack spacing={8} className="hstack-container-char">
      {character_images[category].map((character_image) => (
        <Box className="image-card-char" key={character_image.alt}>
          <Link href={character_image.href}>
            <Image src={character_image.src} alt={character_image.alt} />
          </Link>
          <Text className="image-label-char">{character_image.alt}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export default CharacterImages;




