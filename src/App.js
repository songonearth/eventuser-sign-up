import React from 'react';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Input extends React.Component {
    render() {
		return (
			<div className="Input">
				<input 
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>	
				<label htmlFor={this.props.id}></label>
			</div>
		);
	}
}

class Modal extends React.Component {
    render() {
		return (
			<div>
				<h1>Let's Get Started</h1>
				<div className="Modal">
					<form 
						onSubmit={this.props.onSubmit}
						className="ModalForm">
						
						<Input
							id="username"	
							type="email"
							placeholder="Email Address" />
						
					</form>
					<button className="btn-start"> 
							Start <i className="fa fa-fw fa-chevron-right"></i>
						</button>
				</div>
			</div>
		);
	}
}

class App extends React.Component {
    state = { mounted: false };

    componentDidMount() {
		this.setState({ mounted: true });
	}

    handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	};

    render() {
		var child;

		if(this.state.mounted) {
			child = (<Modal onSubmit={this.handleSubmit} />);
		}
		
		return(
			<div className="App">
				<NavBar />
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default App;
