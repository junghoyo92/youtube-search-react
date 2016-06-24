import React, { Component } from 'react'; // import and pull component with var Component

// ES6 JS class with all the components that React.Component has
// Each class has a state and runs all components within based on the state
// Function based components do not have states, only class base components
class SearchBar extends Component {
  // constructor runs automatically whenever the new instance of class is created
  constructor(props) {
    super(props);               // when a parent class has it's own function and we define the same function, call parent's with super

    this.state = {term: ''};    // this.state notation of setting up state equal to an object is only done within the constructor function
  }

  render() {                      // Render method returns a jsx
    // create the input component with the onChange property
    // which recognizes the actions of onInputChange
    // return <input onChange={this.onInputChange} />;

    // utilizing an arrow function to condense the code
    return (
       // The input changing tells the event which state
       // Besides the constructor, use this.setState
       // To reference state, this.state.object
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
/* Simplified to an arrow funtion
  onInputChange(event) {
    console.log(event.target.value);
  }
  */

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
