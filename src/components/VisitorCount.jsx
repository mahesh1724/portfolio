import { useEffect, useState } from "react"

function VisitorCount() {
  const [count, setCount] = useState("...")

  useEffect(() => {
    const updateVisitors = async () => {
      try {
        const alreadyCounted = localStorage.getItem("maheshPortfolioCounted")

        if (alreadyCounted) {
          setCount(alreadyCounted)
          return
        }

        const res = await fetch(
          "https://api.counterapi.dev/v1/mahesh-babu-portfolio/visitors/up"
        )

        const data = await res.json()

        localStorage.setItem("maheshPortfolioCounted", data.count)
        setCount(data.count)
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