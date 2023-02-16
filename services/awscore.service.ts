import * as AWS from 'aws-sdk';

export class AwsCoreService {
	dynamoDBClient:AWS.DynamoDB.DocumentClient;
	s3Client:AWS.S3;

  	constructor() {
		if(!AWS.config.accessKeyId) {
	    	AWS.config.update({
		  		region: 'ap-southeast-1',
		  		accessKeyId: 'AKIARDFHDDZIJPDKQWXC',
		  		secretAccessKey: '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' ,
				dynamoDbCrc32: false
			});
			this.onRefreshSession();
		}
  	}

	getDynamoDBClient(): AWS.DynamoDB.DocumentClient
	{
		return this.dynamoDBClient;
	}

	getS3Client(): AWS.S3
	{
		return this.s3Client;
	}

	onRefreshSession() {
		this.dynamoDBClient = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-1'});
    	this.s3Client = new AWS.S3({region: 'ap-southeast-1', maxRetries: 30});
	}
}
