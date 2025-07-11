import { Button } from "./ui/button";
import lottie from "../assets/lottie.png";
import { Card, CardContent } from "./ui/card";

const Aboutus = () => {
  const stats = [
    { value: "100%", label: "SATISFACTION" },
    { value: "254", label: "PROJECTS" },
    { value: "40768", label: "WORKING HOURS" },
    { value: "400", label: "LOVELY CLIENTS" },
  ];
  return (
    <div id="about" className="bg-gray-50">
      {/* Company Profile */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 py-12">
        {/* Text Section */}
        <section className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-blue-600 font-semibold">Company Profile</p>
          <h1 className="text-4xl font-bold text-gray-800">
            Create a Strong Business Presence
          </h1>
          <p className="text-lg text-gray-600">
            Combining our unrivaled specialism in specific digital activities
            with a strategic & differentiated approach, Aakash Labs is able to
            meet the increasingly complex needs of clients in an effortless yet
            productive manner in the constantly evolving digital landscape.
          </p>
          <Button className="bg-blue-600 text-white rounded-[20px]">
            See All
          </Button>
        </section>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://aakashlabs.com/_nuxt/img/2.e1e4894.jpg"
            alt="About Us"
            className="w-full max-w-md h-auto object-cover rounded"
          />
        </div>
      </div>

      {/* Team you look for */}
      <div>
        <section className="flex flex-col items-center text-center gap-4 px-6 md:px-12 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              The Team You Look For
            </h1>
            <p className="text-gray-600">
              Aakash Labs is headquartered in Nepal, providing digital
              marketing, data mining, and machine learning services to clients
              around the globe.
            </p>
          </div>
        </section>

        <div className="flex  justify-center gap-6 px-6 md:px-20 py-10">
          {stats.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center h-[150px] w-[263px] border-none p-6 bg-white shadow-md"
            >
              <CardContent className="text-center">
                <p className="text-4xl text-orange-500 font-bold">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <section className="px-6 md:px-20 py-12 bg-gray-50">
        {/* Top Heading Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Upskill Employees, Empower Clients
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Our experienced strategists will help you set an objective and
            choose your tools, developing a plan that is custom-built for your
            business.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="md:w-5/12 w-full">
            <img
              src={lottie}
              alt="A"
              className="w-full max-w-sm h-auto rounded-md shadow"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-7/12 w-full space-y-6 text-gray-700">
            <p className="text-xl font-semibold text-gray-800">Our Values</p>

            <p>
              Aakash Labs provides an advanced implementation of digital
              technologies in areas that are crucial to your business,
              supporting your ambition and helping to retain your customer base.
              We give life to your ideas.
            </p>

            <p>
              Aakash Labs combines tech expertise and business intelligence to
              catalyze change and deliver results. We make sure we add value to
              those businesses that aim to add value to their customers. When we
              first get to know you, we’ll immediately begin analyzing your
              website. We want to know everything we can about your brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
