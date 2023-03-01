import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import('./components/LoginWin.vue'),
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('./components/UserWin.vue'),
        children: [
            {
                path: '',
                name: 'UserDefault',
                component: () => import('./components/MainWin.vue'),
            },
            {
                path: 'ind',
                name: 'Ind',
                component: () => import('./components/Indicators/IndWin.vue'),
                children: [
                    {
                        path: '',
                        name: 'IndEmpty',
                        component: () => import('./components/Indicators/IndEmptyWin.vue'),
                    },
                    {
                        path: ':id',
                        name: 'IndReady',
                        component: () => import('./components/Indicators/IndReadyWin.vue'),
                    },                            
                    {
                        path: ':id/table0',
                        name: 'IndTable0',
                        component: () => import('./components/Indicators/IndTable1Win.vue'),
                    },
                    {
                        path: ':id/table1',
                        name: 'IndTable1',
                        component: () => import('./components/Indicators/IndTable2Win.vue'),
                    },
                    {
                        path: ':id/table2',
                        name: 'IndTable2',
                        component: () => import('./components/Indicators/IndTable3Win.vue'),
                    },
                ]
            },
            {
                path: 'cyclo',
                name: 'Cyclo',
                component: () => import('./components/Cyclogram/CycloWin.vue'),
            },
            {
                path: 'tasks',
                name: 'Tasks',
                component: () => import('./components/Tasks/TasksWin.vue'),
                children: [
                    {
                        path: 'create',
                        name: 'createTask',
                        component: () => import('./components/Tasks/TasksCreateWin.vue')
                    },
                    {
                        path: 'your-tasks',
                        name: 'yourTasks',
                        component: () => import('./components/Tasks/TasksYourWin.vue')
                    },
                    {
                        path: 'reports',
                        name: 'yourReports',
                        component: () => import('./components/Tasks/TasksReportWin.vue')
                    },
                ]
            },
            {
                path: 'uch',
                name: 'Uch',
                component: () => import('./components/UchWin.vue'),
            },
            {
                path: 'graph',
                name: 'Graph',
                component: () => import('./components/LineGraph/GraphWin.vue'),
            },
        ]
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;