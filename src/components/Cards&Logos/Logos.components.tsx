'use client'
import Image from 'next/image'
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/shadcn-io/marquee'
export default function Logos({ logosData }: { logosData: any }) {
  return (
    <Marquee>
      <MarqueeContent className="flex h-[124px] w-full items-center overflow-x-hidden rounded-[12px] bg-white py-12">
        {logosData.docs.map((logo: any) => (
          <MarqueeItem className="" key={logo.id}>
            <Image
              src={logo.image.url}
              alt={logo.name}
              width={144}
              height={28}
              className="mx-auto h-[28px] w-[144px] object-contain"
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  )
}
