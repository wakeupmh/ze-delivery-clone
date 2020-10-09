export const createSimpleReponse = response => message => response.status(200).json(message)
const notFoundResponse = response => message => response.status(404).json(message)
export const handleResponse = response => outputPayload => {
  if (outputPayload) {
    return createSimpleReponse(response)(outputPayload)
  }

  return notFoundResponse(response)({
    message: 'Not found partner'
  })
}
