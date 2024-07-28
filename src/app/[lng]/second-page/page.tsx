import Link from 'next/link'

interface PageProps {
  params: {
    lng: string;
  };
}

const Page: React.FC<PageProps> = ({ params: { lng } }) => {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}

export default Page;
