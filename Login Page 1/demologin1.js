
const constbuttonClickLogic= (e) => {
    let signUp = document.querySelector("#sign-up");
    let signIn = document.querySelector("#sign-in");
    let title =  document.querySelector(".sign-up-text");
    let isSignUp = (e.target.id === "sign-up");
    let isSignIn = (e.target.id === "sign-in" )
    if(isSignUp || isSignIn ){
        if(!e.target.classList.contains('current')){
            if(isSignUp){
                signUp.classList.add("current");
                signIn.classList.remove("current");
                title.innerHTML = "Sign Up";
                document.querySelector(".name-section").classList.remove("hide");
            }
            else if(isSignIn){
                signIn.classList.add("current");
                signUp.classList.remove("current");
                title.innerHTML = "Sign In";
                document.querySelector(".name-section").classList.add("hide");
            }
            
        }
    }
    /*
    if(!e.target.classList.contains('current')){
        buttonEl.classList.add("current");
    }*/
}
document.querySelector(".button-section").addEventListener('click', e => {constbuttonClickLogic(e)})

