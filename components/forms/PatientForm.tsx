"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFields from "../ui/CustomFormFields";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export enum FormFieldType {
    INPUT = 'input'
    ,CHECKBOX = 'checkbox'
    ,SELECT = 'select'
    ,TEXTAREA = 'textarea'
    ,PHONE_INPUT = 'phoneInput'
    ,DATE_PICKER = 'datePicker'
    ,SKELETON = 'skeleton'
}
const PatientForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Patient</h1>
          <p className="text-dark-700">Schedule your fist appointment</p>
        </section>
        <CustomFormFields 
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
          
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default PatientForm;
