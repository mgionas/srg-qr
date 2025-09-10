import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '../ui/button'
import { EllipsisVertical } from 'lucide-react'
import { PixelImage } from '@/components/ui/shadcn-io/pixel-image'
import { Item } from '@/payload-types'

export default function CardItem({ item }: { item: Item }) {
  return (
    <Card key={item.id} className="h-[308px] w-[296px] gap-[10px] rounded-[12px] border-none p-2">
      <CardHeader className="p-0">
        <div className="flex h-[160px] w-full justify-center overflow-hidden rounded-md">
          <PixelImage
            src={
              typeof item.venue === 'object' &&
              item.venue.logo !== null &&
              item.venue.logo !== undefined &&
              typeof item.venue.logo === 'object' &&
              typeof item.venue.logo.url === 'string' &&
              item.venue.logo.url
                ? item.venue.logo.url
                : '/heroImage.png'
            }
            grid="8x8"
          />
        </div>
      </CardHeader>
      <CardContent className="flex h-[122px] w-full flex-col gap-[18px] px-1 py-3">
        <div className="flex h-[44px] flex-col gap-[3px]">
          <h3 className="text-xs leading-6 font-[400] text-[#717171]">
            {typeof item.category === 'object' &&
            item.category !== null &&
            item.category !== undefined &&
            typeof item.category.name === 'string'
              ? item.category.name
              : 'No Category'}
          </h3>
          <p className="text-base font-semibold">{item.name || 'No Name'}</p>
        </div>
        <div className="flex h-9 gap-2">
          <Button className="inline-block w-[228px] bg-[#D9D9D9] py-2 hover:cursor-pointer">
            Open
          </Button>
          <Button className="w-9 hover:cursor-pointer" variant="secondary">
            <EllipsisVertical />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
