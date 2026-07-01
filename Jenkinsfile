pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        CI = 'true'
    }

    options {
        timestamps()
        skipDefaultCheckout(false)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies and Playwright browsers') {
            steps {
                script {
                    def pkgFiles = findFiles(glob: '**/package.json')
                    def projectDirs = pkgFiles.collect { it.path.replaceAll(/[/\\]package.json$/, '') }.sort().unique()

                    for (projectDir in projectDirs) {
                        dir(projectDir) {
                            if (isUnix()) {
                                sh '''
                                    npm install
                                    npx playwright install --with-deps chromium
                                '''
                            } else {
                                bat '''
                                    npm install
                                    npx playwright install chromium
                                '''
                            }
                        }
                    }
                }
            }
        }

        stage('Run Playwright tests') {
            steps {
                script {
                    def pkgFiles = findFiles(glob: '**/package.json')
                    def projectDirs = pkgFiles.collect { it.path.replaceAll(/[/\\]package.json$/, '') }.sort().unique()

                    for (projectDir in projectDirs) {
                        dir(projectDir) {
                            echo "Running Playwright tests in ${projectDir}"
                            if (isUnix()) {
                                sh 'npx playwright test'
                            } else {
                                bat 'npx playwright test'
                            }
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts allowEmptyArchive: true, artifacts: '**/playwright-report/**, **/test-results/**', fingerprint: true
            junit allowEmptyResults: true, testResults: '**/test-results/**/*.xml'
        }
        failure {
            echo 'One or more Playwright suites failed.'
        }
    }
}
