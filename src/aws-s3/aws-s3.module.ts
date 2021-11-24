import { DynamicModule, Module, Provider } from '@nestjs/common';
import { S3Service } from './aws-s3.service';
import { S3_OPTIONS } from './aws-s3.constants';
import * as optionTypes from './interfaces';

@Module({})
export class S3Module {
  static register(options: optionTypes.S3Options): DynamicModule {
    const { isGlobal, ...s3Options } = options;
    return {
      module: S3Module,
      providers: [
        {
          provide: S3_OPTIONS,
          useValue: s3Options,
        },
        S3Service,
      ],
      exports: [S3Service],
      global: isGlobal,
    };
  }

  static registerAsync(options: optionTypes.S3AsyncOptions): DynamicModule {
    const asyncOpts = this.createAsyncProviders(options);
    return {
      module: S3Module,
      imports: options.imports,
      providers: [S3Service, ...asyncOpts],
      exports: [S3Service],
      global: options.isGlobal,
    };
  }

  // The methods below are used to create dynamic options.
  // Do not modify unless you know what you are doing.
  private static createAsyncProviders(
    options: optionTypes.S3AsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: optionTypes.S3AsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: S3_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: S3_OPTIONS,
      useFactory: async (optionsFactory: optionTypes.S3OptionsFactory) =>
        await optionsFactory.createOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
