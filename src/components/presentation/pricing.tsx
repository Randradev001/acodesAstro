import React, { useEffect } from "react";
// import Script from "next/script";

import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

function PaddleLoader() {
  useEffect(() => {
    // Check if we are in the browser environment
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/paddle.js';
      script.onload = () => {
        // Access the Paddle global object from the script
        window.Paddle.Setup({
          vendor: Number(102023),
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

export function PricingSectionOne() {

    const openWhatsApp = () => {
  const phone = "14319973009"; // tu número con código país
  const message = "Hello! I would like to talk about a project.";
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


  return (
    <>
    <PaddleLoader />
      <section id="pricing" className="py-24 px-8">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Pick the best plan for you
          </Typography>
          <Typography className="mb-8 font-normal !text-gray-500">
            You have Free Unlimited Updates and Premium Support on each package.
          </Typography>
        </div>
        <div className="mt-12">
          <div className="container mx-auto md:flex justify-center gap-10">
            <Card
              color="transparent"
              className="border border-blue-gray-100 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="capitalize mb-2 text-center"
                >
                 ⭐ Plan 1 — Website Starter
                </Typography>

                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="flex gap-1 justify-center"
                >
                 Perfect for small businesses and personal brands
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                    Fully designed website, installed and running
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                     Responsive design (desktop + mobile)
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                     2 weeks of support and updates included
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                     Connection to your domain
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                    Fast delivery
                    </Typography>
                  </li>
                </ul>
               
                  <Button
                    size="sm"
                    variant="gradient"
                    color="blue-gray"
                    className="from-blue-gray-900 to-blue-gray-800"
                    onClick={openWhatsApp}
                  >
                 Start $150 CAD
                  </Button>
        
              </CardBody>
            </Card>

            <Card
              color="blue-gray"
              className="bg-dark w-full md:w-1/2 lg:w-1/4">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h6"
                  color="white"
                  className="capitalize mb-2 text-center"
                >
                ⭐ Plan 2 — Business System Pro
                </Typography>

                <Typography
                  variant="h6"
                  color="white"
                  className="flex gap-1 justify-center"
                >
              For companies that need more than a website—real software.
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                   Optional landing page or full website included
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                   Custom-built business system adapted to your operations
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                     Database architecture, secure storage & data management
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                     Login system, user roles, permissions
                    </Typography>
                  </li>
                                 <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                     Dashboards, forms, automation & reports
                    </Typography>
                  </li>
                </ul>
   
                  <Button
                    id="847482"
                    size="sm"
                    variant="gradient"
                    color="white"
                    onClick={openWhatsApp}
                  >
                Start $350 CAD / month
                  </Button>
                
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSectionOne;
