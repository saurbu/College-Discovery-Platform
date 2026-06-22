export const searchFilter = (data, query) => {
  if (!query) return data

  const q = query.toLowerCase().trim()

  return data.filter((item) => {
    return (
      item.name?.toLowerCase().includes(q) ||
      item.category?.toLowerCase().includes(q) ||
      item.type?.toLowerCase().includes(q) ||
      item.exam?.toLowerCase().includes(q) ||
      item.location?.toLowerCase().includes(q)
    )
  })
}