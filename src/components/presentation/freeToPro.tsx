import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "",
    title: "Save hours every week thanks to smart automations",
    desc: "Say goodbye to repetitive tasks. We automate key processes so your team can focus on what truly matters: growth, customers, and strategic decisions. Less time wasted, more productivity gained."
  },
  {
    count: "",
    title: "Scalable solutions that grow with your business",
    desc: "Our systems are built to evolve with you. Whether you’re adding new users, integrating external tools, or increasing workload, your solution will expand smoothly without disruptions."
  },
  {
    count: "",
    title: "Clean and modern designs, built for real users",
    desc: "We create intuitive interfaces anyone can understand. Your team will feel comfortable from the first minute—no complicated training required. Clear, modern, and user-friendly."
  },
  {
    count: "",
    title: "Fast implementation, with clear communication and direct support",
    desc: "We move quickly and transparently. You get direct communication throughout the entire process, ensuring every detail meets your needs. No bureaucracy, no long waiting times."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
             Why Choose Us?
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
             Where efficiency meets innovation.
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
             We are your technology partner, turning manual processes into simple, fast, and efficient solutions. With expertise in development, data analysis, and automation, we help you optimize your business from day one.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
               {/* <a href="https://www.creative-tim.com/product/astro-launch-ui-pro" target="_blank">
                  <Button color="dark" className="flex items-center">
                     Astro Pro
                  </Button>
                </a> */ } 
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
