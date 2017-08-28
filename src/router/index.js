import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown'  // 倒计时跳转页面
import Index from '@/components/index'   // 首页
import Wnl from '@/components/wnl/wnl'   /* 万年历 */
import Hl from '@/components/hl/hl'   /* 黄历 */
/* import Hlhl from '@/components/hl/hlhl'   黄历 */
/* import Hlys from '@/components/hl/hlys'   黄历 */
import Fx from '@/components/fx/fx'   /* 发现 */
import Tx from '@/components/tx/tx'   /* 提醒 */
import Gj from '@/components/gj/gj'   /* 工具 */

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/countdown'
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: Countdown
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: 'wnl', component: Wnl },
        { path: 'hl', component: Hl },
        { path: 'fx', component: Fx },
        { path: 'tx', component: Tx },
        { path: 'gj', component: Gj },
      ]
    }
  ]
})
