import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

let pb = new PocketBase('http://127.0.0.1:8090')

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			await pb.users.authViaEmail(data.email, data.password);
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				email: data.email
			};
		}
  	// throw redirect(303, '/');
    console.log('locals')
    console.log(locals)
    // console.log(pb.authStore)
    return {
      headers: { Location: '/', 'set-cookie': pb.authStore.exportToCookie() },
      status: 303
    }
  }
}
