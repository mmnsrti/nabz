import RegisterFrom from '@/components/forms/RegisterFrom';
import { getUser } from '@/lib/actions/patient.action';
import Image from 'next/image';
import React from 'react'

const page = async({params:{userId}}:SearchParamProps) => {
  const user = await getUser(userId)
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[600px] flex-1 flex-col py-10">
          <Image
            src="/assets/logo-removebg-preview.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-32 w-fit invert-colors"
          />

          <RegisterFrom user={user} />
          <p className="copyright py-12">© 2024 Nabz</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[1000px]"
      />
    </div>
  );
};

export default page
