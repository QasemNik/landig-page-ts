import { SvgFlash } from "../../svg/svgs";
import Info  from "../cards/Info";
import { Container } from "../shared/Container";
import Paragraph  from "../shared/Paragraph";
import Title  from "../shared/Title";

export const AboutUs = () => {
  return (
    <section id="about-us">
       
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="/pexels-photo-8728381.webp"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title> About Our AI Solution </Title>
          <Paragraph>
            We are on a mission to empower businesses with transformative AI
            technology. Our team of experts combines industry‑leading research
            with innovative algorithms to deliver a platform that adapts to your
            unique needs. Join us and lead the digital revolution in your
            industry.
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mission"
              description="Our mission is to use AI for the good of humanity and the planet."
            >
              <SvgFlash />   
            </Info>
            <Info
              title="Vision"
              description="Our vision is to drive business innovation and growth."
            >
              <SvgFlash />
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};