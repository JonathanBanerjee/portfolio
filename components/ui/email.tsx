"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("subject", "New Submission from Web3Forms");

    if (!API_KEY) {
      console.error("API_KEY is not defined!");
      setResult("API Key is missing!");
      return;
    }
    formData.append("access_key", API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log("Success: Should show toast");
        toast.success("Your message has been sent.");
        form.reset();
        setIsOpen(false);
      } else {
        console.log("Error from API:", data);
        setResult(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again.", {
        action: {
          label: "Retry",
          onClick: () => form.handleSubmit(onSubmit)(),
        },
      });
    }
  };

  return (
    <div className="flex justify-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="bg-white dark:bg-slate-950 dark:text-white text-blue-600 dark:text-slate-50 flex justify-center items-center group relative overflow-hidden border-blue-400 dark:border-orange-400 mb-10"
            variant="outline"
            onClick={() => setIsOpen(true)}
          >
            <span className="group-hover:translate-x-40 group-hover:opacity-0 text-center transition-all opacity-100">
              Get in touch
            </span>
            <div className="translate-x-[-100%] group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform text-white z-20 cursor-pointer bg-blue-400 dark:bg-orange-400">
              ✉️
            </div>
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetTitle className="flex justify-center text-blue-600 dark:text-orange-400">
            Contact Form
          </SheetTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="needs-validation"
              noValidate
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-4 mt-3">
                    <FormLabel className="block ml-2 mb-2 text-md text-blue-600 dark:text-orange-400">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-blue-300 dark:border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300"
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
                  <FormItem className="mb-4">
                    <FormLabel className="block ml-2 mb-2 text-md text-blue-600 dark:text-orange-400">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-blue-300 dark:border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel className="block ml-2 mb-2 text-md text-blue-600 dark:text-orange-400">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Your Message"
                        className="w-full h-28 px-3 py-2 placeholder-gray-300 border border-blue-300 dark:border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SheetFooter>
                <Button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-blue-600 dark:bg-orange-400 rounded-md focus:bg-blue-400 dark:focus:bg-orange-200 focus:outline-none"
                >
                  Send Message
                </Button>
              </SheetFooter>
              {result && (
                <span className="mt-4 block text-center">{result}</span>
              )}
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
