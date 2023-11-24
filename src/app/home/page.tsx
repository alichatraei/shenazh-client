"use client";
import { Suspense } from "react";
import LoadingComponent from "../../components/loading/Loading";
import Layout from "@/src/layouts/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Home() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Layout>
        <div className="m-5 overflow-x-hidden">
          <Carousel
            className="rounded-lg"
            showArrows={false}
            showStatus={false}
          >
            <div className="rounded-md">
              <Image
                width={400}
                height={200}
                src="https://api.shenazh.com/api/banner/1.jpg"
                alt="Slide 1"
              />
            </div>
            <div>
              <Image
                width={400}
                height={200}
                src="https://api.shenazh.com/api/banner/2.jpg"
                alt="Slide 2"
              />
            </div>
            <div>
              <Image
                width={400}
                height={200}
                src="https://api.shenazh.com/api/banner/3.jpg"
                alt="Slide 3"
              />
            </div>
            <div>
              <Image
                width={400}
                height={200}
                src="https://api.shenazh.com/api/banner/4.jpg"
                alt="Slide 3"
              />
            </div>
            <div>
              <Image
                width={400}
                height={200}
                src="https://api.shenazh.com/api/banner/5.jpg"
                alt="Slide 3"
              />
            </div>
          </Carousel>

          <div className="flex flex-1 justify-between items-center ">
            <span>محصولات پیشنهادی</span>
            <span className="text-[#EC682B]">مشاهده همه</span>
          </div>
          <div className=" overflow-x-auto flex  gap-4 p-4 ">
            <div className="card w-72 h-60 bg-base-100 shadow-md flex-shrink-0 ">
              <figure>
                <Image
                  width={400}
                  height={300}
                  src="https://api.shenazh.com/api/banner/2.jpg"
                  alt="Shenazh-photo"
                />
              </figure>
              <div className="card-body h-24 p-4 flex items-start justify-center">
                <p className="text-lg">سرامیک کف حیاط طوسی</p>
                <div className=" text-sm flex flex-1 items-center justify-between w-full">
                  <p>موجودی 200</p>
                  <span>200,000 تومان</span>
                </div>
              </div>
            </div>
            <div className="card w-72 h-60 bg-base-100 shadow-md flex-shrink-0 ">
              <figure>
                <Image
                  width={400}
                  height={300}
                  src="https://api.shenazh.com/api/banner/2.jpg"
                  alt="Shenazh-photo"
                />
              </figure>
              <div className="card-body h-24 p-4 flex items-start justify-center">
                <p className="text-lg">سرامیک کف حیاط طوسی</p>
                <div className=" text-sm flex flex-1 items-center justify-between w-full">
                  <p>موجودی 200</p>
                  <span>200,000 تومان</span>
                </div>
              </div>
            </div>
            <div className="card w-72 h-60 bg-base-100 shadow-md  flex-shrink-0">
              <figure>
                <Image
                  width={400}
                  height={300}
                  src="https://api.shenazh.com/api/banner/2.jpg"
                  alt="Shenazh-photo"
                />
              </figure>
              <div className="card-body h-24 p-4 flex items-start justify-center">
                <p className="text-lg">سرامیک کف حیاط طوسی</p>
                <div className=" text-sm flex flex-1 items-center justify-between w-full">
                  <p>موجودی 200</p>
                  <span>200,000 تومان</span>
                </div>
              </div>
            </div>
            <div className="card w-72 h-60 bg-base-100 shadow-md flex-shrink-0">
              <figure>
                <Image
                  width={400}
                  height={300}
                  src="https://api.shenazh.com/api/banner/2.jpg"
                  alt="Shenazh-photo"
                />
              </figure>
              <div className="card-body h-24 p-4 flex items-start justify-center">
                <p className="text-lg">سرامیک کف حیاط طوسی</p>
                <div className=" text-sm flex flex-1 items-center justify-between w-full">
                  <p>موجودی 200</p>
                  <span>200,000 تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-5 overflow-x-hidden">
          <Carousel className="rounded-lg" showStatus={false}>
            <Image
              width={400}
              height={200}
              src="https://api.shenazh.com/api/banner/1.jpg"
              alt="Slide 9"
            />
          </Carousel>
        </div>
      </Layout>
    </Suspense>
  );
}
