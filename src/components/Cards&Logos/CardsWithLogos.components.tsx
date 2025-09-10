import { Item } from '@/payload-types'
import { Separator } from '../ui/separator'
import CardsList from './CardsList.component'
import Logos from './Logos.components'
import { PaginatedDocs } from 'payload'
import { fetchLogos } from '@/actions/fetchLogos'

export default async function CardsWithLogos({
  itemsByCompany,
  selectedCategory,
}: {
  itemsByCompany: PaginatedDocs<Item>
  selectedCategory: string | undefined
}) {
  const logosData = await fetchLogos()
  return (
    <section className="xs:flex xs:flex-col xs:h-full h-[990px] gap-3 p-6 sm:items-center lg:items-center">
      <CardsList itemsByCompany={itemsByCompany} selectedCategory={selectedCategory} />
      <Separator className="xs:py-4 bg-transparent xl:py-12" />
      <Logos logosData={logosData} />
      <Separator className="xs:py-2 bg-transparent xl:py-3" />
      <p className="text-center text-sm font-medium text-[#B1B1B1]">
        © Silk Hospitality. All rights reserved.
      </p>
      <Separator className="xs:py-1 bg-transparent xl:py-2" />
    </section>
  )
}
