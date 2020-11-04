import './App.css';
//Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = withStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

const classes = useStyles;

class App extends Component {

  constructor(props) {
    super(props);

    // initialize our state
    this.state = this.defaultState;
    // this.clientAPI = new ClientAPI(this.props.api_base_url);
    // this.loadingIds = []
  }


  get defaultState() {

    const defaultState = {
      activeTab: "production",
    };

    return defaultState;
  }

  callAPI = (name, amount, time) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ "name": name, "amount": amount, "time": time });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://hftmr9itpe.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }


  handleDateTimeChange = (event, newValue) => {

  }

  handleTabChange = (event, newValue) => {
    this.setActiveTab(newValue);
  }

  handleMouseDownTab = event => {
    event.preventDefault();
  };

  render() {

    return (
      <div className="App">
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Log Feeding</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Container className="mt-5">
            <Row>
              <Col>
                <Card>

                  <Navbar expand="lg" className="mt-0 mb-0 card-header pb-1 pt-1">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav.Item className="mr-4">
                          New Entry
                      </Nav.Item>

                    </Navbar.Collapse>
                  </Navbar>

                  <Card.Body>

                    <Row>
                      <Col className="p-2">
                        <TextField
                          id="name"
                          label="Name"
                          type="text"
                          variant="outlined"
                          defaultValue="Avery"
                          style={{ width: 200 }}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Col>
                      <Col className="p-2">
                        <TextField
                          id="amount"
                          label="Amount"
                          type="number"
                          variant="outlined"
                          defaultValue="10"
                          style={{ width: 100 }}
                          className={classes.numberField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Col>
                      <Col className="p-2">
                        <TextField
                          id="when"
                          label="Time"
                          type="time"
                          variant="outlined"
                          defaultValue="07:30"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                      </Col> </Row>
                    <Row className="mt-3">
                      <Col>
                        <Button variant="outline-success" onclick="callAPI(document.getElementById('name').value,document.getElementById('amount').value,document.getElementById('time').value)">Call API</Button>

                      </Col>
                    </Row>


                  </Card.Body>
                </Card>
              </Col>
              <Col>

                <Card>
                  <Navbar expand="lg" className="mt-0 mb-0 card-header pb-1 pt-1">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <div className="custom-control-inline ">
                          Last 10 Feedings
            </div>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                  <Card.Body>
                    <div className="text-secondary mb-3">ABCDEFG</div>

EEE

      </Card.Body>
                  <Card.Footer>
                    FFF
      </Card.Footer>
                </Card>
              </Col>
            </Row>


          </Container>
        </Container>
      </div >
    );
  }
}
export default App;
