import React from 'react';
import PhieuThuPopup from './phieuthu/phieuthu';
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <PhieuThuPopup
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    );
  }
}


export default App;
