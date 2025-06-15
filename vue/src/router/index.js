import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import FrontPage from '../views/FrontPage/FrontPage.vue'
import PublishedGoodsAdmin from '../views/PublishedGoodsAdmin'
import PublishedNeedsAdmin from '../views/PublishedNeedsAdmin'
import HomePurchase from '../views/PurchasePage/HomePurchase'
import purchaseDetails from '../views/PurchasePage/purchaseDetails'
import ShopCart from '../views/ShoppingCartPage/ShopCart'
import PublishGoods from '../views/UserCenter/MyPublishedInfo/PublishGoods'
import PublishNeeds from '../views/UserCenter/MyPublishedInfo/PublishNeeds'
import PublishedGoods from '../views/UserCenter/MyPublishedInfo/PublishedGoods'
import PublishedNeeds from '../views/UserCenter/MyPublishedInfo/PublishedNeeds'
import UserBuy from '../views/UserCenter/MyOrderInfo/UserBuy'
import UserSell from '../views/UserCenter/MyOrderInfo/UserSell'

import HomeKnowledge from '../views/KonwledgePage/HomeKnowledge'
import KnowledgeDetail from '../views/KonwledgePage/KnowledgeDetail'
import User from '../views/UserCenter/User'
import UserInfo from '../views/UserCenter/MyInformation/UserInfo'
import UserFinance from '../views/UserFinance'
import UserAddress from '../views/UserCenter/MyInformation/UserAddress'
import UserPassword from '../views/UserCenter/MyInformation/UserPassword'
import HomeGuide from '../views/GuideSourcePage/HomeGuide'
import guideDetail from '../views/GuideSourcePage/guideDetail'
import AllExpert from '../views/GuideSourcePage/AllExpert'
import question from '../views/GuideSourcePage/Question'
import appointment from '../views/GuideSourcePage/Appointment'

Vue.use(VueRouter)


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                redirect: 'front'
            },
            {
                path: 'front',
                component: FrontPage
            },
            {
                path: 'purchase',
                component: HomePurchase
            },
            {
                path: 'shopcart',
                component: ShopCart
            },
            {
                path: 'purchaseDetails',
                component: purchaseDetails,
            },
            //dhh
            {
                path: 'knowledge',
                component: HomeKnowledge
            },
            {
                path: 'knowledge/:id',
                component: KnowledgeDetail
            },
            {
                path: 'guide',
                component: HomeGuide
            },
            {
                path: 'guide/:id',
                component: guideDetail
            },
            {
                path: 'allExpert',
                component: AllExpert
            },
            {
                path: 'question',
                component: question
            },

            {
                path: 'user',
                component: User,
                children: [
                    //dhh
                    {
                        path: '',
                        redirect: 'userinfo'
                    },
                    {
                        path: 'userfinance',
                        component: UserFinance
            
                    },
                    {
                        path: 'userinfo',
                        component: UserInfo
            
                    },
                    {
                        path: 'useraddress',
                        component: UserAddress
                    },
                    {
                        path: 'userpassword',
                        component: UserPassword
                    },
                    
                    {
                        path: 'publishedneedsAdmin',
                        component: PublishedNeedsAdmin
                    },
                    {
                        path: 'publishedgoods',
                        component: PublishedGoods
                    },
                    {
                        path: 'userbuy',
                        component: UserBuy
                    },
                    {
                        path: 'usersell',
                        component: UserSell
                    },
                    // {
                    //   path: 'publishedgoodsAdmin',
                    //   component: PublishedGoodsAdmin
                    // },
                    {
                        path: 'publishedneeds',
                        component: PublishedNeeds
                    },
                ]
            },
            {
                path: 'userGood',
                component: userGood,
                children: [
                    {
                        path: 'publishedgoodsAdmin',
                        component: PublishedGoodsAdmin
                    },
                    {
                        path: 'PublishedNeedsAdmin',
                        component: PublishedNeedsAdmin
                    },
                ]
            },
            {
                path: 'addmessage',
                component: PublishNav,
                children: [
                    // {
                    //   path: '',
                    //   redirect: 'publishgoods'
                    // },
                    {
                        path: 'publishgoods',
                        component: PublishGoods
                    }, {
                        path: 'publishneeds',
                        component: PublishNeeds
                    },
                ]
            },
            {
                path: 'usermanage',
                component: UserManage
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
]

const router = new VueRouter({
    routes,
    mode: 'hash',
})

export default router
