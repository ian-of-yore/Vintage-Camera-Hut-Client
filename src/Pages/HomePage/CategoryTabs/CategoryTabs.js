import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabsProducts from './CategoryTabsProducts';

const CategoryTabs = () => {
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h1 className='text-4xl font-serif text-black text-left mb-4'>Suit your taste from available categories</h1>
            <div className='text-black'>
                <Tabs>
                    <TabList className='text-xl font-serif'>
                        <Tab>Point & Shoot</Tab>
                        <Tab>Mirrorless</Tab>
                        <Tab>DSLR</Tab>
                        <Tab>Action</Tab>
                        <Tab>Medium Format</Tab>
                        <Tab>Film</Tab>
                    </TabList>
                    <hr />
                    <TabPanel>
                        <CategoryTabsProducts category={'Point & Shoot'}></CategoryTabsProducts>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTabsProducts category={'Mirrorless'}></CategoryTabsProducts>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTabsProducts category={'DSLR'}></CategoryTabsProducts>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTabsProducts category={'Action'}></CategoryTabsProducts>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTabsProducts category={'Medium Format'}></CategoryTabsProducts>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTabsProducts category={'Film'}></CategoryTabsProducts>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CategoryTabs;