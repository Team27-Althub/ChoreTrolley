// src/app/services/[idAndSlug]/page.tsx
import { notFound } from "next/navigation";
import ServiceDetailsClient from "./ServiceDetailsClient";

interface ServiceDetailsPageProps {
  params: {
    idAndSlug: string;
  };
}

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  // extract id
  const [id] = params.idAndSlug.split("-");
  
  // just pass id down — fetching will happen in the client
  return <ServiceDetailsClient serviceId={id} />;
}
