import { ModuleMetadata, Type } from '@nestjs/common';
import * as s3 from '@aws-sdk/client-s3';

export interface S3OptionsFactory {
  createOptions(): Promise<s3.S3ClientConfig> | s3.S3ClientConfig;
}

export interface S3Options extends s3.S3ClientConfig {
  isGlobal?: boolean;
}

export interface S3AsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<S3OptionsFactory>;
  useClass?: Type<S3OptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<s3.S3ClientConfig> | s3.S3ClientConfig;
  inject?: any[];
  isGlobal?: boolean;
}
