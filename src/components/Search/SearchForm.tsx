import { useState, FormEvent } from 'react';
import * as searchApi from '../../api/search';
import { SearchResult } from '../../api/search';

import Result from './Result';

const SearchForm = () => {
  const [ query, setQuery ] = useState<string>('');
  const [ results, setResults ] = useState<SearchResult[]>([]);

  const handleInput = (value: string) => {
    setQuery(value);

    searchApi.getResults(value)
      .then(data => {
        setResults(data);
      });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setQuery('');
  }
  
  return (
    <>
      <form 
        className="text-sm text-white flex justify-center"
        onSubmit={e => handleSubmit(e)}
      >
        <input 
          type="text" 
          className="w-96 max-w-full border rounded-full py-2 px-3 bg-gray-900 text-white focus:outline-none focus:shadow-outline"
          onChange={e => handleInput(e.target.value)}
          value={query}
          placeholder="Search..."
        />
      </form>

      <div id="results" className="mt-10 md:px-10 flex flex-col gap-y-4">
        { [1,2,3,4,5].map(result => (
          <Result src="" />
        ))}

        { results.map(result => (
          <Result src={result.src} coverimg={result.coverimg} />
        ))}
      </div>
    </>
  )
}

export default SearchForm;