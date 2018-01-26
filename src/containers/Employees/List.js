import React from 'react';
import { connect } from 'react-redux';
import { getEmployee, listEmployees, saveAndReload } from '../../actions';

// import './style.css';

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

  renderLines = () => {
    const { employees } = this.props;
    employees.all.map(p => {
      return (
        <div style={{ cursor: 'pointer' }} key={p._id}>
          <h1
            onClick={() => {
              this.handleClickProject(p.code);
            }}
          >
            {p.name}
          </h1>
        </div>
      );
    });
  };

  render() {
    const { employees, selectedProject } = this.props;
    return (
      <div>
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
        <div>{this.renderSelectedProject(selectedProject)}</div>
      </div>
    );
  }
}

function mapStateToProps({ employees }) {
  return { employees };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, {
  getEmployee,
  listEmployees,
  saveAndReload,
})(ListEmployees);
