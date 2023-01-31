import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabsProducts from './CategoryTabsProducts';

const CategoryTabs = () => {
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h1 className='text-3xl md:text-4xl font-serif text-black text-center sm:text-left mb-7 pl-2'>Suit your taste from available categories</h1>
            <div className='text-black text-left'>
                <Tabs>
                    <TabList className='sm:text-lg md:text-xl lg:text-2xl font-serif'>
                        <Tab>Point & Shoot</Tab>
                        <Tab>Mirrorless</Tab>
                        <Tab>DSLR</Tab>
                        <Tab>Action</Tab>
                        <Tab>Medium-Format</Tab>
                        <Tab>Film</Tab>
                    </TabList>
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