import React from 'react'; 

const Business = ({ business}) => {
    const { image, name = "Pizza", address = "123 googoo street", city = "Wahoo!", state = " Googusville", 
        zipcode = "02992", category = "Pizza", rating = "4.9", 
        reviewCount = " 100000" }  = business;


return (
    <div className = "business"> 
        <img src = { image } alt = {name} />
        <h2> {name} </h2>
        <p>

            { address },
            { city } , { state } , { zipcode }

        </p>
            <p>

             Category:{category}

             </p>
             <p> Rating: { rating } , {reviewCount} reviews.</p>
    </div>
);
};

export default Business;