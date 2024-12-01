// src/data/sidebarOptions.ts
import { Home, Eye, Settings, Calendar, FileText, DollarSign, Heart } from "lucide-react";
import Dashboard from "@/components/consultant-panel/dashboard";
import AccountsSettings from "@/components/consultant-panel/accounts-settings";
import SpecialitiesServices from "@/components/consultant-panel/specialitiesServices";
import ArticleManagement from "@/components/consultant-panel/manageArticles";
import PayoutSettings from "@/components/consultant-panel/payoutSettings";

export const sidebarOptions = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: Home,
    component: Dashboard,
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
