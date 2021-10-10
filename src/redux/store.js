import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    userReducer,
  });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: ['bookmarks']
};



const rootReducer = persistReducer(persistConfig, reducer);

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
