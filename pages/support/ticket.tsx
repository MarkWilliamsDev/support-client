import { useRouter } from 'next/dist/client/router'

function ticket() {
  const { id } = useRouter().query

  console.log(id)

  return <h1>{id}</h1>
}

export default ticket
