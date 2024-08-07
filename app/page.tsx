import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen h-screen max-h-screen ">
    <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/logo-removebg-preview.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-8 h-32 w-fit invert-colors"

          />

          <PatientForm/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Nabz
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      /> */}
    </div>
  );
}
