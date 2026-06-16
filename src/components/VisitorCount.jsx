import { useEffect, useState } from "react"

function VisitorCount() {
  const [count, setCount] = useState("...")

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited")

    if (hasVisited) {
      fetch("https://api.counterapi.dev/v1/mahesh-babu-portfolio/visitors")
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setCount("Unavailable"))

      return
    }

    sessionStorage.setItem("visited", "true")

    fetch("https://api.counterapi.dev/v1/mahesh-babu-portfolio/visitors/up")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount("Unavailable"))
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