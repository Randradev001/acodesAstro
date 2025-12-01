import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl !bg-blue-gray-900"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
            {/* LEFT SIDE – TEXT */}
            <div>
              {/* Puedes cambiar este logo por el tuyo */}
              <img
                src="/logos/andradecodes-light.svg"
                alt="AndradeCodes logo"
                className="mb-8 w-40"
              />
              <Typography
                variant="h3"
                color="white"
                className="mb-10 font-medium leading-normal"
              >
    &quot;For me, delivering good service isn’t just about building a system —
  it’s about creating something that truly helps people. I came to Canada 
  with the desire to work hard and do things the right way, and every project 
  I develop is a reflection of that commitment. I care about making everything 
  flow, building solutions that work in real life, that are simple to use, 
  and that bring real value to your business. When you work with me, my goal 
  is for you to feel trust, clarity, and results you can see and use from day one.&quot;
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-medium"
              >
                Andrés Andrade
              </Typography>
              <Typography
                color="white"
                className="font-normal opacity-70"
              >
                 Founder, AndradeCodes
              </Typography>
            </div>

            {/* RIGHT SIDE – AVATAR / IMAGE */}
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src="logo_white.png"
                alt="client testimonial"
                className="h-80 w-80 rounded-full object-cover"
              />
              {/* Si quieres, puedes envolver esto en un gradient o ring */}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;

