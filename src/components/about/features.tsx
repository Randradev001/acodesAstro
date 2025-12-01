import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography className="px-8 font-normal text-gray-700">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title: "From Excel to Web Systems",
    description:
      "We turn your spreadsheets and manual processes into robust web applications with databases, secure access, and clear workflows tailored to your business.",
  },
  {
    icon: <EyeIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Dashboards & Business Intelligence",
    description:
      "Power BI, custom dashboards, and reports that give you visibility over operations, sales, logistics, education, or any area you need to monitor.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Automation That Saves Time",
    description:
      "Automate repetitive tasks like sending emails, generating PDFs, updating records, or syncing systems so your team can focus on high-value work.",
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "User-Friendly Interfaces",
    description:
      "Clean and modern screens designed for real users, with simple forms, clear navigation, and flows that make daily work faster and easier.",
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Direct Communication & Support",
    description:
      "You talk directly with the developer. We listen to your needs, suggest improvements, and stay close during and after the launch of your system.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Built for Your Business Reality",
    description:
      "Mining, logistics, education, services, admin, or operations — we adapt the solution to your processes, not the other way around.",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          What we build at AndradeCodes
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          From spreadsheets and ideas to real web systems
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          We help businesses move away from manual Excel files and fragmented
          tools into custom web applications, dashboards, and automations that
          centralize data and make day-to-day work more efficient.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSectionOne;
