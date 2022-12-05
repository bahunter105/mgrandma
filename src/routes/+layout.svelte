<script>
  // import PocketBase from 'pocketbase';

  // const pb = new PocketBase('http://127.0.0.1:8090');
  export let data;
	const { pb } = data;
  // console.log(pb.authStore)
  // console.log(pb.authData)

  // let state ={
  //   email:"",
  //   password:"",
  //   name:"",
  // }
  // let loggedIn = false
  //   //FOR LOGIN NOW
  // async function btnLogin(){
  //   const authData = await pb.users.authViaEmail(state.email, state.password);
  //   if(authData){
  //     // authStoreObject = authData;
  //     console.log(pb.authStore)
  //     loggedIn = true
  //     await pb.authStore.exportToCookie(options = {}, key='pb_auth')
  //   }
  // }
  async function btnLogout(){
    pb.authStore.clear()
    console.log(pb.authStore)
    // loggedIn = false
  }

  // console.log(pb.authStore)
</script>

<nav>
  <a href="/">home</a>
  <a href="/login">login page</a>
  <a href="/register">registration page</a>
</nav>


<!-- {#if loggedIn === false }
  <h2>Login</h2>
  email: <input type="text" bind:value={state.email} name="">
  <br/>
  password: <input type="password" bind:value={state.password} name="">
  <br/>
  <button on:click={btnLogin}>login now</button> -->
<!-- <p>Loading...</p> -->
<!-- {:else}
  <button on:click={btnLogout}>log out</button>
{/if} -->

<main>
  <slot />
</main>

<style>
	nav {
		display: flex;
	}
	nav a {
		margin-right: 1rem;
	}
</style>
