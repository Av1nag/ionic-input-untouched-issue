#!/bin/bash

#/*
# * Copyright (c) 2025, OAKS Solutions Pvt Ltd
# *
# * All information contained herein is, and remains the property of
# * OAKS Solutions Pvt Ltd hereinafter referred to as COMPANY. The intellectual and
# * technical concepts contained herein are proprietary to COMPANY and are
# * protected by trade secret or copyright law. Dissemination of this information
# * or reproduction of this material is strictly forbidden unless prior written
# * permission is obtained from COMPANY. Access to the source code contained
# * herein is hereby forbidden to anyone except current COMPANY employees,
# * managers or contractors who have executed Confidentiality and Non-disclosure
# * agreements explicitly covering such access.
# *
# */

function printUsage {
    echo "Usage: deploy.sh <app> <staging|production>"
    exit 1
}

# goto script-dir
SCRIPT_DIR=$(dirname "$0")
cd $SCRIPT_DIR

# get cmd-line args
if [[ $# -ne 2 ]]; then
    printUsage
fi
APP=$1
STAGE=$2
if ! [[ "$APP" =~ ^(tripcard)$ ]]; then
    printUsage
fi
if ! [[ "$STAGE" =~ ^(staging|production)$ ]]; then
    printUsage
fi

if [[ $STAGE == "staging" ]]; then
  if [[ $APP == "tripcard" ]]; then
    CFDISTROID=$CFDISTROID_TRIPCARD_STAG
    S3BUCKET=s3://bgr-tripcards-staging
  fi
else
  if [[ $APP == "tripcard" ]]; then
    CFDISTROID=$CFDISTROID_TRIPCARD_PROD
    S3BUCKET=s3://bgr-tripcards-production
  fi
fi
export AWS_ACCESS_KEY_ID=$BGR_AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$BGR_AWS_SECRET_ACCESS_KEY

npm install && \
npx nx build $APP --configuration $STAGE && \
cd dist/apps/$APP/browser && \
aws s3 rm $S3BUCKET --recursive && \
aws s3 sync --cache-control 'max-age=604800' --exclude index.html . $S3BUCKET && \
aws s3 sync --cache-control 'no-cache' . $S3BUCKET && \
aws cloudfront create-invalidation --distribution-id $CFDISTROID --paths "/i18n/*" "/index.html"
