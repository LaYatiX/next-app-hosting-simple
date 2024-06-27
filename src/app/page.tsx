import Client from "@/components/client";

export default async function Home() {
  const message = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{message}</div>
      <Client />
    </main>
  );
}


async function getData() {
  const res = await fetch('https://us-central1-nest-node-mailer.cloudfunctions.net/api')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.text()
}
 

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const res = await fetch('https://us-central1-nest-node-mailer.cloudfunctions.net/api')
//   const message: string = await res.text()
//   // Pass data to the page via props
//   return { props: { message: message } }
// }) satisfies GetServerSideProps<{ message: string }>