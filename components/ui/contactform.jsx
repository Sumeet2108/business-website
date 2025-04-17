"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
const apiUrl = process.env.NEXT_PUBLIC_URL;

const Contactform = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const textareaRef = useRef(null);

  // const handleResize = () => {
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "auto";
  //     textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  //   }
  // };

  // useEffect(() => {
  //   handleResize();
  // }, []);

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Display a success message
      alert("Your message has been sent!");
    } catch (error) {
      // Handle error
      alert("Error: " + error.message);
    }
  };

  return (
    <div className=" max-w-full grid sm:grid-cols-2 items-start gap-16 px-10 md:px-52 py-10 md:py-20 mx-auto bg-black font-[sans-serif]">
      <div>
        <h1 className="text-[#FFA500] text-3xl font-semibold">
          Let&apos;s Talk
        </h1>
        <p className="text-sm text-white mt-4">
          Send us your enquiries stating your requirements our team will get
          back to you soon!
        </p>
        <div>
          <div className="mt-6">
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#FFA500] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="mailto:info@akengineersplastic.in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#ffffff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  href="mailto:info@akengineersplastic.in"
                  className="text-[#FFA500] text-md ml-4"
                >
                  <small className="block">Mail</small>
                  <strong className=" text-sm md:text-base text-white">
                    info@akengineersplastic.in
                  </strong>
                </a>
              </li>

              <li className="flex items-center mt-2">
                <div className="bg-[#FFA500] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#ffffff"
                      viewBox="0 0 511 512"
                    >
                      <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0" />
                    </svg>
                  </a>
                </div>
                <a href="linkedin.com" className="text-[#FFA500] text-md ml-4">
                  <small className="block">LinkedIn</small>
                  <strong className=" text-sm md:text-base text-white">
                    A.K. Engineers
                  </strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="ml-auto space-y-4"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#FFA500] focus:bg-white"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#FFA500] focus:bg-white"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#FFA500] focus:bg-white"
          {...register("company")}
        />

        <input
          id="phone_no"
          name="Phone_no"
          type="tel"
          placeholder="Phone number"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#FFA500] focus:bg-white"
          maxLength={10}
          {...register("phone_no", {
            required: "Phone no. is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Phone number must be 10 digits and only numbers",
            },
          })}
        />

        {/* Error Message */}
        {errors.phone_no && (
          <p className="text-red-500 text-xs">{errors.phone_no.message}</p>
        )}

        <div>
          <textarea
            id="description"
            name="description"
            placeholder="Message"
            rows="4"
            className="resize-none w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-[#FFA500] focus:bg-white min-h-[45px]"
            {...register("description")}
            // ref={textareaRef}
            // onInput={handleResize}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-[#FFA500] hover:bg-orange-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contactform;
