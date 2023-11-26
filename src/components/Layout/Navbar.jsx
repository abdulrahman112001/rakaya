"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomNavbar from "./CustomNavbar";

export function Navbar() {
  const router = useRouter();
  console.log("ffff", router);
  const cc = window.pathname
  console.log("🚀 ~ file: Navbar.jsx:11 ~ Navbar ~ cc:", cc)

  return (
    <>
      <nav className=" d-flex  navbar w-full flex relative top-0 left-0 py-[15px] px-0 z-[99] navbar flex-wrap items-center justify-between">
        <div className="container px-3 mx-auto md:px-20">
          <div className="flex items-center justify-between w-full contain">
            <div className={``}>
              <Image
                src={"https://rakaya.co/images/logo/logo.png"}
                width="100"
                height="100"
                alt="logo"
              />
            </div>

            <div className={`hidden md:block`}>
              <ul className="flex flex-row items-end justify-center w-full navbar-nav gap-x-10 ">
                <li className={`nav-item`}>
                  <Link
                    href="/"
                    as="/"
                    className={`font-bold ${
                      router.pathname === "/"
                        ? "text-primary"
                        : " text-secondary"
                    } hover:text-[#c9b171]`}
                  >
                    الرئيسية
                  </Link>
                </li>

                <li className={`nav-item `}>
                  <Link
                    href="/About"
                    className={`font-bold ${
                      router.pathname === "/About"
                        ? "text-primary"
                        : " text-secondary"
                    } hover:text-[#c9b171]`}
                  >
                    من نحن
                  </Link>
                </li>

                <li className={`nav-item `}>
                  <Link
                    href="/values"
                    className={`font-bold ${
                      router.pathname === "/values"
                        ? "text-primary"
                        : " text-secondary"
                    } hover:text-[#c9b171]`}
                  >
                    قيمنا
                  </Link>
                </li>

                <li className={`nav-item `}>
                  <Link
                    href="/services"
                    className={`font-bold ${
                      router.pathname === "/services"
                        ? "text-primary"
                        : " text-secondary"
                    } hover:text-[#c9b171]`}
                  >
                    خدماتنا
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link
                    href="/partners"
                    className={`font-bold ${
                      router.pathname === "/partners"
                        ? "text-primary"
                        : " text-secondary"
                    } hover:text-[#c9b171]`}
                  >
                    شركائنا
                  </Link>
                </li>

                <li className={`nav-item `}>
                  <Link
                    href="/"
                    className={`font-bold ${
                      router.pathname === "/panel"
                        ? "text-primary"
                        : " text-secondary"
                    } hover:text-[#c9b171]`}
                  >
                    البوابة الإلكترونية
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              <CustomNavbar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
