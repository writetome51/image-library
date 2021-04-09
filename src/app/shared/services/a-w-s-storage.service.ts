import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { DeleteObjectCommand, ListObjectsCommand, PutObjectCommand, S3Client }
	from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';


/******************************
Connects app with AWS S3 (simple-storage-service).
We're using a single S3 bucket (data container), which contains folders, each of which represents
a user of this app. The folder contain the user's files.
 *****************************/

@Injectable({providedIn: 'root'})
export class AWSStorageService {

	private readonly __region = 'us-east-1';
	private readonly __identityPoolId = 'us-east-1:b3cf6fc7-081d-4b98-8761-c37d78744742';
	private readonly __s3Bucket = 'image-libraries-app';

	private readonly __s3Client = new S3Client({
		region: this.__region,
		// Initialize the Amazon Cognito credentials provider
		credentials: fromCognitoIdentityPool({
			client: new CognitoIdentityClient({region: this.__region}),
			identityPoolId: this.__identityPoolId
		}),
	});


	async createFolder(folderName): Promise<void> {
		folderName = folderName.trim();
		if (includesSlash(folderName)) throw new Error('Folder names cannot include slashes.');

		try {
			const params = {
				Bucket: this.__s3Bucket,
				Key: encodeURIComponent(folderName) + '/',
				// Gives owner ability to read, add files to, and delete the folder
				ACL: 'public-read-write'
			};
			await this.__s3Client.send(new PutObjectCommand(params));
		}
		catch (err) {
			throw new Error('There was an error creating the folder: ' + err.message);
		}


		function includesSlash(name) { return (name.indexOf('/') !== -1); }
	}


	async deleteFolder(folderName: string) {
		const folderKey = encodeURIComponent(folderName) + '/';
		try {
			const params = {Bucket: this.__s3Bucket, Prefix: folderKey};
			const data = await this.__s3Client.send(new ListObjectsCommand(params));
			const Objects = data.Contents.map(function(object) {
				return {Key: object.Key};
			});
			try {
				const params = {
					Bucket: this.__s3Bucket,
					Key: folderKey,
					Delete: {Objects},
					Quiet: true,
				};
				await this.__s3Client.send(new DeleteObjectCommand(params));
			}
			catch (err) {
				return alert('There was an error deleting your folder: ' + err.message);
			}
		}
		catch (err) {
			return alert('There was an error deleting your folder: ' + err.message);
		}
	}


	async addFilesToFolderAndReturnURLs(files: File[], folderName: string): Promise<string[]> {
		return getArrFilled(
			files.length,
			async (i) => await this.__addFileToFolderAndReturnURL(files[i], folderName)
		);
	}


	async deleteFile(fileKey: string) {
		try {
			const params = {Key: fileKey, Bucket: this.__s3Bucket};
			await this.__s3Client.send(new DeleteObjectCommand(params));
		}
		catch (err) {
			return alert('There was an error deleting your file: ' + err.message);
		}
	}


	private async __addFileToFolderAndReturnURL(file: File, folderName: string): Promise<string> {

		const folderKey = encodeURIComponent(folderName) + '/';
		const fileKey = folderKey + encodeURIComponent(file.name);
		try {
			await this.__s3Client.send(new PutObjectCommand({
				Bucket: this.__s3Bucket,
				Key: fileKey,
				Body: file,
				// Gives owner ability to read and delete the file
				ACL: 'public-read-write'
			}));
			return this.__getFileURL(fileKey);
		}
		catch (err) {
			throw new Error(`There was an error adding file "${file.name}":  ` + err.message);
		}
	}


	private __getFileURL(fileKey: string): string {
		const serviceURL = `https://s3.${this.__region}.amazonaws.com/`;
		const bucketURL = serviceURL + this.__s3Bucket + '/';
		return bucketURL + fileKey;
	}

}
