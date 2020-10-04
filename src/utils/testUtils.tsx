import React, { ReactElement } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../store";
import { Router } from "react-router-dom"
import { createMemoryHistory } from 'history'

export interface WrapperProps {
  children: ReactElement;
}

export const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({ children }: WrapperProps): ReactElement => {
    const history=createMemoryHistory()
    return (
      <Provider store={store}>
        <Router history={history}>
            {children}
        </Router>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper as React.ComponentType, ...renderOptions });
};

export * from "@testing-library/react";
