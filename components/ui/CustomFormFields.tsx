"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "../forms/PatientForm";
type CustomProps = {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
};
const CustomFormFields = ({ control, fieldType, name, label }: CustomProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX &&
            label (
              <FormLabel className="sr-only" htmlFor={field.name}>
                {label}
              </FormLabel>
            )}
        </FormItem>
      )}
    />
  );
};

export default CustomFormFields;
