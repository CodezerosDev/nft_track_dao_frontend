import { enviornment } from "../../constants/constants";
// import { addPackageAsync } from '../../modules/createnewproject/createProjectRedux/createProject.api';

// import { createInvestmentOnChainAsync, getProjectByIdAsync, offerStatusChangeByInvestorAsync, statusChangeByProjectCreatorAsync } from "../../modules/product/productRedux/product.api";
// import { launchSaleAsync } from "../web3Redux/web3.api";

function getFirstInstance(web3) {
    return new Promise(async (resolve, reject) => {
        if (web3 && web3 !== '') {
            try {
                let Instance = await new web3.eth.Contract(
                    enviornment.FirstABI,
                    enviornment.FirstAddress
                );

                if (Instance) {
                    resolve(Instance);
                } else {
                    reject({ error: "Issue with instance" });
                }
            } catch (error) {
                reject(error);
            }
        }
    });
};

function getSecondInstance(web3) {
    return new Promise(async (resolve, reject) => {
        if (web3 && web3 !== '') {
            try {
                let Instance = await new web3.eth.Contract(
                    enviornment.SecondABI,
                    enviornment.SecondAddress
                );

                if (Instance) {
                    resolve(Instance);
                } else {
                    reject({ error: "Issue with instance" });
                }
            } catch (error) {
                reject(error);
            }
        }
    });
};

function getThirdInstance(web3) {
    return new Promise(async (resolve, reject) => {
        if (web3 && web3 !== '') {
            try {
                let Instance = await new web3.eth.Contract(
                    enviornment.ThirdABI,
                    enviornment.ThirdAddress
                );

                if (Instance) {
                    resolve(Instance);
                } else {
                    reject({ error: "Issue with instance" });
                }
            } catch (error) {
                reject(error);
            }
        }
    });
};

function getTotalSupply(ercInstance, walletAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .totalSupply()
                .call({ from: walletAddress }, (err, data) => {
                    //  console.log('data', data)
                    //  console.log('data', parseFloat(data / enviornment.divideValue).toFixed(9))
                    if (err) {
                        reject({ error: err });
                    } else {
                        if (data > 0) {
                            resolve(data);
                        } else {
                            resolve(data)
                        }
                    }

                });
        } catch (error) {
            reject(error);
        }
    });
};

function getBalanceOf(ercInstance, walletAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .balanceOf(walletAddress)
                .call({ from: walletAddress }, (err, data) => {

                    if (err) {
                        reject({ error: err });
                    } else {
                        if (data > 0) {
                            resolve(data);
                        } else {
                            resolve(data)
                        }
                    }

                });
        } catch (error) {
            reject(error);
        }
    });
};

function getDataSecond(ercInstance, walletAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .getData()
                .call({ from: walletAddress }, (err, data) => {
                    if (err) {
                        reject({ error: err });
                    } else {
                        resolve(parseFloat(data[0] / enviornment.divideValue).toFixed(2))
                    }

                });
        } catch (error) {
            reject(error);
        }
    });
};

function getDataThird(ercInstance, walletAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .getData()
                .call({ from: walletAddress }, (err, data) => {
                    if (err) {
                        reject({ error: err });
                    } else {
                        if (data[0] > 0) {
                            resolve(parseFloat(data[0] / enviornment.divideValue).toFixed(2));
                        } else {
                            resolve(data[0].toFixed(2))
                        }
                    }

                });
        } catch (error) {
            reject(error);
        }
    });
};


export const poolMethods = {
    getFirstInstance,
    getSecondInstance,
    getThirdInstance,
    getTotalSupply,
    getBalanceOf,
    getDataSecond,
    getDataThird,
}