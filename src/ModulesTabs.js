import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Logos from './Logos';
import './ModulesTabs.css';

const ModulesTabs = () => {
  return (
    <div className="container">
      <Tabs isFitted variant="enclosed" className="tabs">
        <TabList className="tab-list">
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

export default ModulesTabs;
