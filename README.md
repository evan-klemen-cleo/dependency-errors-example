Using [localstack](https://github.com/localstack/localstack) to run S3 locally.

Using [aws CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) to create S3 buckets.

Might not need localstack right away since the error happens before S3 even gets initialized.
```shell
pip install localstack

# start up localstack
SERVICES=s3 localstack start

# once localstack is up and running create the s3 bucket via this script
# this just runs the aws cli to mb (make bucket)
./localstack-init.sh
```

## File of interest
Go so `src/s3-file-monitor/s3-file-monitor.module.ts` and uncomment the `providers` array.

Run `yarn start`
