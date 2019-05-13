(function() {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjVvZ50Uao_14ZWuY1G7jvnJC9UODfpNk",
    authDomain: "seniorproject-e03a8.firebaseapp.com",
    databaseURL: "https://seniorproject-e03a8.firebaseio.com",
    projectId: "seniorproject-e03a8",
    storageBucket: "seniorproject-e03a8.appspot.com",
    messagingSenderId: "276940989437"
  };
  firebase.initializeApp(config);


// Get elements
	const usrEmail = document.getElementById('compEmail');
	const usrPass = document.getElementById('Password');
	const btnLogin = document.getElementById('btnSubmit');
	const btnLogout = document.getElementById('btnLogout');
	const btnSignUp = document.getElementById('btnSignUp');

// Login event
	btnLogin.addEventListener('click', e =>{
	const email = usrEmail.value;
	const pass = usrPass.value;
	const auth = firebase.auth();
//	Sign in
	const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.catch(e => console.log(e.message));
	});
	
// Signup Event

	btnSignUp.addEventListener('click', e => {
//	Get Email and Password
	//	TODO: Validate Email
	const email = usrEmail.value;
	const pass = usrPass.value;
	const auth = firebase.auth();
//	Sign up
	const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise.catch(e => console.log(e.message));
	});
	
// Log out event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
//Add Realtime Listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('d-none');
			btnSubmit.classList.add('d-none');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('d-none');
			
		}
	});
	
	
}());
