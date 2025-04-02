import { services } from "../../utils/Services-data";
import { Service } from "../cards/ServicesCard";
import { Container } from "../shared/Container";
import Paragraph  from "../shared/Paragraph";
import Title  from "../shared/Title";

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Service
                key={service.id}
                id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};