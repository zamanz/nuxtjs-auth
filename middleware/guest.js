export default function (contxt){
    if(contxt.$auth.$state.loggedIn){
        contxt.redirect('/dashboard')
    }
}
