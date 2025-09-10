import { fetchCompanies } from '@/actions/fetchCompanies'
import { CustomComboBox } from '../Hero/CustomComboBox.component'
import { FilterSelect } from './FilterSelect'

export default async function NavBar() {
  const companiesData = await fetchCompanies()
  return (
    <div className="xs:h-[82px] absolute z-10 m-6 flex w-[calc(100%-48px)] items-center justify-between rounded-xl bg-white p-4">
      <div className="xs:h-6 flex w-[195px] items-center gap-2 xl:h-[50px]">
        <CustomComboBox teams={companiesData.docs} />
      </div>
      <FilterSelect />
    </div>
  )
}
