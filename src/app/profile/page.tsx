"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Package,
  Star,
  Mail,
  ScrollText,
  KeyRound,
  Settings,
  LogOut,
  ChevronDown, // For dropdown toggle
  ChevronUp, // For dropdown toggle
  X, // For closing dropdown
} from "lucide-react";
import LoggedInNavbar from "../components/Major/LoggedInNavbar";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfileOrders from "./ProfileOrders";
import RatingsReviews from "./RatingReviews";
import Inbox from "./Inbox";
import ChangePassword from "./ChangePassword";
import PolicyAndTerms from "./Policy&Terms"; // Assuming this is the correct component name
import ConfirmModal from "./ConfirmModal";
import { useLogoutMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { useToast } from "../components/Minor/ReactToast";

const tabs = [
  { label: "Personal Info", icon: <User size={18} /> },
  { label: "Your Orders", icon: <Package size={18} /> },
  { label: "Reviews", icon: <Star size={18} />, extra: "(2 waiting reviews)" },
  { label: "Inbox", icon: <Mail size={18} /> },
  { label: "Privacy Policy & Terms of Use", icon: <ScrollText size={18} /> },
  { label: "Change Password", icon: <KeyRound size={18} /> },
  { label: "Account Settings", icon: <Settings size={18} /> },
  { label: "Logout", icon: <LogOut size={18} /> },
];

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalType, setModalType] = useState<"delete" | "logout" | null>(null);
  const [logoutUser, {isLoading:logoutLoading}] = useLogoutMutation()
  const router = useRouter()

  const {toast} = useToast()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    setIsDropdownOpen(false); // Close dropdown when a tab is selected
  };
  const handleDelete = () => {
     toast({
        title: "Coming Soon",
        description: 'This feature is not yet available',
        type: "default",
      });
    console.log("user deleted");
    setModalType(null);
  };
  const handleLogout = async () => {
    try{
      await logoutUser({}).unwrap()
      toast({
        title: "Logout successful",
        description: 'Bye for now',
        type: "success",
      });
      sessionStorage.clear();
      router.push('/login') 
    } catch(err) {
      toast({
        title: "Logout successful",
        description: 'Bye for now',
        type: "success",
      });
      sessionStorage.clear();
      router.push('/login') 
    }
    console.log("user logged out");
    setModalType(null);
  };

  // Effect to prevent body scrolling when the dropdown is open on mobile
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDropdownOpen]);

  const renderContent = () => {
    switch (activeTab) {
      case "Personal Info":
        return <PersonalInfoForm />;
      case "Your Orders":
        return <ProfileOrders />;
      case "Reviews":
        return <RatingsReviews />;
      case "Inbox":
        return <Inbox />;
      case "Privacy Policy & Terms of Use":
        return <PolicyAndTerms />;
      case "Change Password":
        return <ChangePassword />;
      case "Account Settings":
        return (
          <div className="shadow bg-white rounded-lg p-5 ">
            <button
              className=" bg-[#E00004] w-full justify-center hover:cursor-pointer h-[50px] flex items-center text-white rounded-lg"
              onClick={() => setModalType("delete")}
            >
              Delete Account
            </button>
          </div>
        );
      case "Logout":
        return (
          <div className="shadow bg-white rounded-lg p-5">
            <button
              className=" bg-[#E00004] w-full justify-center hover:cursor-pointer  h-[50px] flex items-center text-white rounded-lg"
              onClick={() => setModalType("logout")}
            >
              Logout
            </button>
          </div>
        );
      default:
        return <div className="p-6">Select a tab</div>;
    }
  };

  return (
    <div className="bg-[#F5F5F4] min-h-[100vh] relative overflow-x-hidden ">
      <LoggedInNavbar />

      <div className="px-3 py-5 md:px-10 lg:px-24 md:grid md:grid-cols-[30%_70%] gap-4">
        {/* Mobile Dropdown Toggle Button */}
        <div className="md:hidden mb-4 relative ">
          <button
            onClick={toggleDropdown}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-lg font-medium text-gray-700 hover:bg-gray-50"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {activeTab}
            {isDropdownOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-30 max-h-80 overflow-y-auto">
              <ul className="space-y-2 p-4">
                {tabs.map(({ label, icon, extra }) => (
                  <li
                    key={label}
                    className={`flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-100 ${
                      activeTab === label
                        ? "text-black font-semibold bg-gray-100"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTabClick(label)}
                  >
                    <div className="flex items-center gap-3">
                      {icon}
                      <span>{label}</span>
                    </div>
                    {extra && (
                      <span className="text-xs text-gray-400">{extra}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block bg-white rounded-lg shadow-lg p-6 h-fit">
          <ul className="space-y-6">
            {tabs.map(({ label, icon, extra }) => (
              <li
                key={label}
                className={`flex items-center justify-between cursor-pointer group py-2 ${
                  activeTab === label
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveTab(label)}
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <span>{label}</span>
                </div>
                {extra && (
                  <span className="text-xs text-gray-400 group-hover:text-gray-600">
                    {extra}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Main Content Area */}
        <main
          className={`min-h-full w-full ${
            activeTab === "Account Settings" || activeTab === "Logout"
              ? "" // remove bg for delete/logout
              : "bg-white rounded-lg shadow-lg"
          }`}
        >
          {renderContent()}
        </main>
      </div>

      {/* Overlay for mobile dropdown */}
      {isDropdownOpen && (
        <div
          onClick={toggleDropdown}
          className="fixed inset-0 bg-[#b9b9b9a6] bg-opacity-50 z-10 md:hidden"
        />
      )}
      {/* Delete Account & Logout Modal */}
      <ConfirmModal
        open={modalType !== null}
        onClose={() => setModalType(null)}
        onConfirm={modalType === "delete" ? handleDelete : handleLogout}
        title={
          modalType === "delete"
            ? "Are you sure you want to delete your account?"
            : "Leaving us soon?"
        }
        message={
          modalType === "delete"
            ? "This process can not be reversed. Think well before performing this action"
            : "Are you sure you want to logout?"
        }
        cancelLabel="Cancel"
        confirmLabel={
          modalType === "delete" ? "Yes, Delete Account" : "Yes, Logout"
        }
      />
    </div>
  );
};

export default Profile;
