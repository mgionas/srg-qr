export default async function VenuePage({
  params,
}: {
  params: Promise<{ company: string; venue: string[] }>
}) {
  const { company, venue } = await params
  console.log(company, venue)
  return (
    <div className="">
      <h1>Company: {company}</h1>
      <h2>Venue: {venue}</h2>
    </div>
  )
}
