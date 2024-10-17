"use client";
import { buttonVariants } from "./components/ui/button";
import React from "react";
import { motion } from "framer-motion"; 
import Link from "next/link";
import { cn } from "@/lib/utils"; 


export default async function Home() {

  const leftToRightVariants = {
    hidden: { scale: 1, opacity: 0, x: -100 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const rightToLeftVariants = {
    hidden: { scale: 1, opacity: 0, x: 100 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <main className="flex flex-col items-center">
        <>
          <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <motion.div
              className="container flex max-w-[64rem] flex-col items-center gap-4 text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                ease: "easeInOut",
              }}
            >
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400 text-transparent bg-clip-text font-bold">
                Track your finances, focus on what is important
              </h1>

              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Managing your money is now easier than ever. Visualize your
                budget in a quick and easy way.
              </p>
              <div className="space-x-4">
                <Link
                  href="/signin"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "transition-transform duration-300 ease-in-out hover:text-white hover:shadow-lg transform hover:scale-105"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </section>
          <section className="container space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-32 flex flex-col gap-12 md:gap-48">
            <motion.div
              className="animated-text flex flex-col gap-4 md:flex-row-reverse items-center justify-around"
              initial="hidden"
              whileInView="visible"
              variants={leftToRightVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl text-emerald-900 font-bold text-center">
                Everything you need to manage your finances
              </h1>
              <img
                src="https://ik.imagekit.io/manuelalferez/flowinance/Group%207_QWIwA4HdR.png?updatedAt=1699611329205"
                width={10}
                className="w-2/3"
              />
            </motion.div>

            <motion.div
              className="animated-text flex flex-col gap-4 md:flex-row items-center justify-around"
              initial="hidden"
              whileInView="visible"
              variants={rightToLeftVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl text-emerald-900 font-bold text-center">
                Upload and categorize your transactions in a few clicks using AI
                ✨
              </h1>
              <img
                src="https://ik.imagekit.io/manuelalferez/flowinance/Group%208_Xna5E6_TA.png?updatedAt=1699611329296"
                width={10}
                className="w-2/3"
              />
            </motion.div>

            <motion.div
              className="animated-text flex flex-col gap-4 md:flex-row-reverse items-center justify-around"
              initial="hidden"
              whileInView="visible"
              variants={leftToRightVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl text-emerald-900 font-bold text-center">
                Visualize all your transactions in one place
              </h1>
              <img
                src="https://ik.imagekit.io/manuelalferez/flowinance/Group%2010_Vk1VcIZ_A.png?updatedAt=1699611329310"
                width={10}
                className="w-2/3"
              />
            </motion.div>

            <motion.div
              className="animated-text flex flex-col gap-4 md:flex-row items-center justify-around"
              initial="hidden"
              whileInView="visible"
              variants={rightToLeftVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl text-emerald-900 font-bold text-center">
                Multi-currency support facilitates working with various global
                currencies
              </h1>
              <img
                src="https://ik.imagekit.io/manuelalferez/flowinance/Group%209_-UJANJ6Ik.png?updatedAt=1699611329268"
                width={10}
                className="w-3/6"
              />
            </motion.div>
          </section>
          <section
            id="features"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.3 }} // Scroll trigger settings
            >
              <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="animated-text font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                  Features
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  We are passionate about quality, and here are the exceptional
                  features that set us apart.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg hover:bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-10 w-10 fill-current"
                    >
                      <path
                        fill="currentColor"
                        d="M22 21H2V3h2v12.54L9.5 6L16 9.78l4.24-7.33l1.73 1L22 21Z"
                      />
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold">Analyze spend trends</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your spending trends in real time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg hover:bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-10 w-10 fill-current"
                    >
                      <path
                        fill="currentColor"
                        d="M11 14.825V18q0 .425.288.713T12 19q.425 0 .713-.288T13 18v-3.175l.9.9q.15.15.338.225t.375.063q.187-.013.362-.088t.325-.225q.275-.3.288-.7t-.288-.7l-2.6-2.6q-.15-.15-.325-.212T12 11.425q-.2 0-.375.063t-.325.212l-2.6 2.6q-.3.3-.287.7t.312.7q.3.275.7.288t.7-.288l.875-.875ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.588 1.413T18 22H6Zm7-14V4H6v16h12V9h-4q-.425 0-.713-.288T13 8ZM6 4v5v-5v16V4Z"
                      />
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold">Upload files</h3>
                      <p className="text-sm text-muted-foreground">
                        Automatically upload your transactions from your bank in
                        format CSV.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg hover:bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                    >
                      <g fill="none" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4.667"
                          d="M19.036 44c-.98-3.195-2.458-5.578-4.435-7.147c-2.965-2.353-7.676-.89-9.416-3.318c-1.74-2.428 1.219-6.892 2.257-9.526c1.039-2.634-3.98-3.565-3.394-4.313c.39-.499 2.927-1.937 7.609-4.316C12.987 7.794 17.9 4 26.398 4C39.144 4 44 14.806 44 21.68c0 6.872-5.88 14.276-14.256 15.873c-.749 1.09.331 3.24 3.24 6.447"
                        />
                        <path
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M19.5 14.5c-.654 2.534-.46 4.314.583 5.339c1.042 1.024 2.818 1.695 5.328 2.01c-.57 3.269.125 4.802 2.083 4.6c1.958-.201 3.135-1.015 3.53-2.44c3.06.86 4.719.14 4.976-2.16c.385-3.45-1.475-6.201-2.238-6.201c-.762 0-2.738-.093-2.738-1.148s-2.308-1.65-4.391-1.65s-.83-1.405-3.69-.85c-1.907.37-3.055 1.203-3.443 2.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          d="M30.5 25.5c-1.017.631-2.412 1.68-3 2.5c-1.469 2.05-2.66 3.298-2.92 4.608"
                        />
                      </g>
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold">Artificial Intelligence</h3>
                      <p className="text-sm text-muted-foreground">
                        Automatic transaction categorization and file cleaning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg hover:bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-10 w-10 fill-current"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M6.286 19C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236c.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" />
                        <path
                          strokeLinejoin="round"
                          d="M12 16v6m0-6l2 2m-2-2l-2 2"
                        />
                      </g>
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold">Upload transactions</h3>
                      <p className="text-sm text-muted-foreground">
                        Wanna take it slow and upload transactions one by one?
                        Well, that&apos;s on the table too!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg hover:bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-10 w-10 fill-current"
                    >
                      <g
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M9.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0ZM12 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm0 4.5c-1.196 0-2.315.24-3.164.665c-.803.402-1.586 1.096-1.586 2.085v.063c-.002.51-.004 1.37.81 1.959c.378.273.877.448 1.495.559c.623.112 1.422.169 2.445.169s1.822-.057 2.445-.169c.618-.111 1.117-.286 1.495-.56c.814-.589.812-1.448.81-1.959V15c0-.99-.783-1.683-1.586-2.085c-.849-.424-1.968-.665-3.164-.665ZM8.75 15c0-.115.113-.421.757-.743c.6-.3 1.48-.507 2.493-.507s1.894.207 2.493.507c.644.322.757.628.757.743c0 .604-.039.697-.19.807c-.122.088-.373.206-.88.298c-.502.09-1.203.145-2.18.145c-.977 0-1.678-.055-2.18-.145c-.507-.092-.758-.21-.88-.298c-.152-.11-.19-.203-.19-.807Z" />
                        <path d="M8.723 2.051c1.444-.494 2.34-.801 3.277-.801c.938 0 1.833.307 3.277.801l.727.25c1.481.506 2.625.898 3.443 1.23c.412.167.767.33 1.052.495c.275.16.55.359.737.626c.185.263.281.587.341.9c.063.324.1.713.125 1.16c.048.886.048 2.102.048 3.678v1.601c0 6.101-4.608 9.026-7.348 10.224l-.027.011c-.34.149-.66.288-1.027.382c-.387.1-.799.142-1.348.142c-.55 0-.96-.042-1.348-.142c-.367-.094-.687-.233-1.027-.382l-.027-.011C6.858 21.017 2.25 18.092 2.25 11.99v-1.6c0-1.576 0-2.792.048-3.679c.025-.446.062-.835.125-1.16c.06-.312.156-.636.34-.9c.188-.266.463-.465.738-.625c.285-.165.64-.328 1.052-.495c.818-.332 1.962-.724 3.443-1.23l.727-.25ZM12 2.75c-.658 0-1.305.212-2.92.764l-.572.196c-1.513.518-2.616.896-3.39 1.21a7.137 7.137 0 0 0-.864.404a1.648 1.648 0 0 0-.208.139a.386.386 0 0 0-.055.05a.409.409 0 0 0-.032.074c-.02.056-.042.136-.063.248a7.438 7.438 0 0 0-.1.958c-.046.841-.046 2.015-.046 3.624v1.574c0 5.175 3.87 7.723 6.449 8.849c.371.162.586.254.825.315c.228.059.506.095.976.095s.748-.036.976-.095c.24-.06.454-.153.825-.315c2.58-1.127 6.449-3.674 6.449-8.849v-1.574c0-1.609 0-2.783-.046-3.624a7.423 7.423 0 0 0-.1-.958a1.738 1.738 0 0 0-.063-.248a.408.408 0 0 0-.032-.074a.385.385 0 0 0-.055-.05a1.64 1.64 0 0 0-.208-.14a7.135 7.135 0 0 0-.864-.402c-.774-.315-1.877-.693-3.39-1.21l-.573-.197C13.305 2.962 12.658 2.75 12 2.75Z" />
                      </g>
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold">Authentication</h3>
                      <p className="text-sm text-muted-foreground">
                        Authentication using{" "}
                        <b className="underline">
                          <a href="https://supabase.com" target="_blank">
                            Supabase
                          </a>
                        </b>
                        , ensuring that your data within our platform are
                        protected.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg hover:bg-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-10 w-10 fill-current"
                    >
                      <path
                        fill="currentColor"
                        d="M10.5 15h3l-.575-3.225q.5-.25.788-.725T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .575.288 1.05t.787.725L10.5 15Zm1.5 7q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"
                      />
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold">Security</h3>
                      <p className="text-sm text-muted-foreground">
                        Your information is completely encrypted: every
                        transaction field is inaccessible to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
          <section
            id="open-source"
            className="container py-8 md:py-12 lg:py-24"
          >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="animated-text font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Powered by
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Flowinance is powered by{" "}
                <b className="hover:underline">
                  <a href="https://nextjs.org" target="_blank">
                    Next.js
                  </a>
                </b>
                ,{" "}
                <b className="hover:underline">
                  <a href="https://supabase.com" target="_blank">
                    Supabase
                  </a>
                </b>{" "}
                ,{" "}
                <b className="hover:underline">
                  <a href="https://openai.com/" target="_blank">
                    OpenAI
                  </a>
                </b>{" "}
                and{" "}
                <b className="hover:underline">
                  <a href="https://ui.shadcn.com" target="_blank">
                    Shadcn.
                  </a>
                </b>
              </p>
            </div>
          </section>
        </>
      </main>
    </div>
  );
}
