'use client'
import { Banner } from '@/payload-types'
import { MoveRight } from 'lucide-react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../ui/button'
import BlurText from '../ui/shadcn-io/blur-text'
import Link from 'next/link'
import 'swiper/css'

export default function Hero({ bannersData }: { bannersData: Banner[] }) {
  return (
    <section className="xs:gap-4 xs:h-[340px] relative flex w-full flex-col items-center sm:gap-5 md:h-[540px] md:gap-[10px]">
      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="z-50 h-screen w-full" // Full width and height
        style={{}}
      >
        {bannersData.length > 0 ? (
          bannersData.map((banner) => {
            return (
              <SwiperSlide className="flex h-full w-full items-center justify-center">
                {/* Background image with brightness applied only to background */}
                <div
                  className="imageSize absolute inset-0 -z-10 bg-no-repeat object-cover brightness-85"
                  style={{
                    backgroundImage: `url('${
                      typeof banner.image === 'object' ? banner.image?.url : '/heroImage.png'
                    }')`,
                  }}
                ></div>
                <div className="xs:flex xs:h-[100px] xs:flex-col xs:gap-2 xs:mt-36 justify-between px-12 sm:gap-5 md:mt-60 lg:justify-center xl:mt-36 xl:h-[400px]">
                  <BlurText
                    text={banner.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="xs:text-2xl xs:w-[200px] h-fit font-bold text-white uppercase drop-shadow-lg md:w-[300px] md:text-[40px] lg:w-[390px] lg:tracking-normal"
                  />
                  <Button
                    asChild
                    variant={'outline'}
                    className="xs:w-[120px] xs:h-7 xs:py-1 xs:pl-2 xs:text-xs size-5 rounded-4xl border-0 bg-black text-white hover:cursor-pointer lg:has-[>svg]:pr-3 lg:has-[>svg]:pl-[18px]"
                  >
                    <Link href={banner.url || '#'}>
                      Read more <MoveRight />
                    </Link>
                  </Button>
                </div>
              </SwiperSlide>
            )
          })
        ) : (
          // Returning Default Slide if no banners are available
          <SwiperSlide className="flex h-full w-full items-center justify-center">
            {/* Background image with brightness applied only to background */}
            <div
              className="imageSize absolute inset-0 -z-10 bg-no-repeat brightness-85"
              style={{
                backgroundImage: `url('/heroImage.png')`,
              }}
            ></div>
            <div className="xs:flex xs:flex-col xs:gap-2 xs:mt-40 justify-center px-12 sm:mt-[130px] sm:h-[200px] sm:gap-5 xl:h-[400px]">
              <BlurText
                text="New Umami Menu"
                delay={150}
                animateBy="words"
                direction="top"
                className="xs:text-base xs:w-[160px] xs:leading-7 font-bold text-white uppercase drop-shadow-lg sm:text-lg lg:w-[200px] lg:text-2xl lg:leading-7 lg:tracking-normal xl:h-[145px] xl:w-[390px] xl:text-[40px] xl:leading-12"
              />
              <Button
                asChild
                variant={'outline'}
                className="xs:w-[100px] xs:h-7 xs:py-1 xs:pl-2 xs:text-xs size-5 rounded-4xl border-0 bg-black text-white hover:cursor-pointer lg:w-[120px] lg:has-[>svg]:pr-3 lg:has-[>svg]:pl-[18px]"
              >
                <Link href={'#'}>
                  Read more <MoveRight />
                </Link>
              </Button>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}
