import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "./authContext"

interface PrivateRouteProps {
  element: React.ReactNode
  path: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path, ...rest }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Route {...rest} path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute
