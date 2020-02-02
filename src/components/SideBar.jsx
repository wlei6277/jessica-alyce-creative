import React from 'react';
import './SideBar.scss';

export const SideBar = ({ anchors }) => (
  <section className="side-bar">
    <div className="name">
      <h2>Billy Leitch</h2>
      <span className="positon">JavaScript Developer</span>
    </div>
    <ul className="side-bar-items">
      {anchors.map(anchor => (
        <li className="side-bar-item" key={anchor}>
          <a>{anchor}</a>
          {/* TODO make sure I use Gatsby image component */}
        </li>
      ))}
    </ul>
  </section>
);
