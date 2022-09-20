pipeline {
    agent {
        docker { 
            image 'node:14.20-alpine'
            args '-u root:root -v $HOME/workspace/nft_track_dao_frontend:/nft_track_dao_frontend'
        }
    }
         
    environment {
        
        jobName="nft_track_dao_frontend"
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('check & upload') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'mayur.patel', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                script {
                    sh "ls -ltr ; pwd"
                    sh 'node -v ; npm -v'
                    sh 'npm prune'
		    sh 'rm -rf node_modules package-lock.json'
                    sh 'npm install --legacy-peer-deps'
                    sh 'pwd ; ls -ltr'
                    sh 'apk update ; apk add --no-cache aws-cli && aws --version ; which aws'
                    echo 'Downloading latest env'
                    sh 'aws s3 cp s3://cz-application-env-tfstate-files-bucket/nft-track-dao/.env .'
                    sh 'npm run build'
                    sh 'pwd ; ls -ltr'
                    sh 'aws s3 sync ./build s3://nft-track-dao-frontend/'
                    }
                }  
            }
        }
        
    }
}
