// pages/api/hello.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { mock } from 'mockjs';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({ name: 'John Doe' }
  ))
}
