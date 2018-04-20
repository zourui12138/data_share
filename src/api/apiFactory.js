import axios from 'axios'
// 统一配置请求时间限制
axios.defaults.timeout = 4000;

// 登录系统
export const login_login = (username,password) => axios.post('/loginData/login',{param: {userName: username, password: password}});
// 共享平台节点服务器
export const node_getNewEquipment = (id) => {
    let obj = {};
    id && (obj.param = {nodeId : id});
    return axios.post('/node/getNodeInfoFalse',obj);
};
export const node_getJZNode = () => axios.post('/node/getJZNode',{});
export const node_getAllNode = () => axios.post('/node/getAllTrueNode',{});
// 数据区块连信息
export const blockChainMsg_getShareData = () => axios.post('/blockChainDataInfoData/getRecentlyShareDataContributionValueInfos',{
    limit: {startNumber: 0, size: 20}
});
export const blockChainMsg_getBlock = () => axios.post('/blockChainDataInfoData/getBlockChainDataInfos',{});
export const blockChainMsg_getBlockDataOne = (id) => axios.post('/blockChainDataInfoData/getBlockChainDataInfo',{param: {dataId: id}});
export const blockChainMsg_getBlockDataTwo = (id) => axios.post('/blockChainDataInfoData/getSovereignBlockChainDetails',{param: {dataId: id}, limit: {startNumber: 0, size: 1}});
// 电子合约
export const contract_getContractList = () => axios.post('/contract/getBuyContract',{});
export const contract_getContractData = (id) => axios.post('/contract/getBuyContract',{param: {contractBuyId: id}});
// 用户管理
export const userManage_getUserList = () => axios.post('/account/getAccount',{});
export const userManage_getUserData = (id) => axios.post('/account/getAccount',{param: {id: id}});
export const userManage_getErrorData = (id) => axios.post('/account/getBreach',{param: {id: id}});
// 数据共享
export const share_getDataList = () => axios.post('/sharedPlatformDataMartData/getCompanyInfos',{});
export const share_getBarData = () => axios.post('/sharedPlatformDataMartData/getSharedPlatformDataMartDataSetTotalAndAPITotals',{});
export const share_getLineData = () => axios.post('/sharedPlatformDataMartData/getDataUploadAndDownloads',{limit: {startNumber: 0, size: 6}});
export const share_getFileList = (id,page) => axios.post('/sharedPlatformDataMartData/getSharedPlatformDataMarts',{param: {companyId: id, dataType: 1}, limit: {startNumber: (page-1)*10, size: 10}});
export const share_getApiList = (id,page) => axios.post('/sharedPlatformDataMartData/getSharedPlatformDataMarts',{param: {companyId: id, dataType: 2}, limit: {startNumber: (page-1)*10, size: 10}});
// 违约与异常
export const abnormal_getUserList = () => axios.post('/defaultAndAbnormalSituationData/getBreachContractUserInfos',{});
export const abnormal_getCountData = (id) => axios.post('/defaultAndAbnormalSituationData/getBreachContractTotals',{param: {accountId: id}});
export const abnormal_getEventsList = (id,page) => axios.post('/defaultAndAbnormalSituationData/getBreachContractInfosAndTotal',{param: {accountId: id}, limit: {startNumber: page-1, size: 1}});
// 数据地图
export const dataMap_getHotData = () => axios.post('/dataMap/getDataList',{limit: {startNumber: 0, size: 18}, orders: [{field: "ID", order: 0}]});
export const dataMap_getDataList = (keywords) => {
    let obj = keywords ? {param : {keyWords: keywords}} : {};
    return axios.post('/dataMap/getDataInfo',obj);
};
export const dataMap_getSellUser = (id) => axios.post('/dataMap/getSellUser',{param: {id: id}});
export const dataMap_getBuyUser = (id,page) => axios.post('/dataMap/getBuyUser',{param: {id: id}, limit: {startNumber: (page-1)*2, size: 2}});
// ca管理
export const caManage_getDataKeyList = () => axios.post('/dataKeyCAManagementData/getDataKeyInfos',{});
export const caManage_updateKey = (id) => axios.post('/dataKeyCAManagementData/updateDataKeys',{param: {id: id, useType: 1}});
export const caManage_getApproveList = (page) => axios.post('/dataKeyCAManagementData/getUserInfos',{param: {authenticationType: 1}, limit: {startNumber: (page-1)*5, size: 5}});
export const caManage_getUnApproveList = (page) => axios.post('/dataKeyCAManagementData/getUserInfos',{param: {authenticationType: 0}, limit: {startNumber: (page-1)*2, size: 2}});
