import { Injectable } from '@nestjs/common';
import { S3Service } from "../aws-s3/aws-s3.service";

@Injectable()
export class S3FileMonitorService {
  constructor(
    private s3Service: S3Service,
  ) {}

}
