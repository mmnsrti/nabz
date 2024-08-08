"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormFields from "../CustomFormFields";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import UserFormValidation from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.action";
import { FormFieldType } from "./PatientForm";
import { RadioGroup } from "../ui/radio-group";

const RegisterFrom = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);
      if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-dark-700">Let us know more about yourself</p>
        </section>
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
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
        <div className="flex flex-col gap-5 xl:flex-row">
          <CustomFormFields
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <CustomFormFields
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT}
            name="phone"
            label="Phone Number"
            placeholder="+98912123465"
            iconSrc="/assets/icons/phone.svg"
            iconAlt="phone"
          />
        </div>
        <div className="flex flex-col gap-5 xl:flex-row">
          {" "}
          <CustomFormFields
            control={form.control}
            fieldType={FormFieldType.DATE_PICKER}
            name="birthDate"
            label="Date of birth"
            placeholder="example@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <CustomFormFields
            control={form.control}
            fieldType={FormFieldType.SKELETON}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup>
                  <RadioGroup.Item
                    value="male"
                    className="radio"
                    {...field}
                    name={field.name}
                  />
                  <RadioGroup.Item
                    value="female"
                    className="radio"
                    {...field}
                    name={field.name}
                  />
                  <RadioGroup.Item
                    value="other"
                    className="radio"
                    {...field}
                    name={field.name}
                  />
                  
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 xl:flex-row"></div>
        <div className="flex flex-col gap-5 xl:flex-row"></div>
        <div className="flex flex-col gap-5 xl:flex-row"></div>{" "}
        <div className="flex flex-col gap-5 xl:flex-row"></div>{" "}
        <div className="flex flex-col gap-5 xl:flex-row"></div>
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};
export default RegisterFrom;
