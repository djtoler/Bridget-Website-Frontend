#!/bin/bash

# Variables
BUCKET_NAME="bridgetchars"
REGION="us-east-2"
OUTPUT_FILE="image_links.txt"

# Empty the output file if it exists
> $OUTPUT_FILE

# Loop through all images in the current directory
for image in *.{jpg,jpeg,png,gif}; do
  if [[ -f $image ]]; then
    # Upload the image to S3
    aws s3 cp "$image" "s3://$BUCKET_NAME/$image" --region $REGION --acl public-read

    # Generate the S3 URL
    image_url="https://$BUCKET_NAME.s3.$REGION.amazonaws.com/$image"

    # Append the URL to the output file
    echo $image_url >> $OUTPUT_FILE
  fi
done

echo "Upload complete. Image links are saved in $OUTPUT_FILE"
