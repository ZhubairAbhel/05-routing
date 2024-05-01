type Props = {
    params: {
          id: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about product {params.id}</h1>
    )
  }