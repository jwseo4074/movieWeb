import React from 'react';

function ListExample (){
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map( (price) => (<div>가격 : {price}원 </div>) )

    return(
        <div>
            <h1>List Example</h1>

            <label>가격 목록</label>
            {prices}
        </div>
    );
}

export default ListExample;