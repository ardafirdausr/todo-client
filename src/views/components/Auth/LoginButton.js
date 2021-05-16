import React from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import todoAPI from '../../../adapters/todoAPI';
import { useUserContext } from '../../../contexts/user';
import { clientId } from '../../../config/oauth';

function LoginButton({ to }) {
	const history = useHistory();
	let { setUser } = useUserContext();

	const successHandler = async function (response) {

		let { profileObj: profile, tokenObj: token } = response;
		let googleAuth = {
			name: profile.name,
			email: profile.email,
			imageUrl: profile.imageUrl,
			tokenId: token.id_token
		}

		try {
			let response = await todoAPI.post('/auth/login', {
				"token_id": googleAuth.tokenId
			});
			let { data: user, token } = response.data;
			user.token = token
			localStorage.setItem("user", JSON.stringify(user))
			setUser(user);
			history.push(to);
		} catch(err) {
			alert("Login Failed")
			console.log(err)
		}
	}

	const failedHandler = function (resp) {
		console.log(resp)
	}

	return (
		<GoogleLogin
			clientId={clientId}
			buttonText="Login With Google"
			onSuccess={successHandler}
			onFailure={failedHandler}
			cookiePolicy={'single_host_origin'}
			isSignedIn={true}
			theme="dark"/>
	);
}

export default LoginButton;
