import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const RequestDemoButton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const subject = encodeURIComponent("Investwell Demo");
  const body = encodeURIComponent(
    "Dear Elisha,\n" +
      "\n" +
      "I would be grateful for the opportunity to see Investwell in action. Are you available for a demo sometime next week? I'm free on \n" +
      "\n" +
      "Thanks and kind Regards,\n" +
      "\n" +
      "Sincerely,",
  );

  const emailAddress = "elisha@investwell.fr";

  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  return (
    <a href={mailtoLink} target={"_blank"} className={"block"}>
      <Button className={cn(className, children && "flex items-center gap-3")}>
        Request Demo
        {children}
      </Button>
    </a>
  );
};

export default RequestDemoButton;
