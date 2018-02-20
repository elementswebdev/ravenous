import Business from '../Business/Business';
import React from 'react';

class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList"> 
				{
					this.props.businesses.map(business => {
  						return <Business businesses={business} key={business.id}/>;
					})
				}
			</div>
		);
	}
}

export default BusinessList;
