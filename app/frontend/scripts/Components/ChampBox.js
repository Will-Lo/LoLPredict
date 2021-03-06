import React from 'react';
import CSSModules from 'react-css-modules';
import ChampIcon from './ChampIcon';
import InputBox from './InputBox';

const ChampBox = React.createClass({
	
	propTypes:{
		image: React.PropTypes.string,
		submit: React.PropTypes.func.isRequired
	},

	getDefaultProps: function(){
    return {
      image: '/scripts/Components/ChampIcons/ChampionSquare.png'
    };
  },

	submit: function(champion){
		console.log(champion);
		return this.props.submit(champion)
	},

	render() {
		return (
			<div>
				<InputBox handleEnter={this.submit}/>
				<ChampIcon image={'/scripts/Components/ChampIcons/' + this.props.image}/>
			</div>
		);
	}
});

export default CSSModules(ChampBox);