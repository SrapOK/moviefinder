import $host from "."

export const getFilmById = async (id: string) => {
  const filmSearchParams = new URLSearchParams()
  filmSearchParams.set("i", id)

  try {
    const data = await $host.get(
      `?${filmSearchParams.toString()}`
    )
    return data
  } catch (e) {
    console.warn(e)
  }
}
