import React, {useState, useContext, useEffect} from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function Auth() {
  return useContext(AuthContext)
}


export function AuthProvider({ children }) {
  return (
    <div>
      
    </div>
  )
}
