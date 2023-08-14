import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as styles from './styles';
import Dog from '../Dog';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import { testConstants } from '../../utils/constants';

function SearchComponent() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [sortedResults, setSortedResults] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('name');
  const [isSortAsc, setIsSortAsc] = useState(true);
  const sortOptions = [
    { name: 'Name', value: 'name' },
    { name: 'Height', value: 'height' },
    { name: 'Lifespan', value: 'lifespan' },
  ];
  const { breeds } = useSelector(state => state.breedsReducer);
  let timer;

  useEffect(() => {
    filterResults();
  }, [searchInput]);

  useEffect(() => {
    sortResults();
  }, [selectedSortOption, results, isSortAsc]);

  const debounceInput = (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchInput(value);
    }, 1000);
  }

  const filterResults = () => {
    if(searchInput === '') {
      setResults([]);
      setSortedResults([]);
      return;
    }
    const results = breeds.filter(t=> t.name.toString().toLowerCase().includes(searchInput.toLowerCase()));
    setResults(results);
  }

  const sortResults = () => {
    let sorted = [...results];
    // eslint-disable-next-line default-case
    switch(selectedSortOption){
      case sortOptions[0].value:
        sortArray(compareNames, sorted);
        break;
      case sortOptions[1].value:
        sortArray(compareHeights, sorted);
        break;
      case sortOptions[2].value:
        sortArray(compareLifespan, sorted);
          break;
    }
    setSortedResults(sorted);
  }

  const sortArray = (comparator, arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (comparator(arr[j], arr[j + 1])) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
  }

  const compareNames = (a,b) => {
    return isSortAsc ? a.name > b.name : b.name > a.name;
  }

  const compareHeights = (a, b) => {
    let height1 = parseInt(a.height?.metric.substring(a.height?.metric.length - 2));
    let height2 = parseInt(b.height?.metric.substring(b.height?.metric.length - 2));
    return isSortAsc ? height1 > height2 : height2 > height1;
  }

  const compareLifespan = (a, b) => {
    let lifeSpan1 = parseInt(a.life_span?.replace(" years", "").substring(a.life_span?.replace(" years", "").length - 2));
    let lifeSpan2 = parseInt(b.life_span?.replace(" years", "").substring(b.life_span?.replace(" years", "").length - 2));
    return isSortAsc ? lifeSpan1 > lifeSpan2 : lifeSpan2 > lifeSpan1;
  }

  return (
    <styles.Container data-testid={testConstants.SearchContainer}>
      <styles.SearchbarContainer>
        <styles.SearchInput data-testid={testConstants.SearchInput} type='text' placeholder='Enter a breed to search' onChange={(e) => debounceInput(e.target.value)}/>
        { results.length > 0 && (
          <styles.SortByContainer>
            <div>Sort By</div>
            <select value={selectedSortOption} onChange={(e) => setSelectedSortOption(e.target.value)} data-testid={testConstants.SortbySelect}>
              {
                sortOptions.map((sortOption) => (
                  <option value={sortOption.value} key={sortOption.value}>{sortOption.name}</option>
                ))
              }
            </select>
            {
              isSortAsc ? (
                <FaSortAmountDown onClick={() => setIsSortAsc(!isSortAsc)} data-testid={testConstants.AscButton}/>
              ) : (
                <FaSortAmountUp onClick={() => setIsSortAsc(!isSortAsc)} data-testid={testConstants.DescButton}/>
              )
            }
          </styles.SortByContainer>
        )}
        <styles.ResultContainer>
        { results.length > 0 ?
            sortedResults.map(result => {
              return (
                  <Dog key={result.id} dog={result}/>
              )
            }) : searchInput !== "" ? (
              <styles.NoResultsText data-testid={testConstants.NoResult}>No results</styles.NoResultsText>
            ) : <></>
        }
    </styles.ResultContainer>
      </styles.SearchbarContainer>
    </styles.Container>
  )
}

export default SearchComponent;