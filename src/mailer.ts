import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses-node'

export class Mailer {
	private client: SESClient

	constructor(private sender: string, private receiver: string) {
		this.client = new SESClient({
			region: process.env.SES_REGION || 'eu-central-1',
		})
	}

	async send(submission: { name: string; contact: string; content: string }) {
		const email = {
			Source: this.sender,
			Destination: { ToAddresses: [this.receiver] },
			Message: {
				Subject: { Data: 'Contact Form was submitted', Charset: 'UTF-8' },
				Body: {
					Text: {
						Data: `
              Your Contact Form was submitted with the following contents:
              name: ${submission.name}
              contact: ${submission.contact}
              content:
              ${submission.content}
          `,
						Charset: 'UTF-8',
					},
				},
			},
		}
		const putItemCommand = new SendEmailCommand(email)
		return this.client.send(putItemCommand)
	}
}
