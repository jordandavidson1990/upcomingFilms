import React from 'react';
import Linkify from 'react-linkify';


class UpcomingFilms extends React.Component{

  render(){
    return(
      <div className="upcoming-films">
      <h2>
      <Linkify> <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases</a></Linkify>
      </h2>
      </div>
    )
  }


}
export default UpcomingFilms;
