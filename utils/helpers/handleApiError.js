export const handleApiError = (res, category, error) => {
  console.log(`${category}: ${error.message}`)

  res.send({ error, category })
}
