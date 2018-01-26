import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployee, listEmployees, saveAndReload } from '../../actions';

import './style.css';

class EditEmployee extends React.Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props;
    this.props.getEmployee(id);
  }
  handleClickProject = id => {
    console.log(id);
  };

  render() {
    const { employees: { isFetching, one } } = this.props;
    console.log(one);
    return (
      <div className="employee-container">
        <div>
          {isFetching ? (
            <h3>loading...</h3>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Sexo</th>
                </tr>
              </thead>
              <tbody />
            </table>
          )}
          <button onClick={this.handleNewProject}>New Project</button>
        </div>
        <hr />
        {/*<div>{this.renderSelectedProject(selectedProject)}</div>*/}
      </div>
    );
  }
}

function mapStateToProps({ employees }, ownProps) {
  return {
    employees,
    id: ownProps.match.params.id,
  };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, {
  getEmployee,
  listEmployees,
  saveAndReload,
})(EditEmployee);
