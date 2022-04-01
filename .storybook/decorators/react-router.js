import React, { useEffect } from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { action } from "@storybook/addon-actions";

const HistorySubscriber = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen((location, historyAction) => {
      action(historyAction ? historyAction : location.action)(
        location.pathname
      );
    });
    return () => {
      unlisten();
    };
  }, []);

  return children;
};

const StoryRouter = ({ children, ...routerProps }) => {
  return (
    <MemoryRouter {...routerProps}>
      <Route
        render={({ history }) => (
          <HistorySubscriber history={history}>{children}</HistorySubscriber>
        )}
      />
    </MemoryRouter>
  );
};

export const reactRouterDecorator = (story) => (
  <StoryRouter initialEntries={["/"]}>{story()}</StoryRouter>
);

export default reactRouterDecorator;
