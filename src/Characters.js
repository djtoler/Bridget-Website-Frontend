import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CharacterImages from './CharacterImages';
import GlobalTitleChar from './GlobalTitleChar'; 
import './CharacterTabs.css';  
import './GlobalTitleChar.css';  


const Characters = () => {
  return (
    <div className="container-char">
      <GlobalTitleChar className="overlay-image-modules-char" />
      <Tabs isFitted variant="enclosed" className="tabs-char">
        <TabList className="tab-list-char" mb="1em">
          <Tab className="tab-char">Helpers</Tab>
          <Tab className="tab-char">Premium Helpers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CharacterImages category="Male" />
          </TabPanel>
          <TabPanel>
            <CharacterImages category="Female" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Characters;
