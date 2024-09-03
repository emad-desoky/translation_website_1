import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { useRouter } from "next/router";

interface BlogData {
  id: string;
  title: string;
  content: JSX.Element;
}

export function DataBlog() {
  const router = useRouter();
  const data: BlogData[] = [
    {
      id: "blog1",
      title: "4 Dec 2022",
      content: (
        <div>
          <p
            onClick={() => router.push(`/blogs/${"blog1"}`)}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-mb-8 font-bold md:text-2xl mb-4 text-right cursor-pointer hover:underline hover:text-blue-500"
          >
            شركة الفا بيتو للترجمة المعتمدة في مصر والشرق الأوسط
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/journy.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]:"
            />
            <Image
              src="/BLOG2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "blog2",
      title: "1 Dec 2022",
      content: (
        <div>
          <p
            onClick={() => router.push(`/blogs/${"blog2"}`)}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-mb-8 font-bold md:text-2xl mb-4 text-right cursor-pointer hover:underline hover:text-blue-500"
          >
            مسيرة شركة ألفا بيتو للترجمة المعتمدة: من البداية إلى الريادة، محطات
            بارزة وإنجازات ملهمة
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/blog3.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]:"
            />
            <Image
              src="/blog8.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "blog3",
      title: "2 NOV 2022",
      content: (
        <div>
          <p
            onClick={() => router.push(`/blogs/${"blog3"}`)}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-mb-8 font-bold md:text-2xl mb-4 text-right cursor-pointer hover:underline hover:text-blue-500"
          >
            تطور شركة ألفا بيتو للترجمة المعتمدة: من النشأة إلى التميز، أبرز
            المحطات والإنجازات البارزة
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/blo7.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/blog6.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
