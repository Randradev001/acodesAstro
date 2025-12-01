import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
  const openWhatsApp = () => {
    // TODO: reemplaza el número por el tuyo en formato internacional
    const url =
      "https://wa.me/14319973007?text=Hi%20AndradeCodes,%20I%27m%20interested%20in%20a%20web%20system%20or%20website.";
    window.open(url, "_blank");
  };

  const scrollToProjects = () => {
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          {/* LEFT SIDE – TEXT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-lg border border-dark/30 py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-md bg-dark py-0.5 px-3 font-medium text-white"
              >
                AndradeCodes
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                Web systems, dashboards & automation
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>

            {/* Hero Title */}
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              We turn your spreadsheets and ideas into smart web systems.
            </Typography>

            {/* Hero Subtitle / Lead */}
            <Typography
              variant="lead"
              className="lg:pr-20 text-blue-gray-800"
            >
              At AndradeCodes, we build custom web applications, admin panels,
              and data dashboards that replace manual Excel files and scattered
              processes. Save hours every week, gain clarity over your data, and
              give your team tools that are actually easy to use.
            </Typography>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button
                color="dark"
                className="flex items-center"
                onClick={openWhatsApp}
              >
                Let&apos;s talk and create
              </Button>

              <Button
                color="dark"
                variant="outlined"
                className="flex items-center"
                onClick={scrollToProjects}
              >
                See examples of our work
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="hidden lg:flex">
            <img
              src="main.png" // TODO: pon aquí tu imagen (ej: un dashboard, sistema, etc.)
              alt="AndradeCodes web system preview"
              className="max-w-md rounded-3xl ml-auto shadow-xl"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
