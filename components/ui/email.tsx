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
              <span className="group-hover:translate-x-40 group-hover:opacity-0 text-center transition-all duration-500 opacity-100">
                Get in touch
              </span>
              <div className="translate-x-[-100%] group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform  text-white z-20 cursor-pointer bg-blue-400 dark:bg-orange-400">
                ✉️
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
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
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
