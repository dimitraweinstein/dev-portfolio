import React from 'react';

const TechStackListTwo = () => (
  <>
    <ul>
      <ul>
        <li>
          <p
            className="list-subtitle"
            id="tools-titles">Tools:
          </p>
        </li>
          <ul id="tools">
              <li> Heroku </li>
              <li> Git </li>
              <li> GitHub </li>
              <li> Netlify </li>
              <li> Postman </li>
          </ul>
        <li>
          <p
            className="list-subtitle"
            id="tools-titles"
          >
            Dev Practices:</p>
        </li>
          <ul id="dev-practices">
              <li>TDD</li>
          </ul>
      </ul>
    </ul> 
  </>
);

export default TechStackListTwo;
