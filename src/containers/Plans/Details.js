import React , {Component} from 'react';
import {getPlanDetails} from '../../../API';
import PlanDetails from '../../components/AfterLoginScreen/Plans/Details';

class Details extends Component {
    state = {
        loading: true,
        plan: {},
        plan_days: []
    };

    componentDidMount () {
        const { navigation } = this.props;
        const planId = navigation.getParam('planId', '1');
        getPlanDetails(planId).then(({plan, plan_days}) => {
            this.setState({loading: false, plan: plan, plan_days: plan_days});
        }).catch(error => {
        })
    };

    render () {
        const {plan, plan_days, loading} =  this.state;
        return <PlanDetails plan={plan} plan_days={plan_days} loading={loading} navigation={this.props.navigation}/>
    }
};

export default Details;
