import React from 'react';
import { tagsOptions } from './store';
import {TagsWrapper } from '../components/elements/Wrappers';
import { Tag, ActiveTag } from '../components/elements/Tags'

const TagsContainer = () => (
  <TagsWrapper>
    {
    tagsOptions.map(tag => (
        !tag.active ?
        <Tag key={tag.id}>
            {tag.name}
        </Tag> : <ActiveTag>
        {tag.name}
        </ActiveTag>
        ))
    }
  </TagsWrapper>
);

export default TagsContainer;