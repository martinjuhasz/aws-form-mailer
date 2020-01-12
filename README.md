# aws-form-mailer

Lambda function to retreive, store and mail contents from an api-request. This
is used on my website for a contact form.

# Installation

```bash
yarn
```

# Deployment

Deployment is done using `serverless` to setup

- AWS IAM Policies
- API-Gateway
- Lambda Service
- DynamoDB

```bash
yarn deploy
```
