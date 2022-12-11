import { redirect } from '@sveltejs/kit';
import Cookies from 'js-cookie'
import PocketBase from 'pocketbase';
let pb = new PocketBase('http://127.0.0.1:8090')

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const user = await pb.users.authViaEmail(data.email, data.password);
      console.log(pb.authStore)
      // pb.authStore.exportToCookie(user);
      // Cookies.set('foo', 'bar')
      // Cookies.set('pb_auth', structuredClone(pb.authStore))

      // console.log(user)
      // console.log(structuredClone(pb.authStore))

      // console.log(pb.authStore)
      // console.log(structuredClone(pb.authStore.isValid()))
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				email: data.email
			};
		}
  	throw redirect(303, '/');
    // console.log('locals')
    // console.log(locals)
    // // console.log(pb.authStore)
    // return {
    //   headers: { Location: '/'},
    //   status: 303
    // }
  }
}
