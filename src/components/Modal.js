import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSave}>
        <div>
          <div className="modal d-block" tabindex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Rename</h5>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={this.props.onClose}
                  >
                    x
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    style={{ width: "25em" }}
                    type="text"
                    onChange={this.props.onRename}
                    value={this.props.title}
                    autoFocus
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={this.props.onClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.onSave}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Modal;
