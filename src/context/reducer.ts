
import { placeInfo,reviews,detailInfo,news } from "../assets/data";


export type PlaceInfoType = typeof placeInfo;
export type ReviewsType = typeof reviews;
export type DetailInfoType = typeof detailInfo;
export type NewsType = typeof news;

export type InitialStateType =  typeof initialState;
  


export const initialState = {
   placeInfo,
    reviews,
    detailInfo,
    news,
    handleDetail: null as null | ((arg:number)=>void)
}