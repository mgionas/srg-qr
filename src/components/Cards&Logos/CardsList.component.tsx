import { PaginatedDocs } from 'payload'
import CardItem from './CardItem'
import { Item } from '@/payload-types'

export default function CardsList({
  itemsByCompany,
  selectedCategory,
}: {
  itemsByCompany: PaginatedDocs<Item>
  selectedCategory: string | undefined
}) {
  const filteredItems = selectedCategory
    ? itemsByCompany.docs.filter((item) => {
        if (typeof item.category === 'object') {
          return item.category?.id === selectedCategory
        }
      })
    : itemsByCompany.docs
  return (
    <div className="xs:grid-cols-1 xs:h-full xs:justify-items-center grid h-[632px] gap-4 sm:w-[600px] sm:grid-cols-2 lg:w-[930px] lg:grid-cols-3 xl:w-[1232px] xl:grid-cols-4 xl:grid-rows-2">
      {filteredItems.map((item) => {
        return <CardItem key={item.id} item={item} />
      })}
    </div>
  )
}
