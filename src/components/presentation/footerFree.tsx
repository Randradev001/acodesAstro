
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-linkedin-in",
    link: "#", // TODO: tu LinkedIn
  },
  {
    icon: "fab fa-github",
    link: "#", // TODO: tu GitHub
  },
  {
    icon: "fab fa-whatsapp",
    link: "#", // TODO: tu link de WhatsApp: https://wa.me/1XXXXXXXXXX
  },
  {
    icon: "far fa-envelope",
    link: "mailto:hello@andradecodes.com", // cámbialo si usas otro correo
  },
];

const COMPANY = [
  {
    name: "About AndradeCodes",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
];

const HELP = [
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "Support & Maintenance",
    link: "/support",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link: "/docs",
  },
  {
    name: "Blog & Insights",
    link: "/blog",
  },
  {
    name: "Portfolio PDF",
    link: "/downloads/portfolio",
  },
  {
    name: "Free Tools",
    link: "/resources",
  },
];

const TECHS = [
  {
    name: "React & TypeScript",
    link: "#",
  },
  {
    name: "Node.js & Express",
    link: "#",
  },
  {
    name: "MySQL / SQL Server",
    link: "#",
  },
  {
    name: "Power BI & Dashboards",
    link: "#",
  },
  {
    name: "Genexus 18 .NET",
    link: "#",
  },
  {
    name: "Tailwind CSS & Material UI",
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Brand + short description */}
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              AndradeCodes
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              We design and build custom web applications, dashboards and
              automations so your business can save hours every week and make
              smarter decisions.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              {/* Company */}
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help & Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_self"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Technologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blue-gray-50" />

        {/* Bottom line */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit font-medium transition-all">
                AndradeCodes
              </a>{" "}
              • Custom web systems, dashboards & business automation.{" "}
              <span className="inline-block">
                Made with ❤️ in Canada for businesses ready to grow.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
