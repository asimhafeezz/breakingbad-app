import React , {useState , useEffect} from 'react';
import Header from './components/header'
import CharacterGrid from './components/characters/charactergrid'
import SearchBar from './components/search'
import axios from 'axios'
import './App.css';
import search from './components/search';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    // console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <SearchBar setQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <p className="center" style={{marginTop:'5rem'}}>Thanks to Traversy Media</p>
    </div>
  );
}

export default App;
