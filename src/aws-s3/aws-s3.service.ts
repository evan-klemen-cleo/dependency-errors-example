import { Inject, Injectable } from '@nestjs/common';
import * as s3 from '@aws-sdk/client-s3';
import { S3_OPTIONS } from './aws-s3.constants';
import * as s3Types from './s3.types';

@Injectable()
export class S3Service {
  private s3Client: s3.S3Client;

  constructor(@Inject(S3_OPTIONS) private options: s3.S3ClientConfig) {
    this.s3Client = new s3.S3Client(options);
  }

  public async listObjects(
    params: s3.ListObjectsCommandInput,
  ): Promise<s3Types.ListObjectsCommandOutput> {
    return this.s3Client.send(new s3.ListObjectsCommand(params));
  }
}
