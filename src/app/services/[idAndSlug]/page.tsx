// src/app/services/[idAndSlug]/page.tsx
import ServiceDetailsClient from "./ServiceDetailsClient";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ idAndSlug: string }>;
}) {
  const { idAndSlug } = await params;
  const [id] = idAndSlug.split("-");
  return <ServiceDetailsClient serviceId={id} />;
}
