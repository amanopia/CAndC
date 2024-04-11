import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

import emailjs from "@emailjs/browser";
import FormComponent from "./FormComponent";
import { toast } from "../ui/use-toast";

// Toast

const AlertDialogComponent = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const YOUR_SERVICE_ID = "service_6onhd0j";
    const YOUR_PUBLIC_KEY = "8oxFtGEZUcVo-nqVg";
    const YOUR_TEMPLATE_ID = "contact_form";
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("Sent");
          <div className="border-l-emerald-400 border-l-4 drop-shadow-lg">
            {toast({
              title: "Message Sent",
              description: "I will reply shortly",
            })}
          </div>;
          setIsOpen(false);
        },
        (error) => {
          <div className="bg-red-400 text-white">
            {toast({
              variant: "destructive",
              title: "Error sending message",
              description:
                "Try again later or go to About section and reach me via linkedin",
            })}
          </div>;
        }
      );
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button className="text-sm my-2 md:text-xs flex items-center gap-x-2 bg-black px-4 py-2 text-white rounded-md hover:invert border-2 transition-all border-white lg:text-sm 2xl:text-lg">
          <img src={image} alt="message" className="h-4 lg:h-5 2xl:h-6" />
          Message
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Hiring for the team?
        </AlertDialogHeader>
        <AlertDialogDescription className="text-lg mb-5">
          Drop me a message and let's discuss how my skills can contribute to
          your team!
        </AlertDialogDescription>
        <FormComponent ref={form} sendEmail={sendEmail}></FormComponent>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
