'use client'
import React, { useState, useEffect } from "react";
import { MapPin, Phone, ChevronDown, Star } from "lucide-react";
import nigeriaCities from "./cityData.js";
import { useCreateResourceMutation, useFetchResourceQuery } from "@/redux/api/crudApi";
import RenderStars from "../services/Stars"
import { useToast } from "../components/Minor/ReactToast";

const PersonalInfoForm = () => {

  const firstName = sessionStorage.getItem("firstName") || "";
  const lastName = sessionStorage.getItem("lastName") || "";


  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null); // actual file
  const [profilePreview, setProfilePreview] = useState(""); // for preview
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const { toast } = useToast()

  // Initialize with session storage values
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Mutations
  const [post, { isLoading, isError, isSuccess }] = useCreateResourceMutation();
  const { data: profileData, error: profileError, isLoading: profileLoading } = useFetchResourceQuery('/profile')

    useEffect(() => {
    if (profileData?.data) {
      setFirst(profileData.data.firstName || "");
      setLast(profileData.data.lastName || "");
      setAddress(profileData.data.address || "");
      setPhone(profileData.data.phone || "");
      setSelectedState(profileData.data.state || "");
      setSelectedCity(profileData.data.city || "");
    }
  }, [profileData]);



  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file); // keep the file for upload
      setProfilePreview(URL.createObjectURL(file)); // only for preview
      setHasChanges(true);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();

  const body = {
    firstName: first,
    lastName: last,
    address,
    state: selectedState,
    city: selectedCity,
    phone,
    // userId: ID
    // profileImageUrl: profileImage // send URL string
  };



    try {
      await post({
        url: "/profile",
        data: body,
      }).unwrap();
      toast({
        title: "Success",
        description: 'Profile updated succesfully',
        type: "success",
      });
    } catch (err) {
      console.error("Update failed:", err);
      toast({
        title: "Error",
        description: 'Something went wrong, Try again.',
        type: "error",
      });
    }
  };

  return (
    <div className="bg-white max-w-3xl mx-auto p-8 rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8">
          {/* <img
            src={
              profilePreview || 
              (profileData?.data?.profileImageUrl 
                ? profileData.data.profileImageUrl.startsWith('http')
                  ? profileData.data.profileImageUrl
                  : `https://choretrolley-apiservice-production.up.railway.app${profileData.data.profileImageUrl}`
                : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F452030%2Favatar-default&psig=AOvVaw19BEa5phztgIdU-Jsnu0ts&ust=1760052680584000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjSu6nhlZADFQAAAAAdAAAAABAJ')
                
            }
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />  */}


        <div>
          <h2 className="text-xl font-semibold">
            {profileData?.data?.firstName || firstName} {profileData?.data?.lastName || lastName}
          </h2>
          <div className="flex items-center gap-1 text-sm mt-1">
            <RenderStars count={profileData?.data?.rating}/>
            <span className="font-semibold">{profileData?.data?.rating}</span>
            <span className="text-gray-500">({profileData?.data?.reviewCount} Reviews)</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={updateProfile}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input
              type="text"
              value={first }
              onChange={(e) => {
                setHasChanges(true);
                setFirst(e.target.value);
              }}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input
              type="text"
              value={last}
              onChange={(e) => {
                setHasChanges(true);
                setLast(e.target.value);
              }}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Address</label>
          <div className="relative">
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setHasChanges(true);
                setAddress(e.target.value);
              }}
              className="w-full border rounded-md px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
            />
            <MapPin
              className="absolute right-3 top-3 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">State</label>
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setHasChanges(true);
                }}
                className="w-full border rounded-md px-3 py-2 appearance-none outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select State</option>
                {nigeriaCities.map((data, idx) => (
                  <option key={idx} value={data.state}>
                    {data.state}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">City</label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setHasChanges(true);
                }}
                className="w-full border rounded-md px-3 py-2 appearance-none outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select City</option>
                {nigeriaCities
                  .find((data) => data.state === selectedState)
                  ?.cities.map((city, idx) => (
                    <option key={idx} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <div className="relative">
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setHasChanges(true);
                setPhone(e.target.value);
              }}
              className="w-full border rounded-md px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
            />
            <Phone
              className="absolute right-3 top-3 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full   font-medium py-2 rounded-md  hover:text-white transition-colors disabled:opacity-50 ${isLoading ? 'bg-[#013328] text-white' : 'bg-gray-200 hover:bg-[#013328] text-gray-600'}  `}
        >
          {isLoading
            ? "Saving..."
            : hasChanges
            ? "Save Changes"
            : "Update"}
        </button>
      </form>

      {/* Modal for changing profile image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">
              Change Profile Picture
            </h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md bg-[#013328] text-white hover:bg-[#025f45]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
