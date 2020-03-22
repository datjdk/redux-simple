import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const mapStateToProps = ({ remoteArticles }) => {
    return {
        articles: remoteArticles.slice(0, 100)
    };
};

export class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.articles.map(el => (
                        <li key={el.id} >
                            {el.title}
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(Post);