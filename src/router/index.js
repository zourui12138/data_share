import Vue from 'vue'
import Router from 'vue-router'
// 登录
import Login from '~/modules/login/login'
// 数据共享区块链平台
import Platform from '~/modules/platform/platform'
import Node from '~/modules/platform/node'
import BlockChainMsg from '~/modules/platform/blockChainMsg'
import Contract from '~/modules/platform/contract'
import UserManage from '~/modules/platform/userManage'
import Share from '~/modules/platform/share'
import Abnormal from '~/modules/platform/abnormal'
import DataMap from '~/modules/platform/dataMap'
import CaManage from '~/modules/platform/caManage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/platform',
            name: 'platform',
            component: Platform,
            children: [
                {
                    path: '/platform/node',
                    name: 'node',
                    component: Node
                },
                {
                    path: '/platform/blockChainMsg',
                    name: 'blockChainMsg',
                    component: BlockChainMsg
                },
                {
                    path: '/platform/contract',
                    name: 'contract',
                    component: Contract
                },
                {
                    path: '/platform/userManage',
                    name: 'userManage',
                    component: UserManage
                },
                {
                    path: '/platform/share',
                    name: 'share',
                    component: Share
                },
                {
                    path: '/platform/abnormal',
                    name: 'abnormal',
                    component: Abnormal
                },
                {
                    path: '/platform/dataMap',
                    name: 'dataMap',
                    component: DataMap
                },
                {
                    path: '/platform/caManage',
                    name: 'caManage',
                    component: CaManage
                }
            ]
        }
    ]
})
