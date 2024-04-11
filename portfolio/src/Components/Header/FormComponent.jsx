"use client";
import { useRef, forwardRef, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { CircularProgress } from "@mui/material";

const FormComponent = forwardRef(({ sendEmail }, ref) => {
  const progressRef = useRef();

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("idle");

  return (
    <Form.Root ref={ref} onSubmit={sendEmail}>
      <Form.Field className="mb-7">
        <div className="flex flex-col gap-2">
          <Form.Label className="text-lg font-semibold">Name</Form.Label>
          <Form.Message className="text-red-400" match={"valueMissing"}>
            Please Enter your name
          </Form.Message>
          <Form.Message className="text-red-400" match={"typeMismatch"}>
            Please provide a valid name
          </Form.Message>
          <Form.Control className="border-4 rounded-md h-12 p-2" asChild>
            <input type="text" name="user_name" required />
          </Form.Control>
        </div>
      </Form.Field>
      <Form.Field className="mb-7">
        <div className="flex flex-col gap-2">
          <Form.Label className="text-lg font-semibold">Email</Form.Label>
          <Form.Message className="text-red-400" match={"valueMissing"}>
            Please Enter your email
          </Form.Message>
          <Form.Message className="text-red-400" match={"typeMismatch"}>
            Please provide a valid email
          </Form.Message>
          <Form.Control
            className="border-4 rounded-md h-12 p-2 transition-all"
            asChild>
            <input type="email" name="user_email" required />
          </Form.Control>
        </div>
      </Form.Field>
      <Form.Field className="mb-7">
        <div className="flex flex-col gap-2">
          <Form.Label className="text-lg font-semibold">Message</Form.Label>
          <Form.Message className="text-red-400" match="valueMissing">
            Please enter a message
          </Form.Message>
          <Form.Control className="border-4 rounded-md h-32 w-full p-2" asChild>
            <textarea
              name="message"
              id=""
              cols="30"
              className="resize-none"
              rows="10"></textarea>
          </Form.Control>
        </div>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className="p-3 bg-black text-white rounded-md flex flex-row gap-3 items-center relative hover:bg-slate-600 transition-all"
          style={{ marginTop: 10 }}
          type="submit"
          onClick={() => {
            progressRef.current.classList.toggle("hidden");
          }}>
          Send Message
          <CircularProgress
            ref={progressRef}
            color="error"
            size="1.5rem"
            className="block hidden"
          />
        </button>
      </Form.Submit>
    </Form.Root>
  );
});
export default FormComponent;
