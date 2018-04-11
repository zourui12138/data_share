import axios from 'axios'
// 统一配置请求时间限制
axios.defaults.timeout = 4000;

const api = '/api';
// 共享平台节点服务器
export const node_getNewEquipment = (id) => {
    let obj = {};
    id && (obj.param = {nodeId : id});
    return axios.post(api+'/node/getNodeInfoFalse',obj);
};
export const node_getJZNode = () => axios.post(api+'/node/getJZNode',{});
export const node_getAllNode = () => axios.post(api+'/node/getAllTrueNode',{});
// 数据区块连信息
export const blockChainMsg_getShareData = () => axios.post(api+'/blockChainDataInfoData/getRecentlyShareDataContributionValueInfos',{
    limit: {startNumber: 0, size: 20}
});
