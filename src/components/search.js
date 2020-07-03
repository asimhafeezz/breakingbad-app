import React , {useState, useEffect} from 'react'

const Search = ({setQuery}) => {

    const [value, setValue] = useState('')

    let onchange = q => {
        setValue(q)
        setQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" placeholder="Search Characters" autoFocus value={value} onChange={(e) => onchange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search
