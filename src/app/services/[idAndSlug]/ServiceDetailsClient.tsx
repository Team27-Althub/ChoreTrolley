"use client";

import LoggedInNavbar from "../../components/Major/LoggedInNavbar";
import ServiceDetails from "./ServiceDetails";
import Scheduling from "./Scheduling";
import CustomerReview from "./CustomerReview";
import OtherServices from "./OtherServices";
import { useFetchResourceQuery } from "@/redux/api/crudApi";
import { notFound } from "next/navigation";

export default function ServiceDetailsClient({ serviceId }: { serviceId: string }) {
  const { data, isLoading, isError } = useFetchResourceQuery("/services");

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center text-red-500 mt-10">Failed to load service</p>;

  const Details = data?.data?.find((service: any) => service.id.toString() === serviceId);

  if (!Details) {
    notFound();
  }

  return (
    <div className="bg-[#F5F5F4] w-full min-h-screen rounded-lg relative overflow-x-hidden">
      <LoggedInNavbar />
      <div className="w-full grid grid-rows-[auto,1fr,auto] grid-cols-1">
        <div className="row-span-1 col-span-1">
          <ServiceDetails Details={Details} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 w-full px-3 md:px-10 lg:px-20 gap-3 md:my-10">
          <div className="md:col-span-3 min-w-0">
            <Scheduling />
          </div>
          <div className="md:col-span-2 min-w-0">
            <CustomerReview />
          </div>
        </div>

        <div className="row-span-1 col-span-1">
          <OtherServices />
        </div>
      </div>
    </div>
  );
}
