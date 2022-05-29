import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='my-5'>
            <h5 className='text-primary'>Q: How will you improve the performance of a React Application?</h5>
            <p>A: To get the most out of React, we have to ensure components only get the props they require.
                It will allow us to manage our CPU usage and avoid rendering superfluous features.
                The idea is to construct a functional component that will collect and redistribute all props to other components. </p>
            </div>

            <div className='my-5'>
                <h5 className='text-primary'>Q: What are the different ways to manage a state in a React application?</h5>
            <p>A: React employs an observable object as the state, which monitors changes to the state and assists the component in responding appropriately.
                If we alter the state of any component, such as the following, the webpage will not re-render because React State will not be able to detect the changes</p>
            </div>

            <div className='my-5'>
                <h5 className='text-primary'>Q: How does prototypical inheritance work?</h5>
                <p>A: Prototypal Inheritance is a javascript feature that allows you to add methods and properties to objects.
                    It's a method that allows one object to inherit the properties and methods of another.
                    We traditionally use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object. </p>
            </div>

                <div className='my-5'>

                <h5 className='text-primary'>Q: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
                <p>A: One should never alter the state directly. Because if we update it directly, invoking setState() thereafter may simply replace the update we did.</p>
            </div>

                        <div className='my-5'>

                <h5 className='text-primary'>Q: What is a unit test? Why should write unit tests?</h5>
                <p>A: Before any code is deployed, it is subjected to unit testing to ensure that it fulfills quality criteria. This promotes a dependable engineering environment that prioritizes quality. Unit testing saves time and money during the product development life cycle, and it helps developers design better, more efficient code.</p>
            </div>

        </div>
    );
};

export default Blogs;