// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { loginUserApi } from '../../src/api/auth/login';
import { setCookie } from 'nookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body as { email: string; password: string };
    const response = await loginUserApi(body);
    if (!response.ok) {
      return res.status(400).json({ error: response.originalError.response?.data.error });
    }
    const data = response.data as { token: string; user: { [key: string]: any } }
    setCookie(null, 'authToken', data.token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
    return res.status(200).json(data)
  } else {
    return res.status(500).json({ error: "Invalid Method call. Only Post Method is allowed." });
  }
}
