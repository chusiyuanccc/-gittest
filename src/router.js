import Vue from 'vue'
import Router from 'vue-router'
import LoginLayout from '@/layouts/Login'
import MainLayout from '@/layouts/Main'
import api from './api/index.js';

Vue.use(Router)

const router = new Router({
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			redirect: 'elysUserGroupActivity',
			component: MainLayout,
			meta: {
				authRequired: true,
				hidden: true,
				// title: '修改昵称'
			},
			children: [{
				          path: '/elysDashboard',
				          component:() =>import('./views/elysDashboard')
				        },

				        {
				          path: '/elysUser',
				          component:() =>import('./views/elysUser')
				        },

				        {
				          path: '/elysUserCreate',
				          component:() =>import('./views/elysUserCreate')
				        },

				        {
				          path: '/elysGroup',
				          component: () => import('./views/elysGroup')
				        },

						{
				          path: '/elysGroupCreate',
				          component: () => import('./views/elysGroupCreate')
				        },

						{
				          path: '/elysUserGroupActivity',
				          component: () => import('./views/elysUserGroupActivity')
				        },

				        {
				          path: '/elysPermission',
				          component: () => import('./views/elysPermission')
				        },

			        	{
				          path: '/elysCity',
				          component: () => import('./views/elysCity')
				        },

				        {
				          path: '/elysCityCreate',
				          component: () => import('./views/elysCityCreate')
				        },

				        {
				          path: '/elysCategory',
				          component: () => import('./views/elysCategory')
				        },

				        {
				          path: '/elysCategoryCreate',
				          component: () => import('./views/elysCategoryCreate')
				        },

				        {
				          path: '/elysBrand',
				          component: () => import('./views/elysBrand')
				        },

				        {
				          path: '/elysBrandCreate',
				          component: () => import('./views/elysBrandCreate')
				        },

				        {
				          path: '/elysWarehouse',
				          component: () => import('./views/elysWarehouse')
				        },

				        {
				          path: '/elysWarehouseCreate',
				          component: () => import('./views/elysWarehouseCreate')
				        },

				        {
				          path: '/elysCustomer',
				          component: () => import('./views/elysCustomer')
				        },

						{
				          path: '/elysCustomerCreate',
				          component: () => import('./views/elysCustomerCreate')
				        },

						{
				          path: '/elysCustomerAddressCreate',
				          component: () => import('./views/elysCustomerAddressCreate')
				        },

				        {
				          path: '/elysProduct',
				          component: () => import('./views/elysProduct')
				        },

				        {
				          path: '/elysProductCreate',
				          component: () => import('./views/elysProductCreate')
				        },

				        {
				          path: '/elysPurchase',
				          component: () => import('./views/elysPurchase')
				        },

				        {
				          path: '/elysPurchaseCreate',
				          component: () => import('./views/elysPurchaseCreate')
				        },

				        {
				          path: '/elysPurReceipt',
				          component: () => import('./views/elysPurReceipt')
				        },

				        {
				          path: '/elysPurReceiptCreate',
				          component: () => import('./views/elysPurReceiptCreate')
				        },

				        {
				          path: '/elysWarePurchase',
				          component: () => import('./views/elysWarePurchase')
				        },

				        {
				          path: '/elysWarePurchaseCreate',
				          component: () => import('./views/elysWarePurchaseCreate')
				        },

				        {
				          path: '/elysOrder',
				          component: () => import('./views/elysOrder')
				        },

						{
				          path: '/elysOrderCreate',
				          component: () => import('./views/elysOrderCreate')
				        },

						{
				          path: '/elysOrderInvoiceCreate',
				          component: () => import('./views/elysOrderInvoiceCreate')
				        },

						{
				          path: '/elysOrderProductCreate',
				          component: () => import('./views/elysOrderProductCreate')
				        },

				        {
				          path: '/elysShippingMethod',
				          component: () => import('./views/elysShippingMethod')
				        },

				        {
				          path: '/elysShippingMethodCreate',
				          component: () => import('./views/elysShippingMethodCreate')
				        },

				        {
				          path: '/elysOrderStatus',
				          component: () => import('./views/elysOrderStatus')
				        },

				        {
				          path: '/elysOrderStatusCreate',
				          component: () => import('./views/elysOrderStatusCreate')
				        },

				        {
				          path: '/elysInvoice',
				          component: () => import('./views/elysInvoice')
				        },

				        {
				          path: '/elysInvoiceCreate',
				          component: () => import('./views/elysInvoiceCreate')
				        },

				        {
				          path: '/elysExpense',
				          component: () => import('./views/elysExpense')
				        },

				        {
				          path: '/elysExpenseCreate',
				          component: () => import('./views/elysExpenseCreate')
				        },

						// 404
						{
							path: '/404',
							component: () => import('./views/404'),
						},
						//test
						{
							path: '/realextate',
							component: () => import('./views/test/realextate'),
						},
						{
							path: '/building',
							component: () => import('./views/test/building'),
						},
						{
							path: '/elevator',
							component: () => import('./views/test/elevator'),
						},
						{
							path: '/filter',
							component: () => import('./views/test/filter'),
						},
						{
							path: '/elevatorButton',
							component: () => import('./views/test/elevatorButton'),
						},
						{
							path: '/print',
							component: () => import('./views/test/print'),
						},
			],
		},

		// System Pages
		{
			path: '/user',
			component: LoginLayout,
			redirect: '/user/login',
			children: [{
					path: '/user/login',
					component: () => import('./views/user/login'),
				},
				{
					path: '/user/forgot',
					component: () => import('./views/user/forgot'),
				},
			],
		},

		// Redirect to 404
		{
			path: '*',
			redirect: '/404',
			hidden: true,
		},
	],
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.authRequired)) {

		if (false) {
		//accessToken为空，跳转到login
		// if (api.getCookie('accessToken')=='') {
			// console.log(this.$api.getCookie('accessToken'))
			next(
				{
				path: '/user/login',
				query: {
					redirect: to.fullPath
				},
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

router.afterEach(() => {

})

export default router
