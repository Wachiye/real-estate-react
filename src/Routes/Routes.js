import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//import layouts
import PublicLayout, {PublicLayoutWithCarousel} from "../Layouts/PublicLayout";
import AdminLayout from '../Layouts/AdminLayout';

//import public and private route functions
import PublicRoute from "./PublicRoute";
// import PrivateRoute from './PrivateRoute';

//import pages
import IndexPage from "../pages/IndexPage.js"
import AboutPage from "../pages/AboutPage";
import PropertiesPage from "../pages/PropertiesPage";
import PropertyPage from "../pages/PropertyPage";
import CheckoutPage from "../pages/CheckoutPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import FAQSPage from "../pages/FAQSPage";

import DashboardPage from "../pages/DashboardPage";
import AdminPropertiesPage from "../pages/AdminPropertiesPage";
import AccountPage from "../pages/AccountPage";
import MessagesPage from "../pages/MessagesPage";
import DepositsPage from "../pages/DepositsPage";
import SubscriptionsPages from "../pages/SubscriptionsPages";
import UsersPage from "../pages/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddPropertyPage from "../pages/AddPropertyPage";

const Routes = () => {
    return (
        <Router>
            {/* //define paths and routes */}
            <Switch>
                <PublicRoute
                    path="/"
                    exact
                    component={IndexPage}
                    layout={PublicLayoutWithCarousel}
                />
                <PublicRoute
                    path="/about"
                    exact
                    component={AboutPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/properties"
                    exact
                    component={PropertiesPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/properties/:id"
                    exact
                    component={PropertyPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/checkout"
                    exact
                    component={CheckoutPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/contact"
                    exact
                    component={ContactPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/privacy-policy"
                    exact
                    component={PrivacyPolicyPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/terms-and-conditions"
                    exact
                    component={TermsConditionsPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/testimonials"
                    exact
                    component={TestimonialsPage}
                    layout={PublicLayout}
                />
                <PublicRoute
                    path="/faqs"
                    exact
                    component={FAQSPage}
                    layout={PublicLayout}
                />
            {/* this should be private routes*/}
                <PublicRoute
                    path={["/admin","/admin/dashboard"]}
                    exact
                    component={DashboardPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/properties"
                    exact
                    component={AdminPropertiesPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/addProperty"
                    exact
                    component={AddPropertyPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/account"
                    exact
                    component={AccountPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/messages"
                    exact
                    component={MessagesPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/deposits"
                    exact
                    component={DepositsPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/users"
                    exact
                    component={UsersPage}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="/admin/subscription"
                    exact
                    component={SubscriptionsPages}
                    layout={AdminLayout}
                />
                <PublicRoute
                    path="*"
                    exact
                    component={NotFoundPage}
                    layout={PublicLayout}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
