export const loadJSON = async (filePath) => {
  const file = await fetch(`${filePath}.json`)
  return await file.json()
}
