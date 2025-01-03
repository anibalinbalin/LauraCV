'use client';

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";
import { generalData as generalDataEs } from "@/data/general";
import { generalData as generalDataEn } from "@/data/general.en";
import { contentData as contentDataEs } from "@/data/content";
import { contentData as contentDataEn } from "@/data/content.en";
import type { Content } from "@/data/content";
import { useLanguage } from "@/lib/language-context";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{item.title}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2 whitespace-pre-line">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Home() {
  const { language } = useLanguage();
  const generalData = language === 'es' ? generalDataEs : generalDataEn;
  const contentData = language === 'es' ? contentDataEs : contentDataEn;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] border-b border-slate-900/10 dark:border-slate-300/10">
        <div className="max-w-xl mx-auto px-6 py-4 flex justify-end">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <section className="flex items-center mt-4">
          <Image
            alt="Author"
            src={generalData.avatar}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
              {generalData.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <span className="text-sm text-slate-400 dark:text-slate-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </span>
            ) : null}
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-6 text-slate-900 dark:text-slate-100">
            {language === 'es' ? 'Datos Personales' : 'Personal Information'}
          </h3>
          <div className="flex flex-col gap-6">
            {generalData.personalInfo.map((info, index) => (
              <div className="flex" key={index}>
                <div className="mr-8 max-w-[180px] w-full text-slate-400 dark:text-slate-400">
                  {info.label}
                </div>
                <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {info.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  ) : (
                    info.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100">
            {language === 'es' ? 'Sobre mí' : 'About'}
          </h3>
          <div className="text-slate-600 dark:text-gray-400">
            <p>{generalData.about}</p>
          </div>
        </section>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
        <div className="px-6 absolute left-0 right-0 bottom-6 flex items-center justify-end">
          <span className="text-sm text-gray-400">last updated: January 2 - 2025</span>
        </div>
      </main>
    </>
  );
}
