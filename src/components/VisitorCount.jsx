import { useEffect, useState } from "react"

function VisitorCount() {
  const [count, setCount] = useState("...")

  useEffect(() => {
    const getVisitors = async () => {
      try {
        const res = await fetch(
          "https://api.counterapi.dev/v1/mahesh-babu-portfolio/visitors/up"
        )

        const data = await res.json()
        setCount(data.count)
      } catch (error) {
        console.log("Visitor Count Error:", error)
        setCount("Unavailable")
      }
    }

    getVisitors()
  }, [])

  return (
    <div className="text-center py-6 bg-black">
      <p className="text-sm text-gray-400">
        Visitors: {count}
      </p>
    </div>
  )
}

export default VisitorCount