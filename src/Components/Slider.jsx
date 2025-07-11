import * as React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "RAMESH PARAJULI",
    title: "Managing Director - Rupse Holidays",
    image: photo1,
    content:
      "AakashLabs has helped us streamline our booking process and increase our online visibility. Their team is highly professional and delivered exceptional results. The consistent promotions and ad campaigns have been crucial to meeting our business objectives.",
  },
  {
    id: 2,
    name: "RAJAN BARAL",
    title: "CEO - Merit",
    image: photo2,
    content:
      "Aakash Labs has increased our brand presence among students, and provided quality leads data with customized Ad Campaigns. With their great effort and strategy, we are able to drive business growth with more students conversions for France and Bangladesh academic programs.",
  },
  {
    id: 3,
    name: "SIJAN NEUPANE",
    title: "Agri Group",
    image: photo3,
    content:
      "Being the sole distributors for Mahindra passenger vehicles in Nepal, audience segmentation according to different car models is crucial. Aakash Labs successfully helped us generate sales for new model launches, and provide 360 degree online marketing services for Mahindra Nepal.",
  },
  {
    id: 4,
    name: "Shailesh Wagle",
    title: "Digital Marketing Intern",
    image: photo4,
    content:
      "I have been associated with Aakashlabs for 3 months internship and I can say that I feel empowered with the kind of experiences that I gained in those months. Not only it is a blessing to work with the profoundly experienced team. I am grateful and proud to be a part of the Aakashlabs.",
  },
  {
    id: 5,
    name: "Anisha Basnet",
    title: "QA Intern",
    image: photo5,
    content:
      "When the world was amidst Covid-19 pandemic, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Test Engineer intern for a wonderful 3-months of experience. I learned about the process of how any QA works.",
  },

  {
    id: 6,
    name: "Buddhi Maan Balami",
    title: "Managing Director-Q & U Hongkong Furniture",
    image: photo6,
    content:
      "Aakash labs has to have handling and increasing traffic on our website with best strategy and customized campaigns with SEO, Social Media, Website Programs, SERP. We are impressed with their work and response.",
  },
];

const Slider = () => {
  return (
    <section
      id="testimonials"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 mb-gray-50  text-center md:text-left">
          Our Testimonials
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col rounded-xl border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h3 className="text-base font-semibold text-gray-800">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 flex-grow">
                        {testimonial.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
