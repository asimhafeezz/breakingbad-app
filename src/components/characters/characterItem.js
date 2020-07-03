import React from 'react'

const characterItem = ({ item }) => {
    return (
        <div  style={{ height: '18rem', width: '13rem', border: '2px solid white', padding: '1rem', borderRadius: '.5rem', justifyContent:'center'}}>
            <section className="center"><img src={item.img} style={{height:'11rem' , width:'11rem'}}  /></section>
            <p><strong style={{paddingRight:'.5rem'}}>Name:</strong>{item.name}</p>
            <p><strong style={{paddingRight:'.5rem'}}>Nick Name:</strong>{item.nickname}</p>
            <p><strong style={{paddingRight:'.5rem'}}>Status:</strong>{item.status}</p>
        </div>
    )
}

export default characterItem
