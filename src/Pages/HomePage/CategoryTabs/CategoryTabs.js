import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabsProducts from './CategoryTabsProducts';

const CategoryTabs = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='my-20 w-11/12 mx-auto'>
                {/* <hr className="w-full h-px mb-4 border-2 border-indigo-900" /> */}
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-full h-px my-8 border-2 border-indigo-900" />
                    <span className="absolute px-3 text-3xl sm:text-4xl font-serif text-black -translate-x-1/2 bg-white left-1/2">Shop by Categories</span>
                </div>
                {/* <h1 className='text-xl md:text-2xl font-serif text-black text-left w-11/12 mx-auto mb-4'>Check out our extensive range of used cameras & accessories from the biggest brands</h1> */}
                <p className='text-black text-justify font-sans mb-7 mt-2 px-2'>Check out our extensive range of used cameras & accessories from the biggest brands. Our quality assurance processes are well established to ensure that when you buy second-hand camera equipment from us the experience is completely stress-free. Buy used cameras from our huge range today and discover your perfect DSLR, mirrorless, compact and even
                    used film cameras for sale, complete with a comprehensive warranty. Browse for second-hand camera
                    lenses to expand your lens repertoire, with every conceivable model from the world's best-known brands.
                    We have options for every interchangeable lens system, compatible with DSLR, mirrorless and medium
                    format cameras.</p>
                <div className='text-black text-left'>
                    <Tabs>
                        <TabList className='sm:text-lg md:text-xl lg:text-2xl font-serif mb-2 pl-2'>
                            <Tab>Film</Tab>
                            <Tab>Point & Shoot</Tab>
                            <Tab>Mirrorless</Tab>
                            <Tab>DSLR</Tab>
                            <Tab>Action</Tab>
                            <Tab>Medium-Format</Tab>
                        </TabList>
                        <TabPanel>
                            <CategoryTabsProducts category={'Film'}></CategoryTabsProducts>
                        </TabPanel>
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
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default CategoryTabs;