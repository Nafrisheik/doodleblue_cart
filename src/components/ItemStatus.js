import React from 'react';

const ItemStatus = ({filterItems }) => {
  return (
    <div className="btn-container">      
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems("LOANED ITEMS")}
          >
            LOANED ITEMS
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems("AVAILABLE ITEMS")}
          >
              AVAILABLE ITEMS
          </button>
       
    </div>
  );
};

export default ItemStatus;