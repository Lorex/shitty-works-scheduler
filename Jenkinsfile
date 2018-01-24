node {
    def app
    def project_name = 'shitty-works'

    stage('clone repository') {
        checkout scm
    }

    stage('build image') {
        app = docker.build("$project_name", "-f docker/Dockerfile .")
    }

    stage('push image') {
        docker.withRegistry("http://172.31.17.15:5000") {
            app.push()
        }
    }

    stage('deploy image') {
        sh "echo JOB_NAME: $JOB_NAME"
        sh "ssh -oStrictHostKeyChecking=no -i '/data/deploy_rsa.pem' deploy@13.114.131.241 '\
            docker rm -f $project_name; \
            docker run -d --restart=always --name $project_name -p 3309:1337 172.31.17.15:5000/$project_name npm run start; \
        '"
    }
    
    stage('clean') {
        sh "docker rmi $app.id"
    }
}
