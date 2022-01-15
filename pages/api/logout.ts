// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { destroyCookie, setCookie } from 'nookies';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        destroyCookie({ res }, 'authToken', {
            maxAge: -1,
            path: '/'
        });
        return res.send("OK")
    }
}
