import { createContext,useState } from "react";
import {login,register,getme} from '../auth/services/auth.api'

export const AuthContext = createContext()

