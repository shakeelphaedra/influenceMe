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
        currentPlan: false,
        any_plan: false,
        okRes:  false
    };

    reverseBack = () => {
      this.setState({currentPlan: false, any_plan: false})
      this.props.navigation.goBack()
    }

    changePlan = () => {
      changeCurrentPlan(this.state.plan.id).then(res => {
        if(res.return == false){
          this.props.navigation.goBack()
          showMessage({
            message: res.message,
            type: 'danger',
            backgroundColor: NAMED_COLORS.orangeColor
          })
        }else{
          setTimeout(() => {
            this.setState({okRes: true})
          }, 100);
        }
      })
      this.setState({currentPlan: false, any_plan: false})
    }

    okResHandler = () => {
      this.setState({okRes: false})
    }

    componentDidMount () {
      console.log(this.state)
        const { navigation } = this.props;
        const planId = navigation.getParam('planId', '1');
        getPlanDetails(planId).then(({plan, plan_days, currentPlan, any_plan}) => {
            this.setState({loading: false, plan: plan, plan_days: plan_days, currentPlan: currentPlan, any_plan: any_plan});
        }).catch(error => {
        })
    };

    render () {
        const {plan, plan_days,okRes, loading, currentPlan,any_plan} =  this.state;
        return <PlanDetails okRes={okRes} plan={plan} plan_days={plan_days} any_plan={any_plan} loading={loading} navigation={this.props.navigation} currentPlan={currentPlan} reverseBack={this.reverseBack} changePlan={this.changePlan} okResHandler={this.okResHandler}/>
    }
};

export default Details;
