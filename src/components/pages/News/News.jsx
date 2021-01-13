import React from 'react';
import { InfoConsumer } from '../../../context';
import NewsCard from './NewsCard';

const News = () => {
  return (
    <InfoConsumer>
      {(value) =>
        value.news.map((item) => <NewsCard key={item.id} {...item} />)
      }
    </InfoConsumer>
  );
};

export default News;
