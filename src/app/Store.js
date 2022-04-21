import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from '../features/articles/ArticlesSlice';

import { throttle } from 'lodash';
import { saveState, loadState } from '../features/localstorage/localStorage';

 const store = configureStore({
  reducer: {
    articles: articlesReducer
  },
  preloadedState: loadState()
})

store.subscribe(
  throttle( () => saveState(store.getState()), 1000)
);

export default store