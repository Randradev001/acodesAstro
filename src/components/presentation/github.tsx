import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  const openWhatsApp = () => {
  const phone = "14319973009"; // tu número con código país
  const message = "Hello! I would like to talk about a project.";
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="red"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="py-20 px-14 md:w-7/12">
            <Typography color="white" className="font-normal opacity-70">
                 Let’s build something great together!
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
        Talk to us and get the best price for your project.
            </Typography>
            <Typography variant="lead" color="white">
        Whether you need a website, a custom system, or a complete tech solution for your business, we’re here to help.
We analyze your needs, propose the best approach, and offer fair and convenient prices tailored to your budget.

Let’s discuss your idea and find the perfect solution for you.
            </Typography>

              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-5" onClick={openWhatsApp}>
              CHAT ON WHATSAPP
              </Button>
            
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="logo_white.png"
              alt="AndradeCodes"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
