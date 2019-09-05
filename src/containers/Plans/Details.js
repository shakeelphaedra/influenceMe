import React , {Component} from 'react';
import {getPlanDetails, changeCurrentPlan} from '../../../API';
import PlanDetails from '../../components/AfterLoginScreen/Plans/Details';
import {showMessage} from 'react-native-flash-message';
import { NAMED_COLORS } from '../../common/AppColors';

class Details extends Component {
    state = {
        loading: true,
        plan: {},
        plan_days: [], 
        currentPlan: false
    };

    reverseBack = () => {
      this.setState({currentPlan: false})
    }

    changePlan = () => {
      changeCurrentPlan(this.state.plan.id).then(res => {
        if(res.return == false){
          showMessage({
            message: res.message,
            type: 'danger',
            backgroundColor: NAMED_COLORS.orangeColor
          })
        }
      })
      this.setState({currentPlan: false})
    }


    componentDidMount () {
        const { navigation } = this.props;
        const planId = navigation.getParam('planId', '1');
        getPlanDetails(planId).then(({plan, plan_days, currentPlan}) => {
            this.setState({loading: false, plan: plan, plan_days: plan_days, currentPlan: currentPlan});
        }).catch(error => {
        })
    };

    render () {
        const {plan, plan_days, loading, currentPlan} =  this.state;
        return <PlanDetails plan={plan} plan_days={plan_days} loading={loading} navigation={this.props.navigation} currentPlan={currentPlan} reverseBack={this.reverseBack} changePlan={this.changePlan}/>
    }
};

export default Details;
