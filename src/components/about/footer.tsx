import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

const links = [
   { name: "Home", link: "/" },
  { name: "Services", link: "/#DevPresentation" },
  { name: "Projects", link: "/#examplePages" },
  { name: "Pricing", link: "/#pricing" },
 
];

const bottomLinks = [
  { name: "About AndradeCodes", link: "/#about" },
  { name: "What We Build", link: "/#what-we-build" },
  { name: "Automations", link: "/#automation" },
  { name: "From Excel to Web Systems", link: "/#excel-to-system" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Projects", link: "/#projects" },
  { name: "FAQ", link: "/#faq" },
  { name: "Contact", link: "/#contact" },
];

const currentYear = new Date().getFullYear();

export function FooterOne() {
  const [helpText, setHelpText] = useState("");
  const [industry, setIndustry] = useState("");
  const [areaToAutomate, setAreaToAutomate] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSendWhatsApp = () => {
    const message = `
Hi Andrés, I’m interested in AndradeCodes.

How you can help my business:
${helpText || "-"}

Industry / Business type:
${industry || "-"}

Area I would like to automate:
${areaToAutomate || "-"}

Additional details:
${extraInfo || "-"}

Contact number:
${contactNumber || "-"}

Email:
${email || "-"}
`;

    const url =
      "https://wa.me/14319973009?text=" + encodeURIComponent(message.trim());
    window.open(url, "_blank");
  };

  return (
    <ThemeProvider>
      <footer className="mt-10 px-8 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-start justify-center gap-8 md:justify-between">
            
            {/* LEFT – BRAND + LINKS */}
            <div className="text-center md:text-left">
              <Typography
                variant="h4"
                className="mb-6 font-semibold text-primary"
              >
                AndradeCodes
              </Typography>

              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                {links.map((item, idx) => (
                  <li key={item.name}>
                    <Typography
                      as="a"
                      href={item.link}
                      color="gray"
                      className={`py-1 font-normal transition-colors hover:text-primary ${
                        idx === 0 ? "pr-3" : "px-3"
                      }`}
                    >
                      {item.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT – CUSTOM FORM */}
            <div className="w-full sm:w-[28rem] sm:min-w-[24rem]">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 font-semibold"
              >
                Tell us how we can help your business
              </Typography>

              <div className="flex flex-col gap-4">
                
                {/* 1. How can we help */}
                <div>
                  <Typography className="mb-1 text-xs font-medium text-gray-800">
                    How can we contribute to your business?
                  </Typography>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-blue-gray-100 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="For example: replace Excel files, centralize data, automate approvals..."
                    value={helpText}
                    onChange={(e) => setHelpText(e.target.value)}
                  />
                </div>

                {/* 2. Industry */}
                <div>
                  <Typography className="mb-1 text-xs font-medium text-gray-800">
                    Tell us about your industry
                  </Typography>
                  <textarea
                    rows={2}
                    className="w-full rounded-md border border-blue-gray-100 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Logistics, mining, education, services, administration..."
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div>

                {/* 3. Area to automate */}
                <div>
                  <Typography className="mb-1 text-xs font-medium text-gray-800">
                    Which area would you like to automate?
                  </Typography>
                  <textarea
                    rows={2}
                    className="w-full rounded-md border border-blue-gray-100 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Reports, approvals, inventory, routes, dashboards..."
                    value={areaToAutomate}
                    onChange={(e) => setAreaToAutomate(e.target.value)}
                  />
                </div>

                {/* 4. Extra info */}
                <div>
                  <Typography className="mb-1 text-xs font-medium text-gray-800">
                    Anything else you want to share?
                  </Typography>
                  <textarea
                    rows={2}
                    className="w-full rounded-md border border-blue-gray-100 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Team size, current tools, pain points..."
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                  />
                </div>

                {/* 5. Contact number */}
                <Input
                  color="black"
                  label="Contact number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />

                {/* 6. Email */}
                <Input
                  color="black"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Button color="dark" onClick={handleSendWhatsApp}>
                  Send via WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* BOTTOM – SHORTCUT LINKS */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
            
            <Typography color="gray" className="text-center font-normal">
              &copy; {currentYear} AndradeCodes • Custom Web Systems, Dashboards & Automation.
            </Typography>

            <ul className="flex flex-wrap items-center justify-center">
              {bottomLinks.map((item, idx) => (
                <li key={item.name}>
                  <Typography
                    as="a"
                    href={item.link}
                    color="gray"
                    className={`py-1 font-normal transition-colors hover:text-primary ${
                      idx === bottomLinks.length - 1 ? "pl-2" : "px-2"
                    }`}
                  >
                    {item.name}
                  </Typography>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default FooterOne;
