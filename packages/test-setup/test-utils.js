import PropTypes from "prop-types";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";

// Context
import { BreakpointsProvider } from "@/context/breakpointsContext";
import { LoadingProvider } from "@/context/loadingContext";
import { PiperProvider } from "@/context/piperProvider";

const propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.shape({}),
};

const WithProviders = ({
  children,
}) => {
  return (
    <PiperProvider>
      <BreakpointsProvider>{children}</BreakpointsProvider>
    </PiperProvider>
  );
};

WithProviders.propTypes = propTypes;

const customRender = (ui, options) =>
  render(ui, {
    wrapper: WithProviders,
    ...options,
  });

const reduxRender = (
  ui,
  {
    preloadedState,
    loading: {
      isFakeSpinnerActive,
      isLoading,
      setIsFakeSpinnerActive,
      setIsLoading
    } = {},
    store = configureStore([thunk])(preloadedState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({
    children,
  }) => {
    return (
      <PiperProvider>
        <BreakpointsProvider>
          <LoadingProvider
            isFakeSpinnerActive={isFakeSpinnerActive}
            isLoading={isLoading}
            setIsFakeSpinnerActive={setIsFakeSpinnerActive}
            setIsLoading={setIsLoading}
          >
            <Provider store={store}>{children}</Provider>
          </LoadingProvider>
        </BreakpointsProvider>
      </PiperProvider>
    );
  };

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

// re-export everythingD
export * from "@testing-library/react";

// override render method
export {
  customRender as render,
  reduxRender
};
