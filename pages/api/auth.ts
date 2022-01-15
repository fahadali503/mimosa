// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { loginUserApi } from '../../src/api/auth/login';
import { parseCookies } from 'nookies';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const cookies = parseCookies({ req });
        console.log(cookies.authToken)
        return res.send({ token: cookies.authToken })
    }
}
