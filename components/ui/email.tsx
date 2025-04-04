import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
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
export function SheetDemo() {
  return (
    <>
      <div className="flex justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="bg-white dark:bg-slate-950 dark:text-white text-blue-600 dark:text-slate-50 flex justify-center items-center group relative overflow-hidden border-blue-400 dark:border-orange-400 mb-10"
              variant="outline"
            >
              <span className="group-hover:translate-x-40 group-hover:opacity-0 text-center transition-all opacity-100">
                Get in touch
              </span>
              <div className="translate-x-[-100%] group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform  text-white z-20 cursor-pointer bg-blue-400 dark:bg-orange-400">
                ✉️
              </div>
            </Button>
          </SheetTrigger>

          <SheetContent>
            {" "}
            {/* <SheetHeader> */}
            {/* <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div> */}
            {/* <SheetFooter> */}
            {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
            <SheetTitle className="flex justify-center text-blue-600 dark:text-orange-400">
              Contact Form
            </SheetTitle>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              className="needs-validation"
              noValidate
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />

              <div className="mb-4 mt-3">
                <label
                  htmlFor="full_name"
                  className="block ml-2 mb-2 text-md text-blue-600 dark:text-orange-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="full_name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-blue-300 dark:border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block ml-2 mb-2 text-md text-blue-600 dark:text-orange-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-blue-300 dark:border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block ml-2 mb-2 text-md text-blue-600 dark:text-orange-400"
                >
                  Your Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full h-28 px-3 py-2 placeholder-gray-300 border border-blue-300 dark:border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-blue-600 dark:bg-orange-400 rounded-md focus:bg-blue-400 dark:focus:bg-orange-200 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
