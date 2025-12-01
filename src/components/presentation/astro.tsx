import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {

const openWhatsApp = () => {
  const phone = "14319973009"; // tu número con código país
  const message = "Hello! I would like to talk about a project.";
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

const openAndradeCodes = () => {
 
  
  const url = `https://andradecodes.vercel.app/`;
  window.open(url, "_blank");
};

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
             ⭐ About Us
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
             What is AndradeCodes?
            </Typography>
            <Typography variant="lead" color="white">
              AndradeCodes is a startup focused on building modern and accessible digital solutions. Our mission is to support emerging businesses and small companies by delivering real innovation and developing robust, scalable, and easy-to-use software tools.
We specialize in transforming manual processes into smart systems, optimizing daily operations, and creating platforms that grow alongside your business. At AndradeCodes, we combine experience, creativity, and technology to help you move faster with solutions designed around your real needs.
            </Typography>
        
   <div className="flex gap-4 mt-12">
  <Button
    color="white"
    size="sm"
    variant="outlined"
    className="flex items-center"
    onClick={openWhatsApp}
  >
    Let's talk and create
  </Button>

  <Button
    color="white"
    size="sm"
    variant="outlined"
    className="flex items-center"
    onClick={openAndradeCodes}
  >
    Would you like to know more?
  </Button>
</div>

          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="logo_white.png"
              alt="astro"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
