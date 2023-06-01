import React from 'react'
import product_card from './product_data';



const MainC = () => {
    console.log(product_card);
    const listItems = product_card.map((item)=>
    


    <div className="card" key={item.id}>
        <div className="card_img">
            <img src={item.thumb} />
         </div>
         <div className="card_header">
             <h2>{item.product_name}</h2>
             <p>{item.description}</p>
             <p>15-12-2021</p>
             <p className="price">{item.currency}<span>{item.price}</span></p>
            <div className="btn">View Details</div>
         </div>
         </div>
    
   
  
   
    
    );
    return(

        
            
       <div className="main_content">
           
           {listItems}
          
       </div> 

    
    
        
    )
   
}
export default MainC;