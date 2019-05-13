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
	const usrEmail = document.getElementById('Login');
	const usrPass = document.getElementById('Password');
	const btnLogin = document.getElementById('Submit');
	const btnLogout = document.getElementById('Logout');

// Login event
	btnLogin.addEventListener('click', e =>{
	const email = usrEmail.value;
	const pass = usrPass.value;
	const auth = firebase.auth();
//	Sign in
	const promise = auth.signInWithEmailAndPassword(email,pass);
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
			btnLogout.classList.remove('hidden');
			btnLogin.classList.add('hidden');
			usrEmail.classList.add('hidden');
			usrPass.classList.add('hidden');
		} else {
			console.log('not logged in');
			btnLogin.classList.remove('hidden');
			btnLogout.classList.add('hidden');
			usrEmail.classList.remove('hidden');
			usrPass.classList.remove('hidden');
			}
	});
	
	
}());
