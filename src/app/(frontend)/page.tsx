import Hero from '@/components/Hero/Hero.component'
import { Separator } from '@/components/ui/separator'
import CardsWithLogos from '@/components/Cards&Logos/CardsWithLogos.components'
import { fetchBanners } from '@/actions/fetchBanners'
import { cookies } from 'next/headers'
import { fetchItemsByCompanyId } from '@/actions/fetchItemsByCompanyId'

interface PageProps {
  searchParams: { category?: string }
}

export default async function HomePage({ searchParams }: PageProps) {
  const banners = await fetchBanners()
  const cookieStore = await cookies()
  const activeCompany = cookieStore.get('activeCompany')?.value
  const itemsByCompany = await fetchItemsByCompanyId(activeCompany)

  // Await searchParams before using
  const params = await searchParams
  const selectedCategory = params.category
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <Hero bannersData={banners.docs} />
      <Separator className="bg-transparent py-2" />
      <CardsWithLogos itemsByCompany={itemsByCompany} selectedCategory={selectedCategory} />
    </div>
  )
}
