import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import cartItems from './data';

const AppContext = createContext();
