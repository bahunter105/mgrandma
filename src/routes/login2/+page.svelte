<script>
  import PocketBase from 'pocketbase';

  const client = new PocketBase('http://127.0.0.1:8090');

  let state ={
    email:"",
    password:"",
    name:"",
  }
  let status = false
  async function sendLogin(){
    const user = await client.users.create({
      email: state.email,
      password: state.password,
      passwordConfirm: state.passwordConfirm,
    });
    console.log(user)
    // if(user){
    //   updateProfile()
    //   sendeMail()
    // }
  }

  // async function updateProfile(){
  //   await client.records.update('profiles', user.profile.id, {
  //       name: state.name,
  //   });
  // }
  // async function sendeMail(){
  //   await client.users.requestVerification(state.email);
  // }

  //FOR LOGIN NOW
  async function btnLogin(){
    const authData = await client.users.authViaEmail(state.email, state.password);
    if(authData){
      console.log("success Login")
      status = true
    }
  }

</script>
<div>
  <h1>Register</h1>
  name: <input type="text" bind:value={state.name} name="">
  <br/>
  email: <input type="text" bind:value={state.email} name="">
  <br/>
  password: <input type="password" bind:value={state.password} name="">
  <br/>
  confirm password: <input type="password" bind:value={state.passwordConfirm} name="">
  <br/>
  <button
  on:click={sendLogin}
  >Register now</button>
  <hr/>


  <h1>Login</h1>
  email: <input type="text" bind:value={state.email} name="">
  <br/>
  password: <input type="password" bind:value={state.password} name="">
  <br/>
  <button
  on:click={btnLogin}
  >login now</button>

  <hr/>
  {#if status == true}
  <h1>Login Successful</h1>
  {/if}
  {#if status == false}
  <h1>You're Not Logged In</h1>
  {/if}

</div>
