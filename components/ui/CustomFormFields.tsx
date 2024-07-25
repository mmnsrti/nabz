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
import Image from "next/image";
type CustomProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
};
const RenderField = ({ props, field }: { field: any; props: CustomProps }) => {
  const { control, fieldType, name, label, iconSrc, iconAlt,placeholder,disabled } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              width={18}
              height={18}
              className="ml-3"
            />
          )}
          <FormControl>
            <Input
              {...field}
              id={field.name}
              placeholder={placeholder}
              disabled={disabled}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    default:
      break;
  }
};
const CustomFormFields = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="sr-only" htmlFor={field.name}>
              {label}
            </FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormFields;
