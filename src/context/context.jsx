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
  render() {
    return (
      <InfoContext.Provider
        value={{
          placeInfo: this.state.placeInfo,
          reviews: this.state.reviews,
          maps: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          detailInfo: this.detailInfo,
          news: this.state.news,
          name: this.state.name,
          avatar: this.state.avatar,
          comment: this.state.comment,
        }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
