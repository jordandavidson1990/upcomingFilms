import React from 'react';
// import Link from 'react-router';
import Linkify from 'react-linkify';

class Film extends React.Component{


  render(){
    return(
    <div className="film">
    <li>
    <Linkify><a href={this.props.url}>{this.props.name}</a></Linkify>
    </li>
    </div>
  )
  }
}
export default Film;
//
// <Linkify> <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases</a></Linkify>
