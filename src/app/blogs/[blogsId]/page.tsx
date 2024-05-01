type Props = {
    params: {
          id: string
    }
  }
  
  export default function Blogs({ params }: Props) {
    return (
          <h1>Blog {params.id}</h1>
    )
  }