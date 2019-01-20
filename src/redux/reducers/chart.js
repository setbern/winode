import api from '../../scripts/api';
import moment from 'moment';

import { CHART_METRIC_TYPES, DATE_INTERVALS } from '../../constants';

const initialState = {
 	price: [],
    marketCap: [],
    volume: [],
    dateRange: [moment().subtract(1, 'month'), moment()],
    metricType: CHART_METRIC_TYPES[1],
    dateInterval: DATE_INTERVALS[2],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COIN_DATA:
        return {
            ...state,
            ...action.chartData,
        }
    case TOGGLE_DATE_INTERVAL:
        return {
            ...state,
            dateInterval: action.interval
        }
    case TOGGLE_DATE_RANGE:
        return {
            ...state,
            dateRange: action.dateRange,
        }
    case UPDATE_METRIC_TYPE:
        return {
            ...state,
            metricType: action.metricType
        }
    default:
     	return state;
  	}
}


//Actions
export function changeChartData (chartData) {
    return {
        type: CHANGE_COIN_DATA,
        chartData
    }
}

export function toggleDateInterval (interval) {
    return (dispatch) => {
        let rangeDate = moment().subtract(1, interval.title);

        if (interval.title == 'all' ) {

        } else {
            dispatch({
                type: TOGGLE_DATE_RANGE,
                dateRange: [rangeDate, moment()],
            })
        }

        dispatch({
            type: TOGGLE_DATE_INTERVAL,
            interval
        })
    }
}

export function toggleDateIntervalForAllRange (range) {

    console.log('rangeDate');
    console.log(range);


    return (dispatch) => {
        dispatch({
            type: TOGGLE_DATE_RANGE,
            dateRange: range
        })
        dispatch({
            type: TOGGLE_DATE_INTERVAL,
            interval: DATE_INTERVALS[4]
        })
    }
    
}

export function toggleDateRange (dateRange) {
    console.log('toggleDateRange');
    console.log(dateRange);
    
    return {
        type: TOGGLE_DATE_RANGE,
        dateRange,
    }
}

export function updateMetricType (metricType) {
    return {
        type: UPDATE_METRIC_TYPE,
        metricType
    }
}

export function fetchAllCoins() {
    return dispatch => {
        api.graph({
            query: `{
                allCoins{
                    id,
                    name,
                    ticker_symbol,
                    cmc_id,
                    image_url,
                    chartData{
                      date,
                      price,
                      market_cap,
                      volume
                    },
                    githubData{
                      date,
                      contribution_frequency,
                      active_contributors
                    }
                  }
            }`
        }).then((res) => {
            console.log('res all coin');
            console.log(res)
        }).catch((err) => {
            console.log('updateUser err');
            console.log(err);
        })
        
    }
}
export function fetchCoinData(id) {
    return dispatch => {
        api.graph({
            query: `{
                coin(id: ${id}) {
                    id,
                    name,
                    ticker_symbol,
                    image_url,
                    chartData {
                        date,
                        price,
                        market_cap,
                        volume
                    },
                    githubData {
                        date,
                        contribution_frequency,
                        active_contributors,
                    }
                }
            }`
        })
        .then((res) => {
            console.log('coin chartData res') 
            console.log(res.coin)
            var chartData = {
                marketCap: [],
                volume: [],
                price: [],
                contributionFrequency: [],
                activeContributors: [],
            }

            res.coin.chartData.map((d, i) => {
                chartData.marketCap.push({ date: d.date, marketCap: d.market_cap });
                chartData.volume.push({ date: d.date, volume: d.volume });
                chartData.price.push({ date: d.date, price: d.price });

            })
            res.coin.githubData.map((d, i) => {
                chartData.contributionFrequency.push({ date: d.date, contributionFrequency: d.contribution_frequency });
                chartData.activeContributors.push({ 
                    date: d.date, 
                    activeContributors: d.active_contributors
                });
            })
            let coin = {
                id: res.coin.id,
                name: res.coin.name,
                tickerSymbol: res.coin.ticker_symbol,
                image_url: res.coin.image_url
            };

            dispatch(changeChartData(chartData));
        })
        .catch((err) => {
            console.log('updateUser err');
            console.log(err);
        })
    }
}

//Actions Types

const CHANGE_COIN_DATA = 'CHANGE_COIN_DATA';

const UPDATE_METRIC_TYPE = 'UPDATE_METRIC_TYPE';

const TOGGLE_DATE_INTERVAL = 'TOGGLE_DATE_INTERVAL';
const TOGGLE_DATE_RANGE = 'TOGGLE_DATE_RANGE';