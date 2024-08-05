import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CharacterImages from './CharacterImages';
import './CharacterTabs.css';

const CharacterTabs = () => {
  return (
    <div className="container-char">
      <Tabs isFitted variant="enclosed" className="tabs-char">
        <TabList className="tab-list-char">
          <Tab className="tab-char">Technologies</Tab>
          <Tab className="tab-char">Concepts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CharacterImages category="Technologies" />
          </TabPanel>
          <TabPanel>
            <CharacterImages category="Concepts" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default CharacterTabs;
