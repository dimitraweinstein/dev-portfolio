import React from 'react';

const TechStackListOne = () => (
  <>
    <ul>
      <p className="list-title">Tech Stack:</p>
      <ul>
          <li> <p className="list-subtitle">Languages:</p> </li>
              <ul>
          <li> JavaScript </li>
          <li> HTML/CSS </li>
              </ul>
          <li> <p className="list-subtitle">Frameworks/Libraries:</p> </li>
              <ul>
          <li> Reactjs </li>
          <li> Node </li>
          <li> Express </li>
              </ul>
          <li> <p className="list-subtitle">Databases:</p> </li>
              <ul>
                  <li> PostgreSQL </li>
              </ul>
          </ul>
      </ul>
    </>
);

export default TechStackListOne;
