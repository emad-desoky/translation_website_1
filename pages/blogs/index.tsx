import React from "react";
import { DataBlog } from "@/components/DataBlog";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DataBlog />
      <Footer />
    </>
  );
};

export default Blogs;
