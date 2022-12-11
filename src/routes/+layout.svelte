<script>
  import PocketBase from 'pocketbase';
  import Cookies from 'js-cookie'
  const client = new PocketBase('http://127.0.0.1:8090');
  export let data;
	const { pb } = data;
  // console.log(pb.authStore)
  // console.log(pb.authData)

  // console.log(pb)
  // const u = client.users.authViaEmail("hunter@brightfutures.net", '123456')
  // console.log('client')
  // console.log(client)

  // console.log(client.authStore)

  let state ={
    email:"",
    password:"",
    name:"",
  }
  let loggedIn = false
  //FOR LOGIN NOW
  async function btnLogin(){
    const authData = await client.users.authViaEmail(state.email, state.password);
    // if(authData){
    //   // authStoreObject = authData;
    //   // console.log(pb.authStore)
    //   loggedIn = true
    //   // await pb.authStore.exportToCookie(options = {}, key='pb_auth')
    //   Cookies.set('foo', 'bar')
    //   Cookies.set('pb_auth', JSON.stringify(pb.authStore))

    // }
  }
  async function btnLogout(){
    pb.authStore.clear()
    // console.log(pb.authStore)
    // loggedIn = false
  }

  async function btnCookie(){
    // Cookies.set('foo', 'bar')
    // Cookies.set('pb_auth_nostring', client.authStore)
    // Cookies.set('pb_auth', JSON.stringify(client.authStore))
    Cookies.set('pb_auth', client.authStore.exportToCookie())
    // Cookies.set(client.authStore.exportToCookie())

    // console.log(pb.authStore)
    // loggedIn = false
  }

  function btnGetCookie() {
    const cook = Cookies.get('pb_auth')
    console.log('Cookie CALLED  cook')
    console.log(cook)
  }

  function btnLoadPBFromCookie() {
    const cook = Cookies.get('pb_auth')
    // console.log(JSON.parse(cook))
    const cookiePB = new PocketBase('http://127.0.0.1:8090')
    console.log('Cookie PB before loaded from Cookie')
    console.log(cookiePB)
    localStorage.clear()
    cookiePB.authStore.clear()
    client.authStore.clear()
    console.log('Cookie PB After local storage deleted, before loaded from Cookie')
    console.log(cookiePB)

    btnGetCookie()
    cookiePB.authStore.loadFromCookie(cook)
    console.log('Cookie PB after loaded from Cookie')
    console.log(cookiePB)
  }
  // console.log(pb)
</script>

<nav>
  <a href="/">home</a>
  <a href="/login">login page</a>
  <a href="/register">registration page</a>
  <!-- <button on:click={btnLogout}>log out</button> -->
  <button on:click={btnCookie}>Add Cookie</button>
  <button on:click={btnGetCookie}>Get Cookie</button>
  <button on:click={btnLoadPBFromCookie}>Load PB From Cookie</button>
</nav>

{#if loggedIn === false }
  <h2>Login</h2>
  email: <input type="text" bind:value={state.email} name="">
  <br/>
  password: <input type="password" bind:value={state.password} name="">
  <br/>
  <button on:click={btnLogin}>login now</button>
<!-- <p>Loading...</p> -->
{:else}
  <button on:click={btnLogout}>log out</button>
  {/if}

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
