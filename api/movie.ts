// api/movie.ts
import { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY } = process.env

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { title, page, id } = JSON.parse(req.body as string)

    const url = id
      ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
      : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`

    const response = await fetch(url)
    const json = await response.json()

    res.status(200).json(json)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server Error' })
  }
}
