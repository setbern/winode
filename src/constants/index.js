
export const LOG_OUTPUT = [
	'Jan 19 16:29:20 raspberrypi lnd[1270]: 2019-01-19 16:29:20.056 [INF] LNWL: Performing funding tx coin selection using 253 sat/kw as fee rate',
	'Jan 19 16:29:20 raspberrypi lnd[1270]: 2019-01-19 16:29:20.057 [WRN] ATPL: Unable to open channel to 033ed4f78ed7513b3c7b217fa2c71362e3d5a4e890da94dead45760eb0f420466f of 0.006 BTC: not enough witness outputs to create funding transaction, need 0.006 BTC only have 0.00399823 BTC  available',
	'Jan 19 16:29:20 raspberrypi lnd[1270]: 2019-01-19 16:29:20.057 [INF] SRVR: Disconnecting from 13.81.170.186:9735',
	'Jan 19 16:29:20 raspberrypi lnd[1270]: 2019-01-19 16:29:20.057 [INF] PEER: Disconnecting 13.81.170.186:9735, reason: server: disconnecting peer 13.81.170.186:9735 ',
	'Jan 19 16:29:20 raspberrypi lnd[1270]: 2019-01-19 16:29:20.057 [INF] DISC: Removing gossipSyncer for peer=033ed4f78ed7513b3c7b217fa2c71362e3d5a4e890da94dead45760eb0f420466f',
	'Jan 19 16:30:11 raspberrypi lnd[1270]: 2019-01-19 16:30:11.376 [INF] LNWL: Marking unconfirmed transaction 2adfdf7a42b486955f02dd5c47e18c185436c2801c328d4229b06a86a3f554a9 mined in block 1453184',
	'Jan 19 16:30:11 raspberrypi lnd[1270]: 2019-01-19 16:30:11.380 [INF] CRTR: Pruning channel graph using block 000000000000007da346c156ccfca39b7dee6af5100974b0fa56732b0c2b1865 (height=1453184)',
	'Jan 19 16:30:11 raspberrypi lnd[1270]: 2019-01-19 16:30:11.406 [INF] NTFN: New block: height=1453184, sha=000000000000007da346c156ccfca39b7dee6af5100974b0fa56732b0c2b1865 Jan 19 16:30:11 raspberrypi lnd[1270]: 2019-01-19 16:30:11.407 [INF] UTXN: Attempting to graduate height=1453184: num_kids=0, num_babies=0',
	'Jan 19 16:30:11 raspberrypi lnd[1270]: 2019-01-19 16:30:11.442 [INF] CRTR: Block 000000000000007da346c156ccfca39b7dee6af5100974b0fa56732b0c2b1865 (height=1453184) closed 0 channels',
	'Jan 19 16:30:47 raspberrypi lnd[1270]: 2019-01-19 16:30:47.163 [INF] DISC: Broadcasting batch of 2 new announcements',
	'Jan 19 16:32:17 raspberrypi lnd[1270]: 2019-01-19 16:32:17.163 [INF] DISC: Broadcasting batch of 2 new announcements',
	'Jan 19 16:33:47 raspberrypi lnd[1270]: 2019-01-19 16:33:47.163 [INF] DISC: Broadcasting batch of 1 new announcements',
];


export const API_BASE_URL =  'https://www.setcoins.com';
const API_VERSION = 1;

export const API_ROOT = `${API_BASE_URL}/api/v/${API_VERSION}`;

export const API_ROOT_GRAPH = `${API_ROOT}/graph`;


export const CHART_METRIC_TYPES = [
    {
        id: 0,
        title: 'Market Cap',
        value: 'marketCap',
        key: 'market_cap',
        description: '',
    },
    {
        id: 1,
        title: 'Spot Price',
        value: 'price',
        key: 'price',
        description: '',
    },
    {
        id: 2,
        title: 'Trading Volume',
        value: 'volume',
        key: 'volume',
        description: '',
    },
    {
        id: 3,
        title: 'Freq. of Contributors',
        value: 'contributionFrequency',
        key: 'contribution_frequency',
        description: 'Github is a repository hosting service. Think of it s the team "cloud" for lockchain or crypto project. A contribution is generated when someone commits code to a project, opens an issue, or proposes a pull request. Do contributions correlate with productivity? Does a team contributing more/less frequently reflext anything fundamental?',
    },
    {
        id: 4,
        title: 'Avg. Active Contributors',
        value: 'activeContributors',
        key: 'active_contributors',
        description: 'Github is a repository hosting service. Think of it s the team "cloud" for lockchain or crypto project. A contributor is someone who has committed code or documentation directly to an open-source project. How many active contributors does a project have? Is that more or less than before? Find out here',
    },
];


export const DATE_INTERVALS = [
    {
        id: 0,
        title: 'Day',
    },
    {
        id: 1,
        title: 'Week',
    },
    {
        id: 2,
        title: 'Month'
    },
    {
        id: 3,
        title: 'Year'
    },
    {
        id: 4,
        title: 'All'
    }
]