// src/data/sidebarOptions.ts
import { Home, User , Settings, Calendar, FileText, DollarSign } from "lucide-react";
import Dashboard from "@/components/consultant-panel/dashboard";
import AccountsSettings from "@/components/consultant-panel/accounts-settings";
import SpecialitiesServices from "@/components/consultant-panel/specialitiesServices";
import ArticleManagement from "@/components/consultant-panel/manageArticles";
import PayoutSettings from "@/components/consultant-panel/payoutSettings";
import ProfileSettings from "@/components/consultant-panel/profile-settings";

export const sidebarOptions = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: Home,
    component: Dashboard,
  },
  {
    name: "Profile Settings",
    path: "profile-settings",
    icon: User,
    component: ProfileSettings,
  },
  {
    name: "Manage Articles",
    path: "manage-articles",
    icon: FileText,
    component: ArticleManagement,
  },
  {
    name: "Accounts Settings",
    path: "account-settings",
    icon: Settings,
    component: AccountsSettings,
  },
  {
    name: "Specialities & Services",
    path: "specialities-services",
    icon: Calendar,
    component: SpecialitiesServices,
  },
 
  {
    name: "Payouts Settings",
    path: "payout-settings",
    icon: DollarSign,
    component: PayoutSettings,
  },

];
