export default async function ItemPage({
  params,
}: {
  params: Promise<{ company: string; venue: string[]; item: string }>
}) {
  const { company, venue, item } = await params
  console.log(company, venue, item)
  return (
    <div className="">
      <h1>Company: {company}</h1>
      <h2>Venue: {venue}</h2>
      <h3>Item: {item}</h3>
    </div>
  )
}
