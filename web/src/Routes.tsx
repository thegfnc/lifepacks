// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AppLayout from 'src/layouts/AppLayout/AppLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AppLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/log-in" page={LogInPage} name="logIn" />
        <Route path="/sign-up" page={SignUpPage} name="signUp" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Set private unauthenticated="home">
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
          <Route path="/complete-sign-up" page={CompleteSignUpPage} name="completeSignUp" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
