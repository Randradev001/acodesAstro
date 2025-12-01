import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5"
            >
            Built by developers, designed for you
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
            Unlock seamless operations with zero friction.
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
             Our tools are built for speed and clarity—so you can eliminate inefficiencies, automate routine tasks, and reduce operational overhead. Faster launches, smoother workflows, and more time back in your day.
            </Typography>
        { /* <a href="https://www.creative-tim.com/learning-lab/astro/overview/astro-launch-ui">
              <Button color="dark" variant="text" size="sm" className="flex items-center mx-auto md:mr-auto lg:ml-0 gap-2 mt-4">
                Documentation <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a> */}    
          </div>
            <img src="code.png" alt="iphone" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
