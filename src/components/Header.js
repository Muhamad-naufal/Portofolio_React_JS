import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div class="container mx-auto">
        <div className='flex justify-between items-center'>
          <h1>
            Porto
            <span className='text-gradient'>Folio</span>
          </h1>
          <button className='btn btn-sm'>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
