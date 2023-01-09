import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function SignUp() {

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        user: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }
    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={handleSubmit}>
                <label>emailadres:
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <label>password:
                    <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </label>
                <label>user:
                    <input
                        type="user"
                        name="user"
                        value={formState.user}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Registreren</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;