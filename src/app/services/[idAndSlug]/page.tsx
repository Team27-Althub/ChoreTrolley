import { data as Data } from "../serviceData";
import { notFound } from "next/navigation";
import LoggedInNavbar from "../../components/Major/LoggedInNavbar";
import ServiceDetails from "./ServiceDetails";
import Scheduling from "./Scheduling";
import CustomerReview from "./CustomerReview";
import OtherServices from "./OtherServices";

interface ServiceDetailsPageProps {
  params: Promise<{
    idAndSlug: string;
  }>;
}
const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps) => {
  const { idAndSlug } = await params;
  const [id] = idAndSlug.split("-");
  const Details = Data.find((service) => service.id.toString() === id);

  if (!Details) {
    notFound();
  }

  return (
    <div className="bg-[#F5F5F4] w-full min-h-screen rounded-lg relative overflow-x-hidden ">
      {/* Menu Component */}
      <LoggedInNavbar />
      <div className="w-full grid grid-rows-[auto,1fr,auto] grid-cols-1 ">
        {/* Service Details Component */}
        <div className="row-span-1 col-span-1">
          <ServiceDetails Details={Details} />
        </div>
        {/* Scheduling/Customer Review Component */}
        <div className="grid grid-cols-1 md:grid-cols-5 w-full px-20 gap-3 md:my-10 ">
          <div className="md:col-span-3 min-w-0">
            <Scheduling />
          </div>

          <div className="md:col-span-2 min-w-0 ">
            <CustomerReview />
          </div>
        </div>
        {/* Other Services Component */}
        <div className="row-span-1 col-span-1 ">
          <OtherServices />
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailsPage;
