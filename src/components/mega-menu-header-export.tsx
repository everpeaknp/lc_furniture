// Server component — no "use client" directive here.
// Fetches nav data at request time (ISR, revalidates every 60s)
// and passes it down to the client HeaderClient.
import type { NavItem } from "./nav-types"
import { HeaderClient } from "./header-client"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"

async function fetchNavigation(): Promise<NavItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/navigation/`, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : (data.results ?? [])
  } catch {
    return []
  }
}

export async function Header() {
  const navItems = await fetchNavigation()
  return <HeaderClient navItems={navItems} />
}
