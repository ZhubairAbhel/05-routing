type Props = {
    params: {
          id: string
    }
  }
  
  export default function Reviews({ params }: Props) {
    return (
          <h1>Review {params.id}</h1>
    )
  }