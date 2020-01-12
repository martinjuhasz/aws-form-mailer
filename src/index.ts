import { Repository } from './respository'
import { Mailer } from './mailer'

const tableName = process.env.DYNAMODB_TABLE_NAME || ''
const sender = process.env.MAIL_SENDER || ''
const receiver = process.env.MAIL_RECEIVER || ''

const repository = new Repository(tableName)
const mailer = new Mailer(sender, receiver)

export const handler = async (event: { body: string }) => {
	const lambdaPayload = (message: String, statusCode: Number) => {
		return {
			isBase64Encoded: false,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			statusCode: statusCode,
			body: `{"message": "${message}"}`,
		}
	}

	try {
		const payload = JSON.parse(event.body)

		await repository.add(payload)
		await mailer.send(payload)

		return lambdaPayload('success', 200)
	} catch (error) {
		console.log(error.toString())
		return lambdaPayload(error, 400)
	}
}
