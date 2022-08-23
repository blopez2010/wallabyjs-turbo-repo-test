import "@testing-library/jest-dom";
import "@/__mocks__/ResizeObserver";

import { configure } from "@testing-library/react";
configure({ testIdAttribute: "data-qa" });

// Manually mock next/dynamic as the next.js (7.0.2) babel plugin will compile to Webpack
// lazy imports (require.resolveWeak) who're conflicting with the Node module system.
jest.mock("next/dynamic", () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = "LoadableComponent";
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"), // import and retain the original functionalities
  useRouter: jest.fn().mockReturnValue({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn()
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null)
  }),
}));
