import React, {Component} from 'react';
import Card from  './Card';

class Plan extends Component {
    render () {
        const  {onPress, type, name, id, image_url, titleStyle, typeStyle} = this.props;
        return (
            <Card  onPress={onPress} type={type} name={name} id={id} image_url={image_url} titleStyle={titleStyle} typeStyle={typeStyle} />
        )
    }
}
export {Plan}