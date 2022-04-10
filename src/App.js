import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Media from 'react-media';

import authOperations from './redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import globalSelectors from 'redux/global/global-selectors';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';

//import Nav from './components/nav';
import Modal from 'components/modal';

//модалка, вставила сюда, чтобы было видно, берите потом так же вставляйте в свои компоненты, куда нужно
import ExitModalBtn from './components/exitModalBtn';
//это кнопка конкретно для выхода из приложения, ви в свои модалки вставляйте вместо нее свой компонент кнопки
import ExitModal from './components/exitModal';
//содержание самой формы в модалке, вместо этого компонента вставляйте свои компоненты.
import Loader from './components/loader/Loader';

import Header from './components/header/Header';
import Money from 'components/money/Money';

import Currency from './components/currency';
import HomeTab from './components/homeTab';
//import HomeText from './components/homeText';

const RegisterView = lazy(() => import('./pages/registrationPage'));
const LoginView = lazy(() => import('./pages/loginPage'));
const DashboardPage = lazy(() => import('./pages/dashboardPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);
  const isLoadingSpinner = useSelector(globalSelectors.isLoadingSpinner);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route element={<DashboardPage />}>
                  <Route index element={<Navigate to="/home" />} />
                  {/* есть баланс - ? <HomeTab />:<HomeText /> */}
                  <Route path="home" element={<HomeTab />} />

                  <Route
                    path="diagram"
                    element={
                      {
                        /*<DiagramTab />*/
                      }
                    }
                  />
                  <Route
                    path="currency"
                    element={
                      <Media query={{ maxWidth: 767 }}>
                        {matches =>
                          matches ? <Currency /> : <Navigate to="/home" />
                        }
                      </Media>
                    }
                  />
                </Route>
              </Route>
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<LoginView />} />
            </Routes>
          </Suspense>
        </>
      )}
      <Modal openModalButton={ExitModalBtn} content={ExitModal} />
      <ToastContainer autoClose={3000} />
      {isLoadingSpinner && <Loader />}
    </>
  );
}
