import React from 'react';
import SignInPage from '../SignInPage/index';
import TestPage from '../TestPage/index';
import NotFoundPage from '../NotFoundPage';

export const routes = [
  {
    path: '/',
    name: 'Đăng nhập',
    exact: true,
    component: match => <SignInPage match={match} />,
  },
  {
    path: '/page-test',
    name: 'Bài Kiểm Tra Trắc Nghiệm',
    exact: false,
    component: match => <TestPage match={match} />,
  },
  {
    name: 'Not Found',
    exact: false,
    component: () => <NotFoundPage />,
  },
];
