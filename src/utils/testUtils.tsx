import React, { ReactElement, ReactNode } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { Router } from "react-router-dom";

export interface WrapperProps {
  children: ReactElement;
}

export const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({ children }: WrapperProps): ReactElement => {
    return (
      <Provider store={store}>
        {/* <Router history={history}> */}
            {children}
        {/* </Router> */}
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper as React.ComponentType, ...renderOptions });
};

export * from "@testing-library/react";
