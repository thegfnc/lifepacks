// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import AppLayout from 'src/layouts/AppLayout/AppLayout'

import { useAuth } from './auth'
import useGA4Setup from './hooks/useGA4Setup'
import { useSentrySetUser } from './lib/sentry'

const Routes = () => {
  useGA4Setup()
  useSentrySetUser()

  return (
    <Router useAuth={useAuth}>
      <Set wrap={AppLayout}>
        {/* Marketing Pages */}
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />

        {/* Public Profile and Pack Pages */}
        <Route path="/u/{username}" page={UserProfilePage} name="userProfile" />
        <Route path="/u/{username}/pack/{slug}" page={PackPage} name="pack" />

        {/* Public Auth Pages */}
        <Route path="/log-in" page={LogInPage} name="logIn" />
        <Route path="/sign-up" page={SignUpPage} name="signUp" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />

        {/* Help Pages */}
        <Route path="/help/affiliate-links-101" page={HelpAffiliateLinks101Page} name="affiliateLinks101" />
        <Route path="/help/faq" page={HelpFaqPage} name="faq" />

        {/* Legal Pages */}
        <Route path="/privacy-policy" page={LegalPrivacyPolicyPage} name="privacyPolicy" />
        <Route path="/terms-of-service" page={LegalTermsOfServicePage} name="termsOfService" />

        {/* Private Dashboard Pages*/}
        <PrivateSet unauthenticated="home">
          <Route path="/me/pack/edit/{id:Int}" page={EditPackPage} name="editPack" />
          <Route path="/me/pack/new" page={NewPackPage} name="newPack" />

          <Route path="/me/reset-password" page={ResetPasswordPage} name="resetPassword" />
          <Route path="/me/complete-sign-up" page={CompleteSignUpPage} name="completeSignUp" />
        </PrivateSet>
      </Set>

      {/* System Pages */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
