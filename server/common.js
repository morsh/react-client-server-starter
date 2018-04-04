let vm = require('vso-node-api');
let lim = require('vso-node-api/interfaces/LocationsInterfaces');

function getEnv(name) {
    let val = process.env[name];
    if (!val) {
        console.error(name + ' env var not set');
        process.exit(1);
    }
    return val;
}

exports.getWebApi = async function getWebApi() {
    let serverUrl = getEnv('API_URL');
    return await this.getApi(serverUrl);
}

exports.getDeploymentLevelWebApi = async function getDeploymentLevelWebApi() {
    let serverUrl = getEnv('API_DEPLOYMENT_URL');
    return await this.getApi(serverUrl);
}

exports.getApi = async function getApi(serverUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            let token = getEnv('API_TOKEN');
            let authHandler = vm.getPersonalAccessTokenHandler(token);
            let option = undefined;

            // The following sample is for testing proxy
            // option = {
            //     proxy: {
            //         proxyUrl: "http://127.0.0.1:8888"
            //         // proxyUsername: "1",
            //         // proxyPassword: "1",
            //         // proxyBypassHosts: [
            //         //     "github\.com"
            //         // ],
            //     },
            //     ignoreSslError: true
            // };
            // The following sample is for testing cert
            // option = {
            //     cert: {
            //         caFile: "E:\\certutil\\doctest\\ca2.pem",
            //         certFile: "E:\\certutil\\doctest\\client-cert2.pem",
            //         keyFile: "E:\\certutil\\doctest\\client-cert-key2.pem",
            //         passphrase: "test123",
            //     },
            // };
            let vsts = new vm.WebApi(serverUrl, authHandler, option);
            let connData = await vsts.connect();
            console.log('Hello ' + connData.authenticatedUser.providerDisplayName);
            resolve(vsts);
        }
        catch (err) {
            reject(err);
        }
    });
}

exports.getProject = function getProject() {
    return getEnv('API_PROJECT');
}

exports.banner = function banner(title) {
    console.log('=======================================');
    console.log('\t' + title);
    console.log('=======================================');
}

exports.heading = function heading(title) {
    console.log();
    console.log('> ' + title);
}
