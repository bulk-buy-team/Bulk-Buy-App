import React from 'react';
import icon from '../images/search_24dp_D0430E_FILL0_wght400_GRAD0_opsz24.png';

function Search() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '20px',
        padding: '5px 10px',
        height: '80px',
        width: '800px',
        marginLeft: '75px',
        marginTop: '0px',
        backgroundColor: '#f1f1f1',
        position: 'relative', 
      }}
    >
      <img
        src={icon}
        alt="Search"
        style={{
          position: 'absolute',
          left: '10px',
          width: '40px',
          height: '40px',
        }}
      />
      <input
        type="text"
        placeholder="Search"
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '2rem',
          background: 'transparent',
          flex: 1,
          paddingLeft: '50px',
        }}
      />
      <button
        style={{
          backgroundColor: '#d0430e',
          height: '50px',
          width: '80px',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '9px',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;