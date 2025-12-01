import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div id="DevPresentation" className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
            From spreadsheets to real software
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Turn your Excel files and templates into powerful digital tools
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
              Using AndradeCodes, you can transform Excel files, paper forms, and templates into secure, easy-to-use web applications.
              No more version chaos, copy-paste, or manual reports — just clear screens, filters, and dashboards built around your data.
            </Typography>
          </div>
          <img src="section1.png" alt="components" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
