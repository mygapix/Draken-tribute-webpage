import React, { Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx';
import './comments.css';
import AddIcon from '@material-ui/icons/Add';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      list: [],
    }
  }

  updateNoteText(input) {
    this.setState({
      userInput: input
    })
  };

  addNotes(input) {
    if (this.setState.noteText === null) {}
    if (this.setState.noteText === '') {return}
      let listArr = this.state.list;
      listArr.push(input);
      this.setState({
        list: listArr,
        userInput: '',
      });
      this.textInput.focus();
    }

  handleKeyProcess(event) {
    if (event.key === 'Enter') {

    }
  }

  deleteNote(index) {
    let listArr = this.state.list;
    listArr.splice(index, 1);
    this.setState({ list: listArr})
  }

  render() {

    return (
      <div>
        <Navbar />
        <Jumbotron title="Add comments " subtitle=" ." />
        <div className="commentContainer">
          <input type="text"
          ref={((input) => {this.textInput = input})}
          className="textInput"
          value={this.state.userInput}
          onChange={(e) => this.updateNoteText(e.target.value)}
          onKeyPress={this.handleKeyProcess.bind(this)}
          />
          <div
            className="btn"
            onClick={ ()=> this.addNotes(this.state.userInput)}><i className="far fa-arrow-alt-circle-right"></i>
          </div>
          <div id="list">
            {this.state.list.map( (val) => <li>{val}<button className="delNote" onClick= {()=> this.deleteNote()}><i class="far fa-trash-alt"></i></button></li>)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default Comments
