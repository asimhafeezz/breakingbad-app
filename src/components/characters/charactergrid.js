import React from 'react'
import CharacterItem from './characterItem'
import spinner from '../../img/spinner.gif'

const charactergrid = ({ items , isLoading }) => {
    return isLoading ? <h1 className="center"><img src={spinner} style={{height:'5rem'}} /></h1> : (
        <section className="cards">
            {
                items.map(item => <CharacterItem key={item.char_id} item={item} />)
            }
        </section>
    )
}

export default charactergrid
