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

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={AppLayout}>
        {/* Marketing Pages */}
        <Route path="/" page={HomePage} name="home" prerender />
        <Route path="/explore" page={ExplorePage} name="explore" prerender />

        {/* Public Profile and Pack Pages */}
        <Route path="/@{username}" page={UserProfilePage} name="userProfile" />
        <Route path="/@{username}/pack/{slug}" page={PackPage} name="pack" />

        {/* Public Auth Pages */}
        <Route path="/log-in" page={LogInPage} name="logIn" prerender />
        <Route path="/sign-up" page={SignUpPage} name="signUp" prerender />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" prerender />

        {/* Dashboard Pages*/}
        <Set private unauthenticated="home">
          <Route path="/me/pack/edit/{id:Int}" page={EditPackPage} name="editPack" />
          <Route path="/me/pack/new" page={NewPackPage} name="newPack" />

          <Route path="/me/reset-password" page={ResetPasswordPage} name="resetPassword" />
          <Route path="/me/complete-sign-up" page={CompleteSignUpPage} name="completeSignUp" />
        </Set>
      </Set>

      {/* System Pages */}
      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
