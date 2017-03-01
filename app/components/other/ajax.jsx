import React,{Component} from 'react';
class UserGist extends Component{
  constructor(){
    super();
    this.state={
      username:'',
      lastGistUrl:''
    }
  }
  componentWillMount(){
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      //if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      //}
    }.bind(this));
  }
  render(){
    return(
      <div>
        {this.state.username} ..
        <a href={this.state.lastGistUrl} >here</a>
      </div>
    );
  }
}
class Repeat extends Component{
  constructor() {
    super();
  }
  render(){
    return (
      <div>
      <UserGist source="https://api.github.com/users/octocat/gists" />
      </div>
    );
  }
}
export default Repeat;