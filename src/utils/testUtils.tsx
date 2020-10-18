import React, { ReactElement } from "react"
import {
  render as rtlRender,
  RenderOptions
} from "@testing-library/react"
import { Provider } from "react-redux"
import store, { rrfProps } from "../store"
import { Router } from "react-router-dom"
import history from "./history"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

export interface WrapperProps {
  children: ReactElement;
}

export const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({ children }: WrapperProps): ReactElement => {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps} >
          <Router history={history}>
            {children}
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper as React.ComponentType, ...renderOptions })
}

export * from "@testing-library/react"