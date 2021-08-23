import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Leo' },
    { id: 2, name: 'Vitor' },
    { id: 3, name: 'Amanda' }
  ]

  return response.json(users);
}