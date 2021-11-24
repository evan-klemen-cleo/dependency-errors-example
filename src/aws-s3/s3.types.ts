import * as s3 from '@aws-sdk/client-s3';

export type ListBucketsCommandInput = s3.ListBucketsCommandInput;
export type ListBucketsCommandOutput = s3.ListBucketsCommandOutput;
export type ListObjectsCommandInput = s3.ListObjectsCommandInput;
export type ListObjectsCommandOutput = s3.ListObjectsCommandOutput;
export type GetObjectCommandInput = s3.GetObjectCommandInput;
export type GetObjectCommandOutput = s3.GetObjectCommandOutput;
export type PutObjectCommandInput = s3.PutObjectCommandInput;
export type PutObjectCommandOutput = s3.PutObjectCommandOutput;

export type BucketContent = s3._Object;
