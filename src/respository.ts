import { v4 } from 'uuid'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb-node/DynamoDBClient'
import { PutItemCommand } from '@aws-sdk/client-dynamodb-node/commands/PutItemCommand'

export class Repository {
	private client: DynamoDBClient

	constructor(private tableName: string) {
		this.client = new DynamoDBClient({
			region: process.env.AWS_REGION || 'eu-central-1',
		})
	}

	async add(submission: { name: string; contact: string; content: string }) {
		const item = {
			TableName: this.tableName,
			Item: {
				uuid: {
					S: v4(),
				},
				timestamp: {
					S: new Date().toISOString(),
				},
				name: {
					S: submission.name,
				},
				contact: {
					S: submission.contact,
				},
				content: {
					S: submission.content,
				},
			},
		}
		const putItemCommand = new PutItemCommand(item)
		PutItemCommand
		return this.client.send(putItemCommand)
	}
}
