import React from 'react';
import "./Blogs.css"
const Blogs = () => {
  return (
    <div className='blogs'>
      <div>
        <h1>Q : What is context API?</h1>
        <p><strong>Ans :</strong>
          The Context API is a component structure provided by the React framework,which help us  to exchange  specific data across all levels of the application. The Context API is the alternative to "prop drilling" or passing props from grandparent to child to parent, and so on. Context API is a new feature of React that helps us to share state across the entire app.</p>
      </div>
      <div>
        <h1>Q : What is semantic tag?</h1>
        <p>
          <strong>Ans :</strong>
          A semantic element definitely describes its meaning in a human and machine-readable way. Semantic elements such as "form", "table", and "article" exactly describe the purpose of the element and the type of content that is inside those elements but non-semantic elements such as "div" and "span" tells nothing about its content. It is much easier to read and it has greater accessibility.
        </p>
      </div>
    </div>
  );
};

export default Blogs;