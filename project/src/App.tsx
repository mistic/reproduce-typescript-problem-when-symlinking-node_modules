import React, { FC } from 'react';
import { BrowserRouter, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

export type NavProps = RouteComponentProps;

export const Nav = withRouter(({ history }: NavProps) => {
  return (
    <div
    />
  );
});

const App: FC = () => (
  <>
    <BrowserRouter>
      <Routes />
      <Nav />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
