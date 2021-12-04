import { useEffect, Suspense, lazy } from "react";
import {Switch} from "react-router-dom";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "./redux/auth";

import PrivateReactRoute from "./routs/PrivateReactRoute";
import PublicReactRoute from "./routs/PublicReactRoute";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
const HomePageView = lazy(() => import("./views/HomePageView"));
const LoginPageView = lazy(() => import("./views/LoginPageView"));
const RegisterPageView = lazy(() => import("./views/RegisterPageView"));
const ContactsPageView = lazy(() => import("./views/ContactsPageView"));
const PageNotFindView = lazy(() => import("./views/PageNotFindView"));

function App() {
  const dispatch = useDispatch();
  const isFenchingCurrentUser = useSelector(authSelectors.getFetchingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFenchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense
            fallback={
              <Loader type="ThreeDots" color="#ffffff" height={35} width={35} />
            }
          >
            <PublicReactRoute exact path="/">
              <HomePageView />
            </PublicReactRoute>
            <PublicReactRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginPageView />
            </PublicReactRoute>
            <PublicReactRoute exact path="/register" restricted>
              <RegisterPageView />
            </PublicReactRoute>
            <PrivateReactRoute path="/contacts" redirectTo="/login">
              <ContactsPageView />
            </PrivateReactRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
