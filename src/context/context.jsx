import React, { Component } from 'react';
import { placeInfo, reviews, news, detailInfo } from '../assets/data';

const InfoContext = React.createContext();

export default class InfoProvider extends Component {
  state = {
    placeInfo,
    reviews,
    news,
    detailInfo,
  };

  handleDetail = (id) => {
    const item = this.state.placeInfo.find((item) => item.id === id);
    this.setState(() => {
      return {
        detailInfo: item,
      };
    });
  };
  render() {
    return (
      <InfoContext.Provider
        value={{
          placeInfo: this.state.placeInfo,
          reviews: this.state.reviews,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          handleDetail: this.handleDetail,
        }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
