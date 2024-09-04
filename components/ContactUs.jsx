import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    numberOfDocuments: Yup.number()
      .positive("Number of documents must be a positive number")
      .integer("Number of documents must be an integer")
      .required("Number of documents is required"),
  });

  // Initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    numberOfDocuments: "",
  };

  // Submit handler for the form
  const handleSubmit = (values) => {
    console.log("Form values:", values);
    // You can handle form submission here (e.g., send data to an API)
  };

  return (
    <div className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-950 text-gray-800 dark:text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-gray-900 dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl flex flex-col md:flex-row md:space-x-8 w-full md:w-2/3 mx-auto">
          {/* Left Side */}
          <div className="md:w-[35%] flex flex-col items-start space-y-6">
            <div className="flex space-x-3 mb-6">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            </div>
            <h2 className="text-3xl font-extrabold mb-6">Chat to Our Team</h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-6 w-full">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-300"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-300"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold text-gray-300"
                    >
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="phone-number"
                      name="phoneNumber"
                      className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Number of Documents Field */}
                  <div>
                    <label
                      htmlFor="number-of-documents"
                      className="block text-sm font-semibold text-gray-300"
                    >
                      Number of Documents
                    </label>
                    <Field
                      type="text"
                      id="number-of-documents"
                      name="numberOfDocuments"
                      className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="numberOfDocuments"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 w-full"
                  >
                    Get in Touch
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right Side */}
          <motion.div
            className="md:w-[65%] flex flex-col items-center md:items-start mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative bg-gray-800 rounded-lg p-6 shadow-lg w-full h-full"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/translator.png"
                alt="Company Logo"
                width={120}
                height={120}
                className="absolute top-4 right-4"
              />
              <img
                src="/hero.jpg"
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-lg border border-gray-700"
              />
              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-gray-300">
                  We are pleased to help you!
                </p>
                <ul className="text-sm text-gray-400 space-y-2 mt-2 font-bold">
                  <li>✔️ 24/7 Customer Support</li>
                  <li>✔️ Multilingual Assistance</li>
                  <li>✔️ Customized Translation Services</li>
                  <li>✔️ Industry-Specific Expertise</li>
                  <li>✔️ Fast Turnaround Times</li>
                </ul>
              </div>
            </motion.div>
            <div className="text-center md:text-left mt-6">
              <p className="text-xl font-extrabold text-gray-500">
                ALFA
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                  BETO
                </span>
              </p>
              <p className="text-md text-slate-600 font-bold">
                MR/EHAB ALFABETO
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combined Section with Google Map */}
        <div className="bg-gray-900 dark:bg-gray-800 mt-12 p-6 md:p-8 rounded-lg shadow-xl w-full md:w-2/3 mx-auto">
          <h3 className="text-2xl font-extrabold text-white mb-4 text-center md:text-left">
            Better yet, see us in person!
          </h3>
          <p className="text-lg text-gray-400 mb-4 text-center md:text-left">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
          <div className="text-center md:text-left space-y-4">
            <p className="text-md text-gray-300 font-semibold">
              <span className="text-indigo-500">
                Alfabeto Certified Translation
              </span>
              <br />
              +201064689724
            </p>
            <p className="text-md text-gray-300 font-semibold">
              <span className="text-indigo-500">Hours:</span>
              <br />
              Open today: 09:00 am – 05:00 pm
            </p>
          </div>

          {/* Google Map with Dark Theme */}
          <div className="mt-8 w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5559241947567!2d31.23571111511364!3d30.046233281878045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841b1f0b6c1af%3A0xc8db6f53dd665b1!2sAlfabeto%20Certified%20Translation!5e0!3m2!1sen!2seg!4v1632968757262!5m2!1sen!2seg&maptype=roadmap&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels|visibility:off&style=feature:poi|element:geometry|color:0x2a2a2a&style=feature:road|element:geometry.fill|color:0x3c3c3c&style=feature:road|element:geometry.stroke|color:0x212121&style=feature:road.highway|element:geometry|color:0x3c3c3c&style=feature:road.highway.controlled_access|element:geometry|color:0x4e4e4e&style=feature:water|element:geometry|color:0x1f1f1f"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
