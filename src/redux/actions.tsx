import { IS_ADMIN, ADD_ARTICLE } from './const';

export const isAdmin = (payload: any) => ({ type: IS_ADMIN, payload });
export const addArticle = (payload: any) => ({ type: ADD_ARTICLE, payload });