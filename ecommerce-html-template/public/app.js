(function(){

    // Your web app's Firebase configuration
    const config = {
      apiKey: "AIzaSyCnkq51j6b5DgohqNMe1jeoMz-IFPFaJm8",
      authDomain: "fir-database-4021f.firebaseapp.com",
      databaseURL: "https://fir-database-4021f.firebaseio.com",
      projectId: "fir-database-4021f",
      storageBucket: "fir-database-4021f.appspot.com",
      messagingSenderId: "396019109228",
      appId: "1:396019109228:web:c9c46af1e4ad48f1523749"
      };
      // Initialize Firebase
      firebase.initializeApp(config);
    
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      //const btnLogout = document.getElementById('btnLogout');
    
      //add login event
      btnLogin.addEventListener('click',e=>{
        //get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
      });
    
      //add sign up event
      btnSignUp.addEventListener('click',e =>{
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign up
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
      });
    
      /*btnLogout.addEventListener('click',e =>{
    firebase.auth().signOut();
      });*/
    
      //add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
          console.log(firebaseUser);
        }else{
          console.log('not logged in');
        }
      });
    
    }());