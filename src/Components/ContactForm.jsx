"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../Components/ui/form";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Button } from "../Components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../Components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import Contact from "./Contact";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number required"),
  company: z.string().min(2, "Company name required"),
  service: z.enum(["web", "app"], {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "web",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await fetch("https://api.aakashlabs.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("API error");

      toast.success("Form submitted successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <div id="contact" className="mt-10">
        {/* Top component */}
        <div className="bg-blue-950 text-white py-20 px-6 text-center">
          <p className="text-lg mb-2">Contact Us</p>
          <h1 className="text-4xl font-bold">Get In Touch</h1>
        </div>

        <div className="flex gap-6 mt-4 md:flex-row items-start w-full">
          {/* Sidebar component */}
          <Contact />

          {/* Form Section */}
          <div className="w-full max-w-2xl mx-auto p-8 border-none rounded-md">
            <h1 className="text-4xl font-bold mb-4">Drop a Line</h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name and Email */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Full Name"
                            className="bg-sky-100 w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type="email"
                            className="bg-sky-100 w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone and Service */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Mobile No"
                            className="bg-sky-100 w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-sky-100 w-full">
                              <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="app">App Development</SelectItem>
                            <SelectItem value="digital">
                              Digital Marketing
                            </SelectItem>
                            <SelectItem value="seo">SEO</SelectItem>
                            <SelectItem value="cms">CMS/ERP</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Company */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Company Name"
                          className="bg-sky-100 w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Message Here"
                          className="bg-sky-100 w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="bg-blue-500 text-white md:left"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
