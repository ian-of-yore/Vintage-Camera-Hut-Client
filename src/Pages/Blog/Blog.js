import React from 'react';

const Blog = () => {
    return (
        <div className='flex justify-center min-h-screen bg-secondary'>
            <div className='sm:w-2/3 md:w-1/2 mx-auto text-left mt-10'>
                <h3 className='my-5 text-3xl text-center font-semibold text-white'>Here are some of the Frequently Asked Questions (FAQ) about the MERN stack web development</h3>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-white text-xl font-medium">
                        01. What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p className='pl-5'>Ther are about seven ways to manage a state in an react application. Most prominent ones are discussed below
                            <ol>
                                <li><strong>01. URL: </strong> <span></span> URL can be used to store the id of a current item, or the item being viewed, this is the most common way to store data in the url.
                                    Other than that, it can also be used to filter parameters, use pagination offset and limit, it further extends to sorting data.</li>
                                <li>
                                    <strong>02. Web Storage: </strong> The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                                </li>
                                <li><strong>03. Local State</strong> There's another option of storing the data locally. It's usefull for a certain component, when it needs the state. One example of this is, implementing a toggle button.</li>
                                <li>
                                    <strong>04. Lifted State</strong> This is done by lifting the state up from a child component to its parent component. This is done, when the sibling components under a same parent needs to share data/state.
                                </li>
                                <li>
                                    <strong>05. Derived State</strong> Another viable option is to create a new state based on the available states. This reduces code repettion.
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-white text-xl font-medium">
                        02. How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p className='pl-5'>
                            Prototypical inheritance is a feature in JavaScript to add methods and properties in objects. It is used when a certain object need to inherit the methods and properties of another object.
                            The object from where the properties are inherited is called the prototype.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-white text-xl font-medium">
                        03. What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p className='pl-5'>
                            In computer science, unit test refers to testing a small chunk of code that can be logically isolated from the overall program.
                            As its definition suggests, unit testing is important to validate the functionality and compatibility of a single unit or logic.
                            This is important for debugging purpose and also logic building for the main program.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-white text-xl font-medium">
                        04. State some key differences between React, Angular and Vue?
                    </div>
                    <div className="collapse-content">
                        <p className='pl-5'>
                            All three of these are JavaScript frontend frameworks for web development. They provide subtle varying traits from each other and
                            are very popular at the moment among the web developer community. Among all these three React is the most used and popular one. React has a massive community and is maintained by
                            a group of extinguished developers. So it offers lot of community support and thus making it very easy for the beginners to start their journey.
                            Angular is more roboust than React. It delivers a complete package. So, the learing curve is a bit steep considering React. It is very popular among the
                            seasoned developers.
                            Though Vue has an overlap with React and Angular in terms of their functionality and their component based work flow, the extra thing that
                            Vue brings to the table is its customizability. Thus making it easier to learn than React or Angular. It also, makes the transition from Vue to these other
                            two frameworks comparitably easy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;