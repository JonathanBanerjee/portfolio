import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <Avatar>
      <AvatarImage
        src="/LinkedInProfile.png"
        alt="Profile photo of Jonathan Banerjee"
      />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}
