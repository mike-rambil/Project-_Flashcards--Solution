import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumb({ linkName = '', link = '', pageName = 'Default Value' }) {
  return (
    <nav>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-secondary'>
          <Link className='m-1' to='/'>
            <i className='bi bi-house m-1'>-</i>Home
          </Link>
        </li>

        {link !== '' ? (
          <li className='breadcrumb-item text-secondary'>
            <p className='m-1 text-info'>-</p>
            <Link to={link}>{linkName}</Link>
          </li>
        ) : (
          ''
        )}

        <li className='breadcrumb-item active'>
          -<p className='m-1 text-info'>{pageName}</p>
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;
