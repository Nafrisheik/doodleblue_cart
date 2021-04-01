import React from 'react'

function List({items,setCategory}) {

   
    return (
        <div className='section-center'>
          {items.map((menuItem) => {
            const { id, title, img, desc, price,category } = menuItem;
            return (
              <article onClick={() => setCategory(category,id)} category={category} key={id} className='menu-item'>
                <img src={img} alt={title} className='photo' />
                <div className='item-info'>
                  <header>
                    <h4>{title}</h4>
                    <h4 className='price'>${price}</h4>
                  </header>
                  <p className='item-text'>{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      );
}

export default List
