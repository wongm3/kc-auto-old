import React from 'react';

const Sidebar = () => (
  <nav id="sidebar">
    <ul className="nav navbar-nav">
      <li className="active"><a href="/"><i className="fa fa-fw fa-dashboard" /> Dashboard</a></li>
      <li><a href="/"><i className="fa fa-fw fa-search" /> Find Invoices</a></li>
      <li><a href="/"><i className="fa fa-fw fa-plus" /> Create Invoice</a></li>
    </ul>
  </nav>
);

export default Sidebar;
