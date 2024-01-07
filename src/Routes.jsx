import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DasboardSetting = React.lazy(() => import("pages/DasboardSetting"));
const DasboardBrowsingHistory = React.lazy(
  () => import("pages/DasboardBrowsingHistory"),
);
const DasboardCardsAddress = React.lazy(
  () => import("pages/DasboardCardsAddress"),
);
const DasboardOrderDetail = React.lazy(
  () => import("pages/DasboardOrderDetail"),
);
const DasboardOrderHistory = React.lazy(
  () => import("pages/DasboardOrderHistory"),
);
const Dasboard = React.lazy(() => import("pages/Dasboard"));
const BlogDetail = React.lazy(() => import("pages/BlogDetail"));
const BlogList = React.lazy(() => import("pages/BlogList"));
const CustomerSupport = React.lazy(() => import("pages/CustomerSupport"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const EmailVerification = React.lazy(() => import("pages/EmailVerification"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ResetPassword = React.lazy(() => import("pages/ResetPassword"));
const ForgetPassword = React.lazy(() => import("pages/ForgetPassword"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const CheckoutSuccess = React.lazy(() => import("pages/CheckoutSuccess"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const ShoppingCard = React.lazy(() => import("pages/ShoppingCard"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const Compare = React.lazy(() => import("pages/Compare"));
const TrackOrderDetails = React.lazy(() => import("pages/TrackOrderDetails"));
const TrackOrder = React.lazy(() => import("pages/TrackOrder"));
const ProductDetail = React.lazy(() => import("pages/ProductDetail"));
const ShopPage = React.lazy(() => import("pages/ShopPage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/trackorder" element={<TrackOrder />} />
          <Route path="/trackorderdetails" element={<TrackOrderDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shoppingcard" element={<ShoppingCard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/emailverification" element={<EmailVerification />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/customersupport" element={<CustomerSupport />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/dasboard" element={<Dasboard />} />
          <Route
            path="/dasboardorderhistory"
            element={<DasboardOrderHistory />}
          />
          <Route
            path="/dasboardorderdetail"
            element={<DasboardOrderDetail />}
          />
          <Route
            path="/dasboardcardsaddress"
            element={<DasboardCardsAddress />}
          />
          <Route
            path="/dasboardbrowsinghistory"
            element={<DasboardBrowsingHistory />}
          />
          <Route path="/dasboardsetting" element={<DasboardSetting />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
