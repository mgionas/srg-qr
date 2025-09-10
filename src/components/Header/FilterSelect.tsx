'use client'

import { fetchCategories } from '@/actions/fetchCategories'
import { CustomSelectTrigger, Select, SelectContent, SelectItem } from '@/components/ui/select'
import { Category } from '@/payload-types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function FilterSelect() {
  const router = useRouter()
  const [categoriesData, setCategoriesData] = useState<any>(null)

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories()
      setCategoriesData(data)
    }
    loadCategories()
  }, [])

  const handleValueChange = (value: string) => {
    router.push(`/?category=${value}`)
    // You can add more logic here
  }

  if (!categoriesData) {
    return null
  }

  return (
    <Select onValueChange={handleValueChange}>
      <CustomSelectTrigger className="w-[280px]"></CustomSelectTrigger>
      <SelectContent>
        <SelectItem value=" " className="hover:cursor-pointer">
          All Categories
        </SelectItem>
        {categoriesData.docs.map((category: Category) => {
          return (
            <SelectItem value={category.id} key={category.id} className="hover:cursor-pointer">
              {category.name}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
