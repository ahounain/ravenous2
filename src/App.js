import  React, { useState } from'react';
import './App.css';
import Business from './Business';

function App() {
  const [business, setBusiness] = useState(
    [ {
      img: "https://images.pexels.com/photos/3660425/pexels-photo-3660425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Burger King",
      address: "123 googoo street",
      city: "Wahoo!", 
      state: " Googusville", 
      zipcode: "02992", 
      category: "Pizza", 
      rating: "4.9", 
      reviewCount: " 100000",
    }
    ]
  );
  return (
    <div className="App">
      {business.map((business) => {
        <Business 
        img = {business.img}
        name = {business.name}
        address = {business.address}
        city = {business.city}
        state = {business.state}
        zipcode = {business.zipcode}
        category = {business.category}
        rating = {business.rating}
        reviewCount = {business.reviewCount}
        />;
      })}
    </div>
  );
}

export default App;
