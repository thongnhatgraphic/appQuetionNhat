/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import { routes } from './routes';
import LayoutRouter from './LayoutRouter';
import theme from './style';

export default function App() {
  const renderRouter = array =>
    array.map(route => <LayoutRouter {...route} key={route.name} />);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>{renderRouter(routes)}</Switch>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
