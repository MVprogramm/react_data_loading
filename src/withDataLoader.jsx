import React from 'react';
import Spinner from './Spinner.jsx';

const withDataLoader = (url) => {
  return function(Component) {
    class Wrapper extends React.Component {
      state = {
        data: {},
        isLoad: false
      }
       
      componentDidMount() {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({
              data: data,
              isLoad: true
            });
          });
      }
     
      render() {
        const { data, isLoad } = this.state;
        if(!isLoad) return <Spinner size='50px'/>;
        return <Component data={data}/>;
      }
    };
   
    return Wrapper;
  };
};

export default withDataLoader;