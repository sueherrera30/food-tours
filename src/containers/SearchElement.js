import React from 'react';
import Input from '../components/elements/Input';
import { SearchWrapper } from '../components/elements/Wrappers';
import { SearchButton, Icon } from '../components/elements/SearchButton';

const SearchElement = () => (
  <SearchWrapper>
    <Input />
    <SearchButton>
     <Icon />
    </SearchButton>
  </SearchWrapper>
);

export default SearchElement;
