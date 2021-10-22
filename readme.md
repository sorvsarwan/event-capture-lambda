## Get Started Please implement same steps for Setup on your Local env.

### 1. Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager
- [Serverless](https://www.serverless.com)

### 2. Configration
- [MAC OS]
    - Open Terminal and go to your home directory (Command: cd ~).
    - Create new directory with name of [.aws] and move inside the same directory.
    - Create config file with name of [config]
        - Add your default config like mention below.
            [default]
            region=us-east-1
            output=json 
    - Create credentials files with name of [credentials]
        - Go to AWS console and genrate your access_key and secret_access_key and into the file like mention below.
            [default]
            aws_access_key_id=XXXXXXXXXX
            aws_secret_access_key=XXXXXXXXXXXXXXXXXXXX

### 3. Installation

On the command prompt run the following commands:

 $ yarn install

### 4. Deployment

On the command prompt run the following commands:

 $ yarn deploy

After deployment you will get your API endpoint and API key.

### 5. Example:

 $ curl --location --request POST 'https://example.amazonaws.com/dev/v1/analytics-event' \
--header 'x-api-key: XXX-API-Key-XXX' \
--header 'Content-Type: application/json' \
--data-raw '{
    "uuid": "fb4b994f-d427-4452-bb45-646d02bb67e6",
    "eventType": "buttonclick",
    "eventSource": "home-button_1"
}'
