export default async function CompanyPage({ params }: { params: Promise<{ company: string }> }) {
  const { company } = await params
  console.log(company)
  return <div className="">company page: {company}</div>
}
