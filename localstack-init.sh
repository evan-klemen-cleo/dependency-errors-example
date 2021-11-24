#!/usr/bin/env bash

echo Creating AWS S3 bucket

# Create S3 bucket in localstack
aws --endpoint-url=http://localhost:4566 s3 mb s3://my-bucket
