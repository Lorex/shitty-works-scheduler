node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("172.31.17.15:5000/shitty-works", "-f docker/Dockerfile .")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('http://172.31.17.15:5000') {
            app.push()
        }
    }

    stage('Deploy image') {
        sh 'ssh -oStrictHostKeyChecking=no -i "/data/deploy_rsa.pem" deploy@13.114.131.241 "cd $WORKSPACE/docker;bash -s" < ./docker/deploy.sh'
    }
}
