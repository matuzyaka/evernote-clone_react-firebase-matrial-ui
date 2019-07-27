import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SideBarItemComponent from "../sideBarItem/sideBarItem";

class SideBarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: "",
      title: null
    };
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (

        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type={"text"}
                className={classes.newNoteInput}
                placeholder={"Enter note title"}
                onKeyUp={e => this.updateTitle(e.target.value)}
              >{console.log(notes)}</input>
              <button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit note
              </button>
            </div>
          ) : null}
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SideBarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SideBarItemComponent>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div>Add a note!!!!!!!!!!</div>;
    }
  }
  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };
  updateTitle = txt => {
    // console.log('here is', txt)
    this.setState({ title: txt });
  };
  newNote = () => {
    console.log(this.state);
  };
  selectNote = () => {
    console.log("select note");
  };
  deleteNote = () => {
    console.log("delete note");
  };


}

export default withStyles(styles)(SideBarComponent);
