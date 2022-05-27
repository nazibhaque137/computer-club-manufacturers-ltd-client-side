import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-primary text-center m-5'>Blogs</h1>

            <h5>Q: How will you improve the performance of a React Application?</h5>
            <p>A:</p>

            <h5>Q: What are the different ways to manage a state in a React application?</h5>
            <p>A:</p>

            <h5>Q: How does prototypical inheritance work?</h5>
            <p>A:</p>

            <h5>Q: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
            <p>A:</p>

            <h5>Q: You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h5>
            <p>A:</p>

            <h5>Q: What is a unit test? Why should write unit tests?</h5>
            <p>A:</p>

        </div>
    );
};

export default Blogs;