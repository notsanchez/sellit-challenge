import { getApiDocs } from "@/docs/swagger";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default async function Home() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <SwaggerUI spec={spec} />
    </section>
  );
}
