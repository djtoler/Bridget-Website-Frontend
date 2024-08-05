import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Logos from './Logos';
import GlobalTitle from './GlobalTitle'; 
import './ModulesTabs.css';  // Make sure this is correctly imported

const Modules = () => {
  return (
    <div className="container">
      <GlobalTitle className="global-title" />
      <Tabs isFitted variant="enclosed" className="tabs">
        <TabList className="tab-list" mb="1em">
          <Tab className="tab">Technologies</Tab>
          <Tab className="tab">Concepts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Logos category="Technologies" />
          </TabPanel>
          <TabPanel>
            <Logos category="Concepts" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Modules;
