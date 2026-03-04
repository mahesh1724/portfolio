import { useEffect, useState } from "react"

function VisitorCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/mahesh-portfolio/visits")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value)
      })
  }, [])

  return (
    <p className="text-sm text-gray-400">
      Visitors: {count ? count : "..."}
    </p>
  )
}

export default VisitorCount