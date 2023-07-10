import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoute";
import Home from "./app/Home";
import Subscriptions from "./app/Subscriptions";
import Notifications from "./app/Notifications";
import Register from "./app/register/Register";
import LandingPage from "./app/landingpage/LandingPage";
import Search from "./app/Search";

import Profile from "./app/ProfileMain";
import DetachedProfile from "./app/DetachedProfile";
import VisitorProfile2 from "./app/VisitorProfile";
import EditProfile from "./app/EditeProfile";
import Message from "./app/Message";
import History from "./app/History";
import AdminRoute from "./components/admin-route/AdminRoute";
import Overview from "./app/admin/overview/Overview";
import AdminContact from "./app/admin/contactUs/AdminContact";
import AdminUsers from "./app/admin/users/AdminUsers";
import AdminMessage from "./app/admin/all-message/AllMessage";
import AdminToghts from "./app/admin/toghts/AdminToghts";
import AdminSettings from "./app/admin/settings/AdminSettings";
import AdminCategories from "./app/admin/categories/AdminCategories";
import AdminUsernames from "./app/admin/username/AdminUsernames";
import AdminControlls from "./app/admin/controlls/AdminControlls";
import AdminReported from "./app/admin/report/AdminReported";
import AdManager from "./app/admin/adManager/AdManager";
import ResetPassword from "./app/admin/reset-password/ResetPassword";
import AdminTopics from "./app/admin/topics/AdminTopics";
import Logout from "./app/admin/logout/Logout";
import AdminMessagePanel from "./app/admin/admin-message-panel/AdminMessage";
import NewRegistered from "./app/admin/users/NewRegistered";
import ReportedComment from "./app/admin/comments/ReportedComment";
import CommentReview from "./app/admin/comments/CommentReview";
import OnlineUsers from "./app/admin/users/OnlineUsers";
import RegisteredUser from "./app/admin/users/RegisteredUser";
import SuspendedUsers from "./app/admin/users/SuspendedUsers";
import BlockedUsers from "./app/admin/users/BlockedUsers";
import ReportedProfile from "./app/admin/users/ReportedProfile";
import FlaggedProfile from "./app/admin/users/FlaggedProfile";
import UserProfile from "./app/admin/users/UserProfile";
import ReportedUserProfile from "./app/admin/users/ReportedUserProfile";
import FlaggedUserProfile from "./app/admin/users/FlaggedUserProfile";
import ContactMessage from "./app/admin/contactUs/ContactMessage";
import AdminComments from "./app/admin/comments/AdminComments";
import AllMessage from "./app/admin/all-message/AllMessage";
import ReportedMessage from "./app/admin/all-message/ReportedMessage";
import FlaggedMessage from "./app/admin/all-message/FlaggedMessage";
import Analytics from "./app/admin/analytics/Analytics";
import CategoryAnalytics from "./app/admin/analytics/CategoryAnalytics";
import FlaggedComment from "./app/admin/comments/FlaggedComment";
import MessageReview from "./app/admin/all-message/MessageReview";
import AutomatedModeration from "./app/admin/automated-moderation/AutomatedModeration";
import SpecialMessage from "./app/admin/special-message/SpecialMessage";
import AllReport from "./app/admin/users/AllReport";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/app/register" element={<Register />} />
        <Route exact path="app" element={<ProtectedRoutes />}>
          <Route exact path="/app" element={<Home />} />
          <Route exact path="/app/profile" element={<Profile />} />

          <Route exact path="/app/profile-v" element={<VisitorProfile2 />} />
          <Route exact path="/app/edit-profile" element={<EditProfile />} />
          <Route exact path="/app/message" element={<Message />} />
          <Route
            exact
            path="/app/detachedprofile"
            element={<DetachedProfile />}
          />
          <Route exact path="/app/subscriptions" element={<Subscriptions />} />
          <Route exact path="/app/notifications" element={<Notifications />} />
          <Route exact path="/app/search" element={<Search />} />

          <Route exact path="/app/history" element={<History />} />
        </Route>
        <Route path="/app/admin" element={<AdminRoute />}>
          <Route path="/app/admin/overview" element={<Overview />} />
          <Route path="/app/admin/contactUs" element={<AdminContact />} />
          <Route
            path="/app/admin/contact-message"
            element={<ContactMessage />}
          />
          <Route
            path="/app/admin/admin-message-panel"
            element={<AdminMessagePanel />}
          />
          <Route path="/app/admin/adminMessage" element={<AdminMessage />} />
          <Route path="/app/admin/users" element={<NewRegistered />} />
          <Route
            path="/app/admin/registered-users"
            element={<RegisteredUser />}
          />
          <Route path="/app/admin/all-comments" element={<AdminComments />} />
          <Route path="/app/admin/all-message" element={<AllMessage />} />
          <Route
            path="/app/admin/reported-message"
            element={<ReportedMessage />}
          />
          <Route
            path="/app/admin/flagged-message"
            element={<FlaggedMessage />}
          />
          <Route path="/app/admin/message-review" element={<MessageReview />} />
          <Route
            path="/app/admin/suspended-users"
            element={<SuspendedUsers />}
          />
          <Route path="/app/admin/blocked-users" element={<BlockedUsers />} />
          <Route
            path="/app/admin/reported-profile"
            element={<ReportedProfile />}
          />
          <Route
            path="/app/admin/flagged-profile"
            element={<FlaggedProfile />}
          />

          <Route
            path="/app/admin/flagged-users-profile"
            element={<FlaggedUserProfile />}
          />
          <Route
            path="/app/admin/reported-users-profile"
            element={<ReportedUserProfile />}
          />
          <Route path="/app/admin/all-report" element={<AllReport />} />
          <Route path="/app/admin/users-profile" element={<UserProfile />} />
          <Route path="/app/admin/online-users" element={<OnlineUsers />} />
          <Route
            path="/app/admin/contact-us-messages"
            element={<AdminContact />}
          />
          <Route path="/app/admin/analytics" element={<Analytics />} />
          <Route
            path="/app/admin/analytics-category"
            element={<CategoryAnalytics />}
          />
          <Route path="/app/admin/toghts" element={<AdminToghts />} />
          <Route path="/app/admin/topics" element={<AdminTopics />} />
          <Route path="/app/admin/settings" element={<AdminSettings />} />
          <Route path="/app/admin/categories" element={<AdminCategories />} />
          {/* <Route path="/app/admin/comments" element={<AdminComments />} /> */}
          <Route path="/app/admin/comments" element={<CommentReview />} />
          <Route
            path="/app/admin/comment-flagged"
            element={<FlaggedComment />}
          />
          <Route
            path="/app/admin/comment-report"
            element={<ReportedComment />}
          />
          <Route
            path="/app/admin/automated-moderation"
            element={<AutomatedModeration />}
          />
          <Route
            path="/app/admin/special-message"
            element={<SpecialMessage />}
          />
          <Route path="/app/admin/controlls" element={<AdminControlls />} />
          <Route path="/app/admin/controlls" element={<AdminControlls />} />
          <Route path="/app/admin/report" element={<AdminReported />} />
          <Route path="/app/admin/adManager" element={<AdManager />} />
          <Route path="/app/admin/reset-password" element={<ResetPassword />} />
          <Route path="app/admin/users" element={<AdminUsers />} />
          <Route path="app/admin/username" element={<AdminUsernames />} />

          <Route path="/app/admin/contactUs" element={<Logout />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterConfig;
