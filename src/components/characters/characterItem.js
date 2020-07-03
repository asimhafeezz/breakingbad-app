import React from 'react'

const characterItem = ({ item }) => {
    return (
        <div  style={{ height: '20rem', width: '15rem', border: '2px solid white', padding: '1rem', borderRadius: '.5rem', justifyContent:'center'}}>
            <section className="center"><img src={item.img} style={{height:'13rem' , width:'13rem' , borderRadius: '.5rem' , marginBottom:'1rem'}}  /></section>
            <p><strong style={{paddingRight:'.5rem'}}>Name:</strong>{item.name}</p>
            <p><strong style={{paddingRight:'.5rem'}}>Nick Name:</strong>{item.nickname}</p>
            <p><strong style={{paddingRight:'.5rem'}}>Status:</strong>{item.status}</p>
        </div>
    )
}

export default characterItem
