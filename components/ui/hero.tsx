import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <Avatar>
      <AvatarImage
        src="LinkedInProfile.png"
        alt="Jonathan Banerjee Profile Photo"
      />
      <AvatarFallback>Jonathan Banerjee</AvatarFallback>
    </Avatar>
  );
}
