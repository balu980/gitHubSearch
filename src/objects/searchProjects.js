import React from 'react';
import Time from 'react-time'

class serchProject extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    

componentDidMount() {
    fetch(`https://api.github.com/search/repositories?q=${this.props.params.querryString}`)
        .then(response => response.json())
        .then(
            projectList => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    projectList: projectList
                });
            }
        );
}

    renderStat(stat) {
        let now = new Date(stat.updated_at.split("T")[0])

        return (
            <li key={stat.name} >
                <div className="project_name">

                    <img className="user-info__avatar" src={stat.owner.avatar_url} alt={stat.name} />

                    {stat.full_name}

                </div>
                <div className="information">Open Issues count : {stat.open_issues_count}</div>
                <div className="information">watchers : {stat.watchers_count}</div>

                <div className="information">Last Updated : <Time value={now} format="MMM DD YYYY" /> </div>

            </li>
        );
    }

render() {

    if (!this.state.projectList) {
        return (<div className="user-page">LOADING...</div>);
    }

    const projectResponce = this.state.projectList;
    const projectList = projectResponce.items;


    return (
        <div className="box">
            <h3 className="box_header">Repositories - {projectResponce.total_count}</h3>
        <ul className="project_list">
        {projectList.map(this.renderStat)}
        </ul>
        </div>
    )
}

};
export default serchProject;