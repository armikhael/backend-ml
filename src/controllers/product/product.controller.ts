import { Application, Request, Response } from 'express'

import { Services } from './services'

export const Product = (app: Application): void => {
	app.get('/detail-product/:id', async (req: Request, res: Response) => {
		try {
			let detail: any = await Services(req.params.id, 'items/', 'GET')
			let categories = await Services(detail.category_id, 'categories/', 'GET')
			let seller = await Services(detail.seller_id, 'sites/MLA/search?seller_id=', 'GET')
			const body = await { detail, categories, seller, status: 200 }
			return res.json(body)
		} catch (err) {
			const error = { status: 404, reason: 'Not found', body: '404 Not found xD' }
			return res.json(error)
		}
	})
}
