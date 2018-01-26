import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployee, listEmployees, saveAndReload } from '../../actions';

import './style.css';

class ListEmployees extends React.Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.listEmployees();
  }

  handleClickProject = id => {
    console.log(id);
  };

  renderLines = () => {
    const { employees } = this.props;
    return employees.data.map(e => {
      return (
        <tr style={{ cursor: 'pointer' }} key={e._id}>
          <td
            onClick={() => {
              this.handleClickProject(e._id);
            }}
          >
            <Link to={`/employee/${e._id}`}>{e.name}</Link>
          </td>
          <td>{e.birthday}</td>
          <td>{e.gender}</td>
        </tr>
      );
    });
  };

  render() {
    const { employees } = this.props;
    return (
      <div className="employee-container">
        <div>
          {employees.isFetching ? (
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
              <tbody>{this.renderLines()}</tbody>
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

function mapStateToProps(state) {
  return { employees: state.employees };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, {
  getEmployee,
  listEmployees,
  saveAndReload,
})(ListEmployees);
