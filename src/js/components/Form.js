import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article) => dispatch(addArticle(article))
    };
};

class ConnectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });
    }

    render() {
        const title = this.state.title;
        return (
            <form onSubmit={this.onSubmit}>
                <div style={{ marginBottom: 5 }}>
                    <label htmlFor="title"
                        style={{ marginRight: 10 }}
                    >Title:</label>
                    <input type="text" id="title" value={title} onChange={this.onChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectForm);

export default Form;