import { useEffect, useState } from "react"

function VisitorCount() {
  const [count, setCount] = useState("...")

  useEffect(() => {
    const updateVisitors = async () => {
      try {
        const visited = sessionStorage.getItem("portfolioVisited")

        const url = visited
          ? "https://api.counterapi.dev/v1/mahesh-babu-portfolio/visitors"
          : "https://api.counterapi.dev/v1/mahesh-babu-portfolio/visitors/up"

        const res = await fetch(url)
        const data = await res.json()

        if (!visited) {
          sessionStorage.setItem("portfolioVisited", "true")
        }

        setCount(data.count || data.value || 0)
      } catch (error) {
        console.log("Visitor counter error:", error)
        setCount("Unavailable")
      }
    }

    updateVisitors()
  }, [])

  return (
    <div className="text-center py-4 bg-black">
      <p className="inline-block px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm text-gray-400">
        Visitors: {count}
      </p>
    </div>
  )
}

export default VisitorCount