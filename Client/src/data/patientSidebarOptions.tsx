import { Home, Mail, Settings, User, List, FileText } from "lucide-react";
import Dashboard from "@/components/patient-panel/dashboard";
import Inbox from "@/components/patient-panel/inbox";
import ProfileSettings from "@/components/patient-panel/profile-settings";
import AccountSettings from "@/components/patient-panel/accounts-settings";
import AppointmentList from "@/components/patient-panel/appointment-list";
// import SavedItems from "@/components/patient-panel/saved-items";
import Invoices from "@/components/patient-panel/dashboard/Invoices";

export const sidebarOptions = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: Home,
    component: Dashboard,
  },
  {
    name: "Inbox",
    path: "inbox",
    icon: Mail,
    component: Inbox,
  },
  {
    name: "Profile Settings",
    path: "profile-settings",
    icon: User,
    component: ProfileSettings,
  },
  {
    name: "Account Settings",
    path: "account-settings",
    icon: Settings,
    component: AccountSettings,
  },
  {
    name: "Appointment List",
    path: "appointment-list",
    icon: List,
    component: AppointmentList,
  },
//   {
//     name: "My Saved Items",
//     path: "saved-items",
//     icon: Heart,
//     component: SavedItems,
//   },
  {
    name: "Invoices",
    path: "invoices",
    icon: FileText,
    component: Invoices,
  },

];
