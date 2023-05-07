export class AddUserForm extends Comment {
    state = {
        name: '',
        email: '',
    };

    handleChange = ({ target: { value, name} }) => {
        this.setState(
         { [name]: value },
     )
    };

    handleSumbit = (event) => {
        event.preventDefault();
        this.props.addUserProps({ ...this.state })
        
        this.setState(
            {
                name: '',
                email: '',
            }
        )
    }
    
    render() {
        const { name, email } = this.state;
        return (
            <form onSubmit={this.handleSumbit}>
                <label htmlFor="">
                    Name
                    <input type="text" value={name} onChange={this.handleChange} />
                </label>
                <label htmlFor="">
                    Email
                    <input type="text" value={email} onChange={this.handleChange}/>
                </label>
                <button type="button">Save</button>
            </form>
        );
    };
};