import { createContext, useState, useEffect } from 'react';
import { api } from '../utils/Api.jsx';

const CurrentUserContext = createContext();

export default CurrentUserContext;