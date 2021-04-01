import React, { useState } from 'react';
import List from './components/list';
import ItemStatus from './components/ItemStatus';
import items from './components/items';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [currentItems,setItems] =useState(items);
  const [listItems, setListItems] = useState(currentItems);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categ) => {
      setListItems(currentItems.filter((item)=>{
        return item.category==categ;
      }));   

  };

  const setCategory=(categ,taskId)=>{
    let newCategory;
    if(categ=="AVAILABLE ITEMS") newCategory="LOANED ITEMS";
    else newCategory="AVAILABLE ITEMS"
    
    setItems(
      currentItems.map((item)=>{
          if(taskId==item.id){
              return{
                  ...item,                    
                  category:newCategory,
              };
          }
          return item;
      })
  )

  setTimeout(() => {
    setListItems(currentItems.filter((item)=>{
      return item.category==categ;
    })); 
    
  }, 1000);

  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>My Closet</h2>
          <div className="underline"></div>
        </div>
        <ItemStatus  filterItems={filterItems} />
        <List setCategory={setCategory} items={listItems} />
      </section>
    </main>
  );
}

export default App;

